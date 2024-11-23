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
    title: 'AI-Powered Trading Bot',
    description:
      'Developed a sophisticated trading bot using machine learning algorithms to analyze market patterns and execute automated trades with risk management strategies.',
    date: 'December 2023',
    imageUrl: '/projects/trading-bot.jpg',
    tags: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Machine Learning', 'Trading', 'Crypto'],
    slug: 'ai-powered-trading-bot',
    links: [
      { title: 'Live Demo', url: 'https://trading-bot.demo' },
      { title: 'GitHub', url: 'https://github.com/username/trading-bot' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Traditional trading strategies often struggle to adapt to the rapidly evolving cryptocurrency markets, resulting in missed opportunities and potential losses. Manual trading approaches are limited by human reaction times and emotional biases, while existing automated solutions lack the sophistication to handle market complexity.\n\n' +
      'The challenge was further compounded by the need to process vast amounts of market data in real-time, manage risk effectively across multiple trading pairs, and maintain consistent performance during high-volatility periods.\n\n' +
      '## Action\n\n' +
      'Developed a sophisticated trading bot utilizing Python and TensorFlow to implement deep learning models. The system architecture was designed to process market data through multiple specialized neural networks, each focused on different aspects of market analysis - from price action and volume patterns to sentiment analysis of social media feeds.\n\n' +
      'Implemented advanced risk management algorithms that dynamically adjust position sizes and leverage based on market conditions and portfolio performance. Deployed the system on AWS using Docker containers for consistent performance, with automated failover and scaling capabilities to handle varying market conditions.\n\n' +
      '## Results\n\n' +
      'The trading bot has demonstrated exceptional performance across multiple metrics:\n\n' +
      '- 40% improvement in trade execution speed compared to previous systems\n' +
      '- 60% reduction in false trading signals through advanced filtering algorithms\n' +
      '- Maintained consistent profit margins even during high market volatility\n' +
      '- Successfully processes over 1 million market data points daily\n' +
      '- Sub-second response times for market condition changes\n' +
      '- 99.99% system uptime through robust infrastructure design',
  },
  {
    title: 'DeFi Yield Aggregator',
    description:
      'Built a decentralized finance platform that automatically finds and compounds the best yields across multiple protocols, maximizing returns for users.',
    date: 'November 2023',
    imageUrl: '/projects/defi-yield.jpg',
    tags: ['Solidity', 'React', 'Web3.js', 'Smart Contracts', 'DeFi', 'Crypto'],
    slug: 'defi-yield-aggregator',
    links: [
      { title: 'DApp', url: 'https://defi-yield.app' },
      { title: 'GitHub', url: 'https://github.com/username/defi-yield' },
      { title: 'Documentation', url: 'https://docs.defi-yield.app' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'DeFi users face significant challenges in optimizing their yield farming strategies across multiple protocols. The complexity of monitoring various platforms, understanding optimal entry and exit points, and managing gas costs creates substantial barriers to maximizing returns.\n\n' +
      'Additionally, the rapid evolution of DeFi protocols and yield opportunities means that manual management becomes increasingly time-consuming and inefficient, leading to missed opportunities and suboptimal returns.\n\n' +
      '## Action\n\n' +
      'Built a comprehensive yield aggregation platform that automatically discovers and compounds the best yields across multiple DeFi protocols. The system architecture includes real-time monitoring of yield opportunities, smart contract integrations with major protocols, and a sophisticated routing system for optimizing transaction paths.\n\n' +
      'Developed an intuitive user interface that simplifies complex DeFi interactions, implemented automated portfolio rebalancing, and created a gas-efficient routing system that batches transactions when possible. The platform includes advanced features such as impermanent loss protection and flash loan integration for larger transactions.\n\n' +
      '## Results\n\n' +
      'The platform has achieved significant milestones in improving DeFi yield farming efficiency:\n\n' +
      '- Over $10M in total value locked (TVL)\n' +
      '- Users save 5-10 hours per week in portfolio management\n' +
      '- 20-30% higher yields compared to single-protocol strategies\n' +
      '- 40% reduction in gas costs through optimized contract execution\n' +
      '- Zero security incidents since launch\n' +
      '- Integration with 15+ major DeFi protocols',
  },
  {
    title: 'NFT Marketplace',
    description:
      'Created a marketplace for digital collectibles with features like minting, trading, and auctions, supporting multiple blockchain networks.',
    date: 'October 2023',
    imageUrl: '/projects/nft-marketplace.jpg',
    tags: ['Next.js', 'TypeScript', 'IPFS', 'Smart Contracts'],
    slug: 'nft-marketplace',
    links: [
      { title: 'Marketplace', url: 'https://nft.marketplace' },
      { title: 'GitHub', url: 'https://github.com/username/nft-marketplace' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'The NFT space has been plagued by high barriers to entry for both artists and collectors. High gas fees on popular networks, complex minting processes, and limited cross-chain functionality have restricted the growth of the NFT ecosystem.\n\n' +
      'Furthermore, artists struggle with royalty enforcement and transparent pricing mechanisms, while collectors face challenges in verifying authenticity and understanding fair market values.\n\n' +
      '## Action\n\n' +
      'Created a user-friendly NFT marketplace supporting multiple blockchain networks. The platform implements innovative solutions including lazy minting to defer gas costs, an efficient auction system with automated price discovery, and a robust royalty management framework that ensures creator compensation.\n\n' +
      'Integrated IPFS for decentralized storage with redundancy mechanisms, implemented gas optimization techniques, and developed cross-chain bridging capabilities. The platform includes advanced features such as batch minting, collection management tools, and automated metadata generation.\n\n' +
      '## Results\n\n' +
      'The marketplace has achieved significant traction and technical milestones:\n\n' +
      '- Facilitated over $5M in NFT trades\n' +
      '- Reduced minting costs by 60% through optimizations\n' +
      '- Supports artists across five different blockchain networks\n' +
      '- 45% improvement in average transaction times\n' +
      '- 99.9% platform uptime\n' +
      '- Over 10,000 active users across multiple chains',
  },
  {
    title: 'Cross-Chain Bridge',
    description:
      'Implemented a secure bridge solution enabling users to transfer assets between different blockchain networks with minimal fees and maximum security.',
    date: 'September 2023',
    imageUrl: '/projects/bridge.jpg',
    tags: ['Rust', 'Solidity', 'zkProofs', 'Smart Contracts'],
    slug: 'cross-chain-bridge',
    links: [
      { title: 'Bridge App', url: 'https://bridge.app' },
      {
        title: 'GitHub',
        url: 'https://github.com/username/cross-chain-bridge',
      },
      { title: 'Technical Paper', url: 'https://bridge.app/whitepaper' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Cross-chain asset transfers have been a major pain point in the blockchain ecosystem, with users facing significant risks and high fees. Existing bridge solutions often lack robust security measures and suffer from poor efficiency, leading to lost funds and frustrated users.\n\n' +
      'The challenge was further complicated by the need to maintain security across multiple chains while providing a seamless user experience and ensuring transaction finality.\n\n' +
      '## Action\n\n' +
      'Implemented a secure bridge solution using Rust and advanced cryptography. The system architecture incorporates zero-knowledge proof systems for transaction verification, an automated liquidity management system for efficient transfers, and multi-signature security protocols with threshold signing.\n\n' +
      'Developed specialized smart contracts for each supported chain, implemented automated monitoring and alerting systems, and created a robust transaction recovery mechanism. The solution includes advanced features such as atomic swaps and cross-chain messaging.\n\n' +
      '## Results\n\n' +
      'The bridge has demonstrated exceptional performance and security metrics:\n\n' +
      '- Processed over $100M in cross-chain transfers\n' +
      '- Zero security incidents since launch\n' +
      '- 70% reduction in transfer fees\n' +
      '- Sub-minute finality times across all supported chains\n' +
      '- 100% accuracy in asset transfers\n' +
      '- Support for 5 major blockchain networks',
  },
  {
    title: 'DAO Governance Platform',
    description:
      'Designed and built a decentralized autonomous organization platform with voting mechanisms, proposal creation, and treasury management.',
    date: 'August 2023',
    imageUrl: '/projects/dao.jpg',
    tags: ['Vue.js', 'Smart Contracts', 'The Graph', 'TypeScript'],
    slug: 'dao-governance-platform',
    links: [
      { title: 'DAO Portal', url: 'https://dao.platform' },
      { title: 'GitHub', url: 'https://github.com/username/dao-platform' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Decentralized communities have struggled with effective governance coordination, often resulting in low participation rates and inefficient decision-making processes. Traditional voting mechanisms fail to account for stake weight and voter expertise, while treasury management lacks transparency and efficiency.\n\n' +
      'The challenge extended to proposal creation and execution, where manual processes and lack of standardization led to delays and potential security risks.\n\n' +
      '## Action\n\n' +
      'Designed and built a comprehensive DAO governance platform using Vue.js and smart contracts. Implemented innovative features including quadratic voting to balance stake-weighted decisions, an automated proposal execution system with security checks, and transparent treasury management tools.\n\n' +
      'Integrated with The Graph Protocol for efficient data querying, developed customizable governance frameworks, and created detailed analytics dashboards. The platform includes advanced features such as delegation mechanisms and reputation systems.\n\n' +
      '## Results\n\n' +
      'The platform has transformed DAO governance processes:\n\n' +
      '- Serves 50+ active DAOs\n' +
      '- Processed over 1000 governance proposals\n' +
      '- Manages $50M+ in treasury assets\n' +
      '- 300% increase in governance participation\n' +
      '- Reduced proposal execution time from days to hours\n' +
      '- Zero security incidents in treasury management',
  },
  {
    title: 'Crypto Portfolio Tracker',
    description:
      'Developed a comprehensive portfolio tracking application that aggregates crypto assets across multiple wallets and exchanges with real-time price updates.',
    date: 'July 2023',
    imageUrl: '/projects/portfolio-tracker.jpg',
    tags: ['React Native', 'Node.js', 'APIs', 'Mobile', 'Crypto', 'Trading', 'DeFi'],
    slug: 'crypto-portfolio-tracker',
    links: [
      { title: 'Web App', url: 'https://crypto-tracker.app' },
      { title: 'GitHub', url: 'https://github.com/username/crypto-tracker' },
      { title: 'Mobile App', url: 'https://apps.apple.com/app/crypto-tracker' },
    ],
    fullDescription:
      '## Problem\n\n' +
      'Crypto investors face significant challenges in tracking their portfolio performance across multiple wallets and exchanges. The fragmented nature of crypto investments, combined with complex DeFi interactions and tax reporting requirements, creates substantial overhead in portfolio management.\n\n' +
      'Manual tracking methods are error-prone and time-consuming, while existing solutions often lack support for DeFi protocols and comprehensive tax reporting capabilities.\n\n' +
      '## Action\n\n' +
      'Developed a comprehensive portfolio tracking solution using React Native and Node.js. The application features real-time price updates, advanced analytics tools, and automated tax reporting capabilities. Built integrations with multiple exchanges via APIs and added support for popular DeFi protocols.\n\n' +
      'Implemented sophisticated portfolio analysis tools, including performance attribution, risk metrics, and tax-loss harvesting opportunities. The system includes automated transaction categorization and support for multiple accounting methods.\n\n' +
      '## Results\n\n' +
      'The application has achieved significant adoption and user benefits:\n\n' +
      '- 100,000+ active users globally\n' +
      '- Tracks $500M+ in crypto assets\n' +
      '- Automated tax reporting for 30+ countries\n' +
      '- Users save 10+ hours monthly on portfolio management\n' +
      '- 99.9% accuracy in transaction categorization\n' +
      '- Integration with 50+ exchanges and DeFi protocols',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-56 max-w-7xl px-4 py-16">
      <SectionHeading
        heading="Featured Projects"
        subheading="A collection of my most impactful work in blockchain and web development"
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
