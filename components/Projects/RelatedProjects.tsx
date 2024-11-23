import { Project } from './Projects';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import Image from 'next/image';

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
}

export default function RelatedProjects({
  currentProject,
  allProjects,
}: RelatedProjectsProps) {
  // Get 3 related projects based on matching tags
  // console.log('Current project tags:', currentProject.tags);
  const relatedProjects = allProjects
    .filter((project) => {
      // Don't include the current project
      if (project.title === currentProject.title) {
        console.log('Skipping current project:', project.title);
        return false;
      }

      // Count matching tags
      const matchingTags = project.tags.filter((tag) =>
        currentProject.tags.includes(tag),
      );
      // console.log(
      //   `Project ${project.title} has ${matchingTags.length} matching tags:`,
      //   matchingTags,
      // );
      return matchingTags.length > 0;
    })
    // Sort by number of matching tags
    .sort((a, b) => {
      const aMatches = a.tags.filter((tag) =>
        currentProject.tags.includes(tag),
      ).length;
      const bMatches = b.tags.filter((tag) =>
        currentProject.tags.includes(tag),
      ).length;
      return bMatches - aMatches;
    })
    .slice(0, 3);

  // console.log('Found related projects:', relatedProjects.map(p => p.title));

  if (relatedProjects.length === 0) {
    console.log('No related projects found, returning null');
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-100">
        Related Projects
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {relatedProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
