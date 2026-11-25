import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import systems from '@/data/playbooks';
import { formatCategoryLabel } from '@/lib/utils';
import { GTM } from '@/lib/colors';
import { StatCard } from '@/components/StatCard';
import { SectionLabel, TextLink } from '@/components/gtm/ui';
import { RichText } from '@/components/gtm/RichText';
import { ArchitectureDiagram, FlowDiagram } from '@/components/gtm/SystemDiagrams';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const system = systems.find((s) => s.slug === slug);
  if (!system) return {};
  return {
    title: `${system.shortName}: ${system.title} — Ahmer Mehmood`,
    description: system.tagline,
  };
}

const h2 = 'font-gtm-heading text-[1.45rem] md:text-[1.7rem] font-semibold tracking-[-0.02em] text-[#1c1b19] mb-3';

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const index = systems.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const system = systems[index];
  const nextSystem = systems.length > 1 ? systems[(index + 1) % systems.length] : null;

  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      <Link
        href="/playbooks"
        className="inline-flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to systems & playbooks
      </Link>

      {/* Hero */}
      <header className="mb-12 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full"
            style={{ backgroundColor: '#e7f2e4', color: '#2f6b2a' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3f8f38]" />
            {system.status}
          </span>
          {system.categories.map((cat) => (
            <span key={cat} className="px-3 py-1 text-xs font-medium rounded-full bg-accent-tag text-accent">
              {formatCategoryLabel(cat)}
            </span>
          ))}
        </div>
        <p className="font-gtm-mono text-[13px] mb-2" style={{ color: GTM.copper }}>
          {system.shortName}
        </p>
        <h1 className="font-gtm-heading text-[2rem] md:text-[2.6rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1c1b19] mb-5">
          {system.title}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed">{system.tagline}</p>
        {system.githubUrl && (
          <a
            href={system.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: GTM.charcoal }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            View source on GitHub
          </a>
        )}
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {system.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
        {system.highlights.map((h) => (
          <div key={h.label} className="rounded-xl border border-black/[0.07] bg-card px-4 py-3.5">
            <p className="font-gtm-mono text-[10.5px] uppercase tracking-[0.12em] mb-1" style={{ color: GTM.copper }}>
              {h.label}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              <RichText text={h.detail} />
            </p>
          </div>
        ))}
      </div>

      {/* Why */}
      <section className="mb-16 max-w-3xl">
        <SectionLabel index={1}>Context</SectionLabel>
        <h2 className={h2}>Why I built this</h2>
        {system.why.map((para, i) => (
          <p key={i} className="text-muted leading-relaxed mb-4">
            <RichText text={para} />
          </p>
        ))}
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <SectionLabel index={2}>Architecture</SectionLabel>
        <h2 className={h2}>Master system architecture</h2>
        <p className="text-secondary text-sm mb-6 max-w-3xl">
          Sources feed the Claude Code operator, which runs the four-stage pipeline. Nothing reaches Smartlead unless the guardrail gate passes.
        </p>
        <ArchitectureDiagram stages={system.architecture} />
      </section>

      {/* Orchestrator */}
      <section className="mb-20">
        <SectionLabel index={3}>Orchestration</SectionLabel>
        <h2 className={h2}>
          <RichText text={system.orchestrator.title} />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mt-6">
          <div className="flex flex-col gap-5">
            {system.orchestrator.points.map((p) => (
              <div key={p.label}>
                <p className="font-gtm-heading font-semibold text-primary mb-1">{p.label}</p>
                <p className="text-muted text-[15px] leading-relaxed">
                  <RichText text={p.detail} />
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-5 self-start" style={{ backgroundColor: GTM.charcoal }}>
            <p className="font-gtm-mono text-[10.5px] uppercase tracking-[0.12em] mb-4" style={{ color: GTM.copperLight }}>
              Deterministic exit codes
            </p>
            <div className="flex flex-col gap-4">
              {system.orchestrator.exitCodes.map((e) => (
                <div key={e.code} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-gtm-mono text-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: GTM.copperLight }}
                  >
                    {e.code}
                  </span>
                  <p className="text-sm text-white/75 leading-snug">
                    <RichText text={e.meaning} dark />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subsystems */}
      <section className="mb-20">
        <SectionLabel index={4}>Subsystems</SectionLabel>
        <h2 className={`${h2} mb-10`}>Core subsystems deep-dive</h2>
        <div className="flex flex-col gap-16">
          {system.subsystems.map((sub, i) => (
            <div key={sub.title} id={`subsystem-${i + 1}`} className="scroll-mt-24">
              <p className="font-gtm-mono text-[11.5px] uppercase tracking-[0.12em] text-secondary mb-2">
                Subsystem {i + 1}
              </p>
              <h3 className="font-gtm-heading text-[1.25rem] md:text-[1.4rem] font-semibold tracking-[-0.02em] text-primary mb-3">
                {sub.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6 max-w-3xl">
                <RichText text={sub.summary} />
              </p>
              <div className="mb-6">
                <FlowDiagram flow={sub.flow} failBranch={sub.failBranch} />
              </div>
              <dl className="rounded-2xl border border-black/[0.08] bg-card divide-y divide-black/[0.06] overflow-hidden">
                {sub.specs.map((spec) => (
                  <div key={spec.label} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-1 md:gap-6 px-5 py-4">
                    <dt className="font-gtm-heading text-sm font-semibold text-primary">{spec.label}</dt>
                    <dd className="text-sm text-muted leading-relaxed">
                      <RichText text={spec.detail} />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      {/* Playbooks */}
      <section id="playbooks" className="mb-16 scroll-mt-24">
        <SectionLabel index={5}>Playbooks</SectionLabel>
        <h2 className={h2}>GTM playbooks powered by this engine</h2>
        <div className="mt-6 rounded-2xl border border-black/[0.08] bg-card overflow-hidden">
          <div className="hidden md:grid grid-cols-[220px_1fr_260px] gap-6 px-5 py-3 font-gtm-mono text-[10.5px] uppercase tracking-[0.12em] text-secondary" style={{ backgroundColor: GTM.sand }}>
            <span>Playbook</span>
            <span>Trigger & data flow</span>
            <span>Outcome</span>
          </div>
          {system.playbooks.map((pb) => (
            <div key={pb.name} className="grid grid-cols-1 md:grid-cols-[220px_1fr_260px] gap-3 md:gap-6 px-5 py-5 border-t border-black/[0.06] first:border-t-0 md:first:border-t">
              <p className="font-gtm-heading text-sm font-semibold text-primary">{pb.name}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                {pb.flow.map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-1.5">
                    {i > 0 && (
                      <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke={GTM.copper} strokeOpacity={0.6} strokeWidth={2.4} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                      </svg>
                    )}
                    <span className="text-[13px] text-muted rounded-md px-2 py-1" style={{ backgroundColor: GTM.sand }}>
                      {step}
                    </span>
                  </span>
                ))}
              </div>
              <p className="text-sm leading-snug" style={{ color: GTM.copperInk }}>
                {pb.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mb-16">
        <SectionLabel index={6}>Stack</SectionLabel>
        <h2 className={h2}>Built with</h2>
        <div className="flex flex-wrap gap-2">
          {system.stack.map((tool) => (
            <span key={tool} className="px-3 py-1 text-xs font-medium rounded-full bg-accent-tag text-accent">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <div className="border-t border-black/[0.06] pt-10 flex items-center justify-between gap-4">
        {nextSystem ? (
          <>
            <span className="font-gtm-mono text-[11.5px] uppercase tracking-[0.12em] text-secondary">Next system</span>
            <TextLink href={`/playbooks/${nextSystem.slug}`} className="text-sm text-right">{nextSystem.title}</TextLink>
          </>
        ) : (
          <>
            <span className="font-gtm-mono text-[11.5px] uppercase tracking-[0.12em] text-secondary">See it in action</span>
            <TextLink href="/projects" className="text-sm text-right">Read the case studies</TextLink>
          </>
        )}
      </div>
    </article>
  );
}
