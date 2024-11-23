import NumberTicker from '../magicui/number-ticker';
import { unstable_noStore as noStore } from 'next/cache';

interface Stat {
  value: number;
  label: string;
}

interface StatsResponse {
  youtube: {
    views: number;
    subscribers: number;
  };
  github: {
    stars: number;
  };
  timestamp: number;
}

export const Stats = async () => {
  noStore();

  let statsData: Stat[] = [];

  try {
    // Get the base URL from the environment or use a default for local development
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/stats`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    const data: StatsResponse = await response.json();
    console.log('Fetched Stats:', data);

    statsData = [
      { value: data.youtube.views, label: 'Youtube Views' },
      { value: data.youtube.subscribers, label: 'Youtube Subscribers' },
      { value: data.github.stars, label: 'Github Stars' },
    ];
  } catch (error) {
    console.error('Error fetching stats:', error);
    statsData = [
      { value: 0, label: 'Youtube Views' },
      { value: 0, label: 'Youtube Subscribers' },
      { value: 0, label: 'Github Stars' },
    ];
  }

  return (
    <section className="mx-auto mb-20 max-w-[1440px] px-4 py-12 text-white lg:mb-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-base font-semibold lg:text-2xl">
          Global Stats
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {statsData.map((stat, index) => (
            <div
              key={`${index}-${Date.now()}`}
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
