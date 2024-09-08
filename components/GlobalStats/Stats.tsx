import { google } from 'googleapis';
import { Octokit } from '@octokit/rest';
import NumberTicker from '../magicui/number-ticker';

// Types for our stats
interface Stat {
  value: number;
  label: string;
}

// Function to format large numbers
// const formatNumber = (num: number): number => num;

// Function to fetch YouTube channel info
async function getChannelInfo(channelId: string): Promise<Stat[]> {
  if (process.env.NODE_ENV === 'development') {
    return [
      { value: 10000000, label: 'Youtube Views' },
      { value: 100000, label: 'Youtube Subscribers' },
    ];
  }
  return [
    { value: 30623, label: 'Youtube Views' },
    { value: 829, label: 'Youtube Subscribers' },
  ];

  // const youtube = google.youtube({
  //   version: "v3",
  //   auth: process.env.YOUTUBE_API_KEY,
  // });

  // try {
  //   const response = await youtube.channels.list({
  //     part: ["statistics"],
  //     id: [channelId],
  //   });

  //   if (response.data.items && response.data.items.length > 0) {
  //     const channel = response.data.items[0];
  //     return [
  //       {
  //         value: Number(channel.statistics?.viewCount) || 0,
  //         label: "Youtube Views",
  //       },
  //       {
  //         value: Number(channel.statistics?.subscriberCount) || 0,
  //         label: "Youtube Subscribers",
  //       },
  //     ];
  //   } else {
  //     console.log("Channel not found");
  //     return [];
  //   }
  // } catch (error) {
  //   console.error("Error fetching channel info:", error);
  //   return [];
  // }
}

// Function to fetch GitHub stars
async function getGitHubStars(username: string): Promise<number> {
  if (process.env.NODE_ENV === 'development') {
    return 528;
  }

  const octokit = new Octokit({
    auth: process.env.GITHUB_ACCESS_TOKEN,
  });

  try {
    const { data: repos } = await octokit.repos.listForUser({
      username,
      per_page: 100, // Adjust if you have more than 100 repos
    });

    const totalStars = repos.reduce(
      (sum, repo) => sum + (repo.stargazers_count ?? 0),
      0,
    );
    console.log('Total Stars:', totalStars);
    return totalStars;
  } catch (error) {
    console.error('Error fetching GitHub stars:', error);
    return 0;
  }
}

// Server Component
export const Stats = async () => {
  const YOUR_CHANNEL_ID = 'UCkwRYP1J1hjRXwo5lyBRWdQ';
  const YOUR_GITHUB_USERNAME = '0xAquaWolf';

  let youtubeStats: Stat[] = [];
  let githubStars = 0;

  try {
    [youtubeStats, githubStars] = await Promise.all([
      getChannelInfo(YOUR_CHANNEL_ID),
      getGitHubStars(YOUR_GITHUB_USERNAME),
    ]);
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Provide fallback data in case of errors
    youtubeStats = [
      { value: 0, label: 'Youtube Views' },
      { value: 0, label: 'Youtube Subscribers' },
    ];
    githubStars = 0;
  }

  const statsData: Stat[] = [
    ...youtubeStats,
    { value: githubStars, label: 'Github Stars' },
  ];

  return (
    <section className="mx-auto mb-20 max-w-[1440px] px-4 py-12 text-white lg:mb-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-base font-semibold lg:text-2xl">
          Global Stats
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="mb-8 w-full px-6 text-center md:mb-0 md:w-1/3"
            >
              <p className="mb-2 text-4xl font-bold lg:text-5xl">
                <NumberTicker value={stat.value} />
              </p>
              <p className="text-sm text-gray-400 lg:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
