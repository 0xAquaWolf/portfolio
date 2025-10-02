import SectionHeading from "@/components/SectionHeading";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  DesktopIcon,
  CameraIcon,
  VideoIcon,
  KeyboardIcon,
  HomeIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

const gearItems = [
  {
    Icon: DesktopIcon,
    name: "MacBook Pro 16\" M1 Max",
    description: "M1 Max chip with 64GB RAM - my powerhouse development machine for coding, design, and video editing.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/macbook-pro-16-m1-max.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: CameraIcon,
    name: "Insta360 Link 2",
    description: "4K AI-powered webcam with tracking and gesture control - perfect for video calls and content creation.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/insta360-link-2.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-400/20 to-pink-600/20" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: KeyboardIcon,
    name: "Dygma Raise",
    description: "Split ergonomic mechanical keyboard with wireless connectivity for comfortable typing during long coding sessions.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/split-ergonomic-keyboard.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-green-400/20 to-teal-600/20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: HomeIcon,
    name: "Standing Desk",
    description: "Height-adjustable standing desk for better posture and health during long work sessions.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/standing-desk.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-400/20 to-orange-600/20" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: GlobeIcon,
    name: "1 Gigabit Fiber Optic",
    description: "Ultra-fast 1Gbps fiber internet connection for seamless development, streaming, and uploads.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/fiber-internet.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: VideoIcon,
    name: "Productivity Setup",
    description: "Complete workstation setup optimized for development productivity and content creation workflows.",
    href: "/gear",
    cta: "View details",
    image: "/images/gear/productivity-setup.jpg",
    background: <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400/20 to-indigo-600/20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function GearSection() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
      <SectionHeading
        heading="My Gear"
        subheading="The tools and equipment I use daily for development, content creation, and productivity"
      />
      <BentoGrid className="lg:grid-rows-3">
        {gearItems.map((item) => (
          <BentoCard key={item.name} {...item} />
        ))}
      </BentoGrid>
    </section>
  );
}
