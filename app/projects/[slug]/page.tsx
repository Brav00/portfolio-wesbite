import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import projects from '@/data/projects';
import { formatCategoryLabel } from '@/lib/utils';
import { StatCard } from '@/components/StatCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { Lightbox } from '@/components/Lightbox';

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
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Back link */}
      <Link
        href="/projects"
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
            className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-tag text-accent"
          >
            {formatCategoryLabel(cat)}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-primary leading-tight mb-4">
        {project.title}
      </h1>

      {/* Subheading */}
      <p className="text-secondary mb-10">
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
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-3">The problem</h2>
        <p className="text-muted leading-relaxed">{project.problem}</p>
      </section>

      {/* What I did */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-3">What I did</h2>
        <p className="text-muted leading-relaxed">{project.solution}</p>
      </section>

      {/* Result */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-primary mb-3">The result</h2>
        <p className="text-muted leading-relaxed">{project.result}</p>
      </section>

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-primary mb-3">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-tag text-accent"
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
        <span className="text-sm text-secondary">Next case study</span>
        <Link
          href={`/projects/${nextProject.slug}`}
          className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
        >
          {nextProject.title}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
