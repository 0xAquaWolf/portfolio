import React from "react";
import SectionHeading from "../SectionHeading";
import { MrrCard } from "../mrr-card";

const startupData = [
  {
    name: "AIGenius",
    description: "Revolutionizing AI for startups",
    mrr: 57600,
    iconName: "Zap",
    status: "success",
    data: [
      { month: "Aug", mrr: 10000 },
      { month: "Sep", mrr: 15000 },
      { month: "Oct", mrr: 20000 },
      { month: "Nov", mrr: 25000 },
      { month: "Dec", mrr: 35000 },
      { month: "Jan", mrr: 40000 },
      { month: "Feb", mrr: 80000 },
      { month: "Mar", mrr: 120000 },
      { month: "Apr", mrr: 140000 },
      { month: "May", mrr: 100000 },
      { month: "Jun", mrr: 80000 },
      { month: "Jul", mrr: 57600 },
    ],
  },
  {
    name: "CloudScale",
    description: "Elastic cloud infrastructure solutions",
    mrr: 89000,
    iconName: "Cloud",
    status: "success",
    data: [
      { month: "Aug", mrr: 20000 },
      { month: "Sep", mrr: 25000 },
      { month: "Oct", mrr: 30000 },
      { month: "Nov", mrr: 40000 },
      { month: "Dec", mrr: 50000 },
      { month: "Jan", mrr: 60000 },
      { month: "Feb", mrr: 70000 },
      { month: "Mar", mrr: 75000 },
      { month: "Apr", mrr: 80000 },
      { month: "May", mrr: 85000 },
      { month: "Jun", mrr: 87000 },
      { month: "Jul", mrr: 89000 },
    ],
  },
  {
    name: "CryptoSafe",
    description: "Secure cryptocurrency wallet and exchange",
    mrr: 120000,
    iconName: "Lock",
    status: "success",
    data: [
      { month: "Aug", mrr: 30000 },
      { month: "Sep", mrr: 40000 },
      { month: "Oct", mrr: 50000 },
      { month: "Nov", mrr: 60000 },
      { month: "Dec", mrr: 70000 },
      { month: "Jan", mrr: 80000 },
      { month: "Feb", mrr: 90000 },
      { month: "Mar", mrr: 100000 },
      { month: "Apr", mrr: 110000 },
      { month: "May", mrr: 115000 },
      { month: "Jun", mrr: 118000 },
      { month: "Jul", mrr: 120000 },
    ],
  },
  {
    name: "EcoTrack",
    description: "IoT-based environmental monitoring",
    mrr: 75000,
    iconName: "Leaf",
    status: "success",
    data: [
      { month: "Aug", mrr: 15000 },
      { month: "Sep", mrr: 20000 },
      { month: "Oct", mrr: 25000 },
      { month: "Nov", mrr: 30000 },
      { month: "Dec", mrr: 35000 },
      { month: "Jan", mrr: 45000 },
      { month: "Feb", mrr: 55000 },
      { month: "Mar", mrr: 60000 },
      { month: "Apr", mrr: 65000 },
      { month: "May", mrr: 70000 },
      { month: "Jun", mrr: 73000 },
      { month: "Jul", mrr: 75000 },
    ],
  },
  {
    name: "HealthHub",
    description: "AI-powered telemedicine platform",
    mrr: 95000,
    iconName: "Heart",
    status: "success",
    data: [
      { month: "Aug", mrr: 25000 },
      { month: "Sep", mrr: 30000 },
      { month: "Oct", mrr: 40000 },
      { month: "Nov", mrr: 50000 },
      { month: "Dec", mrr: 60000 },
      { month: "Jan", mrr: 70000 },
      { month: "Feb", mrr: 75000 },
      { month: "Mar", mrr: 80000 },
      { month: "Apr", mrr: 85000 },
      { month: "May", mrr: 90000 },
      { month: "Jun", mrr: 93000 },
      { month: "Jul", mrr: 95000 },
    ],
  },
  {
    name: "EduTech",
    description: "Personalized online learning experiences",
    mrr: 40000,
    iconName: "GraduationCap",
    status: "failed",
    data: [
      { month: "Aug", mrr: 0 },
      { month: "Sep", mrr: 1000 },
      { month: "Oct", mrr: 2000 },
      { month: "Nov", mrr: 3000 },
      { month: "Dec", mrr: 2500 },
      { month: "Jan", mrr: 2000 },
      { month: "Feb", mrr: 1500 },
      { month: "Mar", mrr: 1000 },
      { month: "Apr", mrr: 500 },
      { month: "May", mrr: 250 },
      { month: "Jun", mrr: 100 },
      { month: "Jul", mrr: 0 },
    ],
  },
  {
    name: "SmartHome",
    description: "Integrated smart home automation",
    mrr: 82000,
    iconName: "Home",
    status: "success",
    data: [
      { month: "Aug", mrr: 20000 },
      { month: "Sep", mrr: 25000 },
      { month: "Oct", mrr: 30000 },
      { month: "Nov", mrr: 40000 },
      { month: "Dec", mrr: 50000 },
      { month: "Jan", mrr: 60000 },
      { month: "Feb", mrr: 65000 },
      { month: "Mar", mrr: 70000 },
      { month: "Apr", mrr: 75000 },
      { month: "May", mrr: 78000 },
      { month: "Jun", mrr: 80000 },
      { month: "Jul", mrr: 82000 },
    ],
  },
  {
    name: "FintechFlow",
    description: "Streamlined financial management for SMEs",
    mrr: 70000,
    iconName: "DollarSign",
    status: "failed",
    data: [
      { month: "Aug", mrr: 0 },
      { month: "Sep", mrr: 10000 },
      { month: "Oct", mrr: 25000 },
      { month: "Nov", mrr: 50000 },
      { month: "Dec", mrr: 80000 },
      { month: "Jan", mrr: 100000 },
      { month: "Feb", mrr: 90000 },
      { month: "Mar", mrr: 70000 },
      { month: "Apr", mrr: 50000 },
      { month: "May", mrr: 30000 },
      { month: "Jun", mrr: 10000 },
      { month: "Jul", mrr: 0 },
    ],
  },
];

