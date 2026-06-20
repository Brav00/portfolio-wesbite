import projects from '@/data/projects';
import { AllProjectsSection } from '@/components/AllProjectsSection';

export const metadata = {
  title: 'Case studies — Ahmer Mehmood',
  description: `${projects.length} projects across SEO, GTM, and outbound — detailed case studies with measurable results.`,
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-3">Case studies</h1>
        <p className="text-secondary">
          {projects.length} projects across SEO, GTM, and outbound
        </p>
      </div>
      <AllProjectsSection projects={projects} />
    </div>
  );
}
