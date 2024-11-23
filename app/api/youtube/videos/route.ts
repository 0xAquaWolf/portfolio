import { google } from 'googleapis';
import { NextResponse } from 'next/server';

// Cache duration in seconds (1 hour)
const CACHE_DURATION = 3600;
let cachedData: any = null;
let lastFetchTime: number = 0;

interface YouTubeVideo {
  id: string;
  title: string;
  imageUrl: string;
  videoUrl: string;
  viewCount: number;
  publishedAt: string;
}

async function getTopVideos(channelId: string): Promise<YouTubeVideo[]> {
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
  });

  // First, get all video IDs from your channel
  const playlistResponse = await youtube.channels.list({
    part: ['contentDetails'],
    id: [channelId],
  });

  const uploadsPlaylistId = playlistResponse.data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) throw new Error('Could not find uploads playlist');

  // Get the latest 50 videos
  const videosResponse = await youtube.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: uploadsPlaylistId,
    maxResults: 50,
  });

  if (!videosResponse.data.items?.length) {
    throw new Error('No videos found');
  }

  // Get video IDs for statistics
  const videoIds = videosResponse.data.items.map(
    item => item.contentDetails?.videoId as string
  ).filter(Boolean);

  // Get video statistics
  const statsResponse = await youtube.videos.list({
    part: ['statistics'],
    id: videoIds,
  });

  // Combine video data with statistics
  const videos = videosResponse.data.items.map((item, index) => {
    const stats = statsResponse.data.items?.[index]?.statistics;
    const snippet = item.snippet;
    const videoId = item.contentDetails?.videoId;

    return {
      id: videoId,
      title: snippet?.title || '',
      imageUrl: snippet?.thumbnails?.maxres?.url || 
                snippet?.thumbnails?.standard?.url ||
                snippet?.thumbnails?.high?.url ||
                '',
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      viewCount: parseInt(stats?.viewCount || '0', 10),
      publishedAt: snippet?.publishedAt || '',
    };
  });

  // Sort by view count
  return videos.sort((a, b) => b.viewCount - a.viewCount);
}

export async function GET() {
  try {
    const now = Date.now();
    
    // Return cached data if it's still valid
    if (cachedData && (now - lastFetchTime) / 1000 < CACHE_DURATION) {
      return NextResponse.json(cachedData);
    }

    // Fetch new data
    const videos = await getTopVideos('UCkwRYP1J1hjRXwo5lyBRWdQ');
    
    // Update cache
    cachedData = videos;
    lastFetchTime = now;

    return NextResponse.json(videos);
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}