export default function Startup() {
  const successfulStartups = startupData.filter(
    (startup) => startup.status === "success",
  );
  const failedStartups = startupData.filter(
    (startup) => startup.status === "failed",
  );
  return (
    <div id="projects" className="mt-20 px-6 lg:mt-40 lg:px-3">
      <SectionHeading
        heading="Projects & Startups (demo)"
        subheading="Live Streaming weekly: AI Startups until 💰, Fail Fast, Fail often, Fail Forward"
      />
      <div className="3xl:max-w-[1440px] mx-auto grid max-w-[83rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[1100px]">
        {successfulStartups.map((startup, index) => (
          <div
            key={startup.name}
            className={
              index === 1 || index === 2 || index === 5
                ? "sm:col-span-2"
                : "sm:col-span-1"
            }
          >
            <MrrCard
              name={startup.name}
              description={startup.description}
              mrr={startup.mrr}
              data={startup.data}
              iconName={startup.iconName}
              status={startup.status as "success" | "failed"}
            />
          </div>
        ))}
      </div>

      {failedStartups.length > 0 && (
        <>
          <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-red-500">
            Failed Startups
          </h2>
          <div className="3xl:max-w-[1440px] mx-auto grid max-w-[83rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[1100px]">
            {failedStartups.map((startup, index) => (
              <div
                key={startup.name}
                className={
                  index % 6 === 0 || index % 6 === 3
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }
              >
                <MrrCard
                  name={startup.name}
                  description={startup.description}
                  mrr={startup.mrr}
                  data={startup.data}
                  iconName={startup.iconName}
                  status={startup.status as "success" | "failed"}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
