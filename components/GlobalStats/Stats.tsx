// Types for our stats
interface Stat {
  value: number;
  label: string;
}

// Function to format large numbers
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Server Component
export const Stats = async () => {
  // In a real application, you would fetch this data from an API or database
  const statsData: Stat[] = [
    { value: 24878, label: "Youtube Views" },
    { value: 558, label: "Youtube Subcribers" },
    { value: 69, label: "Github Stars" },
  ];

  return (
    <section className="text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-base lg:text-2xl font-semibold text-center mb-8">
          Global Stats
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="text-center px-6 w-full md:w-1/3 mb-8 md:mb-0"
            >
              <p className="text-4xl lg:text-5xl font-bold mb-2">
                {formatNumber(stat.value)}
              </p>
              <p className="text-sm lg:text-lg text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
