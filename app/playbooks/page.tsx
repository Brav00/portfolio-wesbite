import systems from '@/data/playbooks';
import { SectionLabel, GtmHeading } from '@/components/gtm/ui';
import { SystemCard } from '@/components/gtm/SystemCard';

const playbookCount = systems.reduce((n, s) => n + s.playbooks.length, 0);

export const metadata = {
  title: 'GTM systems & playbooks — Ahmer Mehmood',
  description: `${systems.length === 1 ? 'A production GTM system' : `${systems.length} production GTM systems`} and ${playbookCount} outbound playbooks built on them: lead ingestion, verification, deliverability gating and guardrailed campaign provisioning.`,
};

export default function PlaybooksPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 max-w-2xl">
        <SectionLabel>Systems I&apos;ve built</SectionLabel>
        <GtmHeading as="h1" lead="GTM systems &" accent="playbooks." className="mb-4" />
        <p className="text-secondary text-[15px] leading-relaxed">
          The infrastructure behind my outbound work: production pipelines that take leads from source to a
          live campaign with verification and deliverability guardrails at every step, and the playbooks I run on them.
        </p>
      </div>

      <section>
        <SectionLabel>Systems</SectionLabel>
        <div className="grid grid-cols-1 gap-6">
          {systems.map((system) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>
      </section>
    </div>
  );
}
