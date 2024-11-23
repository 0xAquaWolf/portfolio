import { projectsData } from '@/components/Projects/Projects';
import ProjectContent from '@/components/Projects/ProjectContent';
import { Footer } from '@/components/footer';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-100">
              Project Not Found
            </h1>
            <p className="mt-4 text-gray-400">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 px-6 py-24 sm:px-8">
        <ProjectContent {...project} />
      </div>
      <Footer />
    </main>
  );
}
