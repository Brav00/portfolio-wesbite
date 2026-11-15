import projects from '@/data/projects';
import { AllProjectsSection } from '@/components/AllProjectsSection';
import { SectionLabel, GtmHeading } from '@/components/gtm/ui';
import { isGtmProject } from '@/lib/utils';

// SEO and Google Ads case studies are hidden from this listing, but their pages still exist
// because /digital-marketing links to them.
const gtmProjects = projects.filter(isGtmProject);

export const metadata = {
  title: 'Case studies — Ahmer Mehmood',
  description: `${gtmProjects.length} GTM case studies across cold email, LinkedIn outbound and positioning, with measurable results.`,
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <SectionLabel>All work</SectionLabel>
        <GtmHeading as="h1" lead="Case" accent="studies." className="mb-4" />
        <p className="text-secondary text-[15px]">
          {gtmProjects.length} GTM projects across cold email, LinkedIn outbound and positioning
        </p>
      </div>
      <AllProjectsSection projects={gtmProjects} />
    </div>
  );
}
