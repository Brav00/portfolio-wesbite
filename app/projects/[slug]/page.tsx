import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import projects from '@/data/projects';
import { formatCategoryLabel, isGtmProject } from '@/lib/utils';
import { StatCard } from '@/components/StatCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { Lightbox } from '@/components/Lightbox';
import { SectionLabel, TextLink } from '@/components/gtm/ui';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ahmer Mehmood`,
    description: project.oneLineResult,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  // 'Next case study' stays within the same group: GTM pages link to GTM pages,
  // SEO and Google Ads pages (the /digital-marketing funnel) link to each other.
  const isGtm = isGtmProject(project);
  const group = projects.filter((p) => isGtmProject(p) === isGtm);
  const nextProject = group[(group.findIndex((p) => p.slug === project.slug) + 1) % group.length];

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link: SEO and Google Ads case studies return to the /digital-marketing case studies section */}
      <Link
        href={isGtm ? '/projects' : '/digital-marketing#case-studies'}
        className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to case studies
      </Link>

      {/* Category tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 text-xs font-medium rounded-full bg-accent-tag text-accent"
          >
            {formatCategoryLabel(cat)}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="font-gtm-heading text-[2rem] md:text-[2.6rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1c1b19] mb-4">
        {project.title}
      </h1>

      {/* Subheading */}
      <p className="font-gtm-mono text-[12px] uppercase tracking-[0.08em] text-secondary mb-10">
        {project.client} · {project.industry}{project.engagementType ? ` · ${project.engagementType}` : ''}
      </p>

      {/* Video */}
      {project.videoUrl !== undefined && (
        <div className="mb-10">
          <YouTubeEmbed url={project.videoUrl} title={project.title} />
        </div>
      )}

      {/* Stats */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Workflow diagram */}
      {project.workflow && project.workflow.length > 0 && (
        <>
          {project.workflowIntro && (
            <p className="text-secondary text-sm mb-4">{project.workflowIntro}</p>
          )}
          <WorkflowDiagram steps={project.workflow} />
        </>
      )}

      {/* Problem */}
      <section className="mb-12">
        <SectionLabel index={1}>Problem</SectionLabel>
        <h2 className="font-gtm-heading text-[1.45rem] font-semibold tracking-[-0.02em] text-[#1c1b19] mb-3">The problem</h2>
        <p className="text-muted leading-relaxed">{project.problem}</p>
      </section>

      {/* What I did */}
      <section className="mb-12">
        <SectionLabel index={2}>Approach</SectionLabel>
        <h2 className="font-gtm-heading text-[1.45rem] font-semibold tracking-[-0.02em] text-[#1c1b19] mb-3">What I did</h2>
        <p className="text-muted leading-relaxed">{project.solution}</p>
      </section>

      {/* Result */}
      <section className="mb-12">
        <SectionLabel index={3}>Outcome</SectionLabel>
        <h2 className="font-gtm-heading text-[1.45rem] font-semibold tracking-[-0.02em] text-[#1c1b19] mb-3">The result</h2>
        <p className="text-muted leading-relaxed">{project.result}</p>
      </section>

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <section className="mb-12">
          <SectionLabel index={4}>Stack</SectionLabel>
          <h2 className="font-gtm-heading text-[1.45rem] font-semibold tracking-[-0.02em] text-[#1c1b19] mb-3">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent-tag text-accent"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Screenshot lightbox */}
      {project.screenshots.length > 0 && (
        <div className="mb-12">
          <Lightbox images={project.screenshots} title={project.title} />
        </div>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <div className="mb-16">
          <TestimonialCard
            quote={project.testimonial.quote}
            attribution={project.testimonial.attribution}
          />
        </div>
      )}

      {/* Next case study */}
      <div className="border-t border-black/[0.06] pt-10 flex items-center justify-between">
        <span className="font-gtm-mono text-[11.5px] uppercase tracking-[0.12em] text-secondary">Next case study</span>
        <TextLink href={`/projects/${nextProject.slug}`} className="text-sm text-right">{nextProject.title}</TextLink>
      </div>
    </article>
  );
}
