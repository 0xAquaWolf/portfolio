import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import SectionHeading from "@/components/SectionHeading";

const defaultData = [
  {
    answer: "I'm a full-stack software engineer with 8+ years of experience specializing in WordPress, Laravel, PHP, React, Next.js, and AI integration. I also have expertise in UI/UX design and modern development workflows.",
    icon: "💻",
    iconPosition: "left" as const,
    id: 1,
    question: "What's your technical background and expertise?",
  },
  {
    answer: "Yes! I offer consultations for WordPress development, Laravel projects, AI integration, and modern web development. I also provide guidance on developer workflows and tooling like Neovim. Contact me to discuss your project needs.",
    icon: "💡",
    iconPosition: "right" as const,
    id: 2,
    question: "Do you offer consulting services?",
  },
  {
    answer: "I work with TypeScript, Next.js 14, React, PHP, Laravel, WordPress, Tailwind CSS, and various databases including MySQL and SQLite. I'm also experienced with AI APIs, YouTube/GitHub integrations, and modern tooling like Bun and Drizzle ORM.",
    id: 3,
    question: "What technologies do you currently work with?",
  },
  {
    answer: "I've built scalable web applications, WordPress plugins, Laravel projects, and modern React/Next.js applications. I also create content on YouTube teaching development concepts and live stream coding sessions weekly.",
    icon: "🚀",
    iconPosition: "left" as const,
    id: 4,
    question: "What types of projects have you worked on?",
  },
  {
    answer: "I'm always interested in discussing new opportunities! Whether you need a full-stack developer, WordPress specialist, or someone with AI integration experience, feel free to reach out. I'm particularly excited about projects involving modern web technologies.",
    icon: "🤝",
    iconPosition: "right" as const,
    id: 5,
    question: "Are you available for new projects or full-time roles?",
  },
  {
    answer: "Yes, I have experience with both startup environments and established companies. I understand the fast-paced nature of startups, rapid prototyping, and the need for scalable solutions that can grow with the business.",
    id: 6,
    question: "Do you have startup experience?",
  },
  {
    answer: "I create educational content on YouTube covering WordPress, AI, Next.js, React, PHP, and developer workflows. I also live stream weekly coding sessions where I work on real projects and share development insights.",
    icon: "📺",
    iconPosition: "left" as const,
    id: 7,
    question: "I see you create content - what do you teach?",
  },
  {
    answer: "I focus on writing clean, maintainable code with proper TypeScript implementation, comprehensive testing, and modern development practices. I prioritize performance, accessibility, and user experience in all my projects.",
    id: 8,
    question: "What's your approach to code quality and best practices?",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <SectionHeading
        heading="FAQs"
        subheading="Common questions about my experience, services, and approach to development"
      />
      <FaqAccordion
        data={defaultData}
        className="max-w-[700px]"
        questionClassName="bg-gray-800/50 hover:bg-gray-700/60 border border-gray-700/30"
        answerClassName="bg-gray-700/70 text-gray-100 border border-gray-600/40"
      />
    </div>
  );
}

// function CustomStyleDemo() {
//   return (
//     <FaqAccordion
//       data={defaultData}
//       className="max-w-[700px]"
//       questionClassName="bg-secondary hover:bg-secondary/80"
//       answerClassName="bg-secondary text-secondary-foreground"
//       timestamp="Updated daily at 12:00 PM"
//     />
//   );
// }
//
