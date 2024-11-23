import { google } from 'googleapis';
import { Octokit } from '@octokit/rest';
import { NextResponse } from 'next/server';

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 1000;
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

const debugLog = (...args: any[]) => {
  if (DEBUG_MODE) {
    console.log(...args);
  }
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchWithRetry<T>(
  fetchFn: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = INITIAL_RETRY_DELAY,
): Promise<T> {
  try {
    return await fetchFn();
  } catch (error: any) {
    if (retries === 0 || !error?.response?.status) throw error;

    if (error.response.status === 429) {
      const resetTime = error.response.headers?.['x-ratelimit-reset'];
      if (resetTime) {
        const waitTime = Number(resetTime) * 1000 - Date.now();
        if (waitTime > 0) {
          await sleep(Math.min(waitTime, 60000));
        }
      }
    }

    await sleep(delay);
    return fetchWithRetry(fetchFn, retries - 1, delay * 2);
  }
}

async function getYoutubeStats(channelId: string) {
  debugLog('Fetching YouTube stats for channel:', channelId);
  
  const youtube = google.youtube({
    version: 'v3',
    auth: process.env.YOUTUBE_API_KEY,
  });

  // Create the request
  const request = youtube.channels.list({
    part: ['statistics'],
    id: [channelId],
    fields: 'items(statistics(viewCount,subscriberCount))',
  });

  try {
    // Make the API call
    const response = await request;
    
    // Log everything in detail
    debugLog('YouTube API Raw Response:', JSON.stringify({
      status: response.status,
      headers: response.headers,
      data: response.data,
      items: response.data.items,
      statistics: response.data.items?.[0]?.statistics,
    }, null, 2));

    if (!response.data.items?.[0]) {
      throw new Error('Channel not found');
    }

    const stats = response.data.items[0].statistics;
    const result = {
      views: Number(stats?.viewCount) || 0,
      subscribers: Number(stats?.subscriberCount) || 0,
    };

    debugLog('Processed YouTube stats:', result);
    return result;
    
  } catch (error) {
    console.error('Error in YouTube API call:', error);
    throw error;
  }
}

async function getGithubStats(username: string) {
  debugLog('Fetching GitHub stats for user:', username);
  
  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  const { data: repos } = await octokit.repos.listForUser({
    username,
    per_page: 100,
    sort: 'updated',
  });

  const stars = repos.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);
  debugLog('GitHub stars count:', stars);
  
  return { stars };
}

export async function GET() {
  debugLog('=== Starting new API call ===');
  debugLog('Timestamp:', new Date().toISOString());
  
  try {
    const [youtube, github] = await Promise.all([
      fetchWithRetry(() => getYoutubeStats('UCkwRYP1J1hjRXwo5lyBRWdQ')),
      fetchWithRetry(() => getGithubStats('0xAquaWolf')),
    ]);

    const responseData = {
      youtube,
      github,
      timestamp: Date.now(),
    };

    debugLog('=== Final response data ===');
    debugLog(JSON.stringify(responseData, null, 2));

    return new NextResponse(
      JSON.stringify(responseData),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('=== Error in API call ===');
    console.error(error);
    
    return new NextResponse(
      JSON.stringify({
        error: 'Failed to fetch stats',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
