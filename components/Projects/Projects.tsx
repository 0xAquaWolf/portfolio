import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'Laravel E-Commerce Platform',
    description:
      'Built a comprehensive e-commerce platform using Laravel with advanced inventory management, payment processing, and real-time analytics dashboard.',
    date: 'December 2023',
    imageUrl: '/projects/laravel-ecommerce.jpg',
    tags: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Redis', 'Stripe', 'Docker'],
    slug: 'laravel-ecommerce-platform',
    links: [
      { title: 'Live Demo', url: 'https://laravel-shop.demo' },
      { title: 'GitHub', url: 'https://github.com/username/laravel-ecommerce' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Small to medium businesses struggle with expensive e-commerce solutions that lack customization options and scalability. Existing platforms often charge high transaction fees and provide limited control over the customer experience, while custom solutions are typically cost-prohibitive.\n\n' +
      'The challenge was compounded by the need for advanced features like real-time inventory tracking, multi-vendor support, and comprehensive analytics, all while maintaining performance and security standards.\n\n' +
      '## Action\n\n' +
      'Developed a comprehensive e-commerce platform using Laravel and modern PHP practices. Implemented advanced features including real-time inventory management, automated order processing, and a powerful admin dashboard with Vue.js. Built a modular architecture supporting multiple payment gateways and shipping providers.\n\n' +
      'Utilized Redis for caching and session management, MySQL for robust data storage, and Docker for consistent deployment environments. Created a comprehensive API for mobile app integration and third-party service connections.\n\n' +
      '## Results\n\n' +
      'The platform has delivered exceptional business value and technical performance:\n\n' +
      '- Processing $2M+ in monthly transactions\n' +
      '- 50% reduction in page load times through optimization\n' +
      '- 99.9% uptime with automated scaling\n' +
      '- Support for 10,000+ concurrent users\n' +
      '- 70% improvement in inventory accuracy\n' +
      '- Zero payment processing errors since launch',
  },
  {
    title: 'WordPress Headless CMS with Next.js',
    description:
      'Created a modern headless WordPress setup with Next.js frontend, featuring custom Gutenberg blocks, GraphQL API, and advanced page building capabilities.',
    date: 'November 2023',
    imageUrl: '/projects/wordpress-nextjs.jpg',
    tags: ['WordPress', 'Next.js', 'TypeScript', 'GraphQL', 'PHP', 'React'],
    slug: 'wordpress-headless-nextjs',
    links: [
      { title: 'Live Site', url: 'https://headless-wp.demo' },
      { title: 'GitHub', url: 'https://github.com/username/wordpress-nextjs' },
      { title: 'Documentation', url: 'https://docs.headless-wp.demo' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Traditional WordPress sites struggle with performance and modern user experiences, while maintaining the familiar content management workflow that editors love. The challenge was creating a solution that combines WordPress\' excellent content management with modern frontend performance.\n\n' +
      'Additionally, clients needed advanced custom blocks and flexible page building capabilities without sacrificing site speed or SEO performance.\n\n' +
      '## Action\n\n' +
      'Built a headless WordPress architecture with Next.js frontend using GraphQL for efficient data fetching. Created custom Gutenberg blocks with TypeScript, implemented static generation with ISR for optimal performance, and developed a seamless preview system for content editors.\n\n' +
      'Integrated advanced features including custom field management, automated image optimization, and a comprehensive design system. The solution maintains full WordPress admin functionality while delivering blazing-fast frontend performance.\n\n' +
      '## Results\n\n' +
      'The headless setup has delivered exceptional performance and user satisfaction:\n\n' +
      '- 90+ Google PageSpeed scores across all pages\n' +
      '- 70% improvement in loading times\n' +
      '- 50% reduction in server costs through static generation\n' +
      '- 100% client satisfaction with editing experience\n' +
      '- Zero downtime deployments\n' +
      '- Seamless content preview system',
  },
  {
    title: 'React TypeScript Dashboard',
    description:
      'Developed a comprehensive admin dashboard with React and TypeScript, featuring real-time analytics, data visualization, and advanced user management.',
    date: 'October 2023',
    imageUrl: '/projects/react-dashboard.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js', 'Socket.io'],
    slug: 'react-typescript-dashboard',
    links: [
      { title: 'Live Demo', url: 'https://dashboard.demo' },
      { title: 'GitHub', url: 'https://github.com/username/react-dashboard' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Businesses often struggle with fragmented analytics tools and inefficient admin interfaces that lack real-time capabilities. Existing dashboard solutions are either too generic or overly complex, failing to provide actionable insights in an intuitive interface.\n\n' +
      'The challenge was creating a unified dashboard that could handle complex data visualization while maintaining excellent performance and user experience across different user roles and permissions.\n\n' +
      '## Action\n\n' +
      'Built a comprehensive dashboard using React and TypeScript with a focus on type safety and performance. Implemented real-time data updates using Socket.io, created interactive charts with Chart.js, and developed a flexible role-based permission system.\n\n' +
      'Designed a modular component architecture with reusable widgets, integrated with PostgreSQL for robust data management, and implemented advanced filtering and search capabilities. The dashboard features responsive design and dark/light theme support.\n\n' +
      '## Results\n\n' +
      'The dashboard has significantly improved business operations and decision-making:\n\n' +
      '- 80% reduction in report generation time\n' +
      '- Real-time updates with sub-second latency\n' +
      '- Support for 50+ concurrent admin users\n' +
      '- 95% user satisfaction rating\n' +
      '- Zero type-related runtime errors\n' +
      '- 60% improvement in data analysis efficiency',
  },
  {
    title: 'Custom PHP API & Mobile App',
    description:
      'Built a RESTful API with PHP and Laravel backend, paired with a React Native mobile app for seamless cross-platform user experience.',
    date: 'September 2023',
    imageUrl: '/projects/php-api-mobile.jpg',
    tags: ['PHP', 'Laravel', 'React Native', 'MySQL', 'JWT', 'REST API'],
    slug: 'custom-php-api-mobile',
    links: [
      { title: 'Mobile App', url: 'https://app-store.link' },
      {
        title: 'GitHub',
        url: 'https://github.com/username/php-api-mobile',
      },
      { title: 'API Docs', url: 'https://api-docs.demo' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'A growing business needed a unified system to manage customer data across web and mobile platforms, but existing solutions were fragmented and costly. They required a custom API that could handle complex business logic while providing a seamless mobile experience.\n\n' +
      'The challenge was creating a robust, scalable backend that could support real-time features while maintaining data consistency across multiple client applications.\n\n' +
      '## Action\n\n' +
      'Developed a comprehensive RESTful API using Laravel with JWT authentication, rate limiting, and comprehensive error handling. Created a React Native mobile app with offline capabilities, real-time notifications, and intuitive user interface design.\n\n' +
      'Implemented advanced features including file uploads, push notifications, caching strategies, and automated testing. The API includes comprehensive documentation and follows industry best practices for security and performance.\n\n' +
      '## Results\n\n' +
      'The integrated solution has delivered exceptional value and performance:\n\n' +
      '- 100,000+ API calls processed daily\n' +
      '- 99.9% API uptime with monitoring\n' +
      '- 85% user retention rate on mobile app\n' +
      '- 40% improvement in operational efficiency\n' +
      '- Zero security breaches since launch\n' +
      '- Support for iOS, Android, and web platforms',
  },
  {
    title: 'WordPress Multi-Site Network',
    description:
      'Architected and deployed a WordPress multi-site network serving 50+ websites with centralized management, custom themes, and automated workflows.',
    date: 'August 2023',
    imageUrl: '/projects/wordpress-multisite.jpg',
    tags: ['WordPress', 'PHP', 'MySQL', 'Linux', 'Docker', 'CI/CD'],
    slug: 'wordpress-multisite-network',
    links: [
      { title: 'Network Portal', url: 'https://multisite.demo' },
      { title: 'GitHub', url: 'https://github.com/username/wp-multisite' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'A large organization needed to manage dozens of WordPress sites efficiently while maintaining consistent branding, security updates, and content standards. Manual management of individual sites was becoming unsustainable and error-prone.\n\n' +
      'The challenge was creating a centralized system that could handle different site requirements while maintaining performance and allowing for customization where needed.\n\n' +
      '## Action\n\n' +
      'Architected a comprehensive WordPress multi-site network with centralized theme and plugin management. Developed custom admin tools for bulk operations, automated backup systems, and implemented a staging environment for safe testing.\n\n' +
      'Created a deployment pipeline using Docker and CI/CD practices, implemented automated security scanning, and built custom dashboards for network monitoring. The system includes automated updates and rollback capabilities.\n\n' +
      '## Results\n\n' +
      'The multi-site network has revolutionized website management:\n\n' +
      '- Managing 50+ WordPress sites from single dashboard\n' +
      '- 90% reduction in site maintenance time\n' +
      '- Zero security incidents across all sites\n' +
      '- Automated backups for all 50+ sites daily\n' +
      '- 99.9% uptime across the entire network\n' +
      '- Consistent branding and performance standards',
  },
  {
    title: 'Next.js SaaS Application',
    description:
      'Developed a full-featured SaaS platform using Next.js and TypeScript with subscription billing, user management, and comprehensive analytics.',
    date: 'July 2023',
    imageUrl: '/projects/nextjs-saas.jpg',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind'],
    slug: 'nextjs-saas-application',
    links: [
      { title: 'Live App', url: 'https://saas-app.demo' },
      { title: 'GitHub', url: 'https://github.com/username/nextjs-saas' },
      { title: 'Case Study', url: 'https://case-study.demo' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Small businesses needed an affordable, feature-rich project management solution but existing options were either too expensive or lacked essential features. The challenge was creating a comprehensive SaaS platform that could compete with enterprise solutions while remaining accessible.\n\n' +
      'The solution required seamless subscription management, real-time collaboration features, and robust analytics, all while maintaining excellent performance and user experience.\n\n' +
      '## Action\n\n' +
      'Built a comprehensive SaaS platform using Next.js with TypeScript for type safety and performance. Implemented Stripe for subscription billing, Prisma for database management, and created a responsive design with Tailwind CSS.\n\n' +
      'Developed advanced features including team collaboration tools, project templates, automated workflows, and comprehensive reporting. The platform includes SSO integration, API access, and white-label capabilities.\n\n' +
      '## Results\n\n' +
      'The SaaS platform has achieved remarkable business success:\n\n' +
      '- 5,000+ active subscribers\n' +
      '- $500K+ annual recurring revenue\n' +
      '- 95% customer satisfaction score\n' +
      '- 20% month-over-month growth\n' +
      '- 99.9% platform uptime\n' +
      '- Integration with 25+ third-party services',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="A collection of my most impactful work in PHP, WordPress, Laravel, and modern web development"
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
            tags={project.tags}
            slug={project.slug}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
