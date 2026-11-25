import Link from 'next/link';
import type { GtmSystem } from '@/lib/types';
import { formatCategoryLabel } from '@/lib/utils';
import { GTM } from '@/lib/colors';

function ArrowIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
    </svg>
  );
}

/** System card on /playbooks. Same card language as CaseStudyCard, leading with status, stack and stats. */
export function SystemCard({ system }: { system: GtmSystem }) {
  return (
    <Link
      href={`/playbooks/${system.slug}`}
      className="group relative bg-card border border-black/[0.08] rounded-2xl p-6 md:p-8 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#a85a14]/30 hover:-translate-y-1"
    >
      <span
        className="absolute left-0 inset-y-0 w-[3px] rounded-l-2xl origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
        style={{ backgroundColor: GTM.copper }}
      />

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full"
          style={{ backgroundColor: '#e7f2e4', color: '#2f6b2a' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3f8f38]" />
          {system.status}
        </span>
        {system.categories.map((cat) => (
          <span
            key={cat}
            className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
            style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}
          >
            {formatCategoryLabel(cat)}
          </span>
        ))}
      </div>

      <p className="font-gtm-mono text-[12px] mb-1.5" style={{ color: GTM.copper }}>
        {system.shortName}
      </p>
      <h3 className="font-gtm-heading tracking-[-0.02em] text-xl md:text-2xl font-semibold text-primary leading-snug mb-3">
        {system.title}
      </h3>
      <p className="text-[15px] text-muted leading-relaxed mb-6 max-w-3xl">{system.tagline}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {system.stats.map((stat) => (
          <div key={stat.label} className="rounded-xl p-3" style={{ backgroundColor: GTM.sand }}>
            <p className="font-gtm-heading text-xl font-semibold" style={{ color: GTM.copperInk }}>
              {stat.value}
            </p>
            <p className="text-xs text-secondary leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {system.stack.map((tool) => (
          <span key={tool} className="px-2.5 py-1 text-[11.5px] rounded-md border border-black/[0.08] text-muted bg-white">
            {tool}
          </span>
        ))}
      </div>

      <span className="relative self-start inline-flex items-center gap-1.5 py-1.5 font-medium text-sm text-primary">
        Explore the system
        <ArrowIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-current origin-left group-hover:scale-x-50 transition-transform duration-300" />
      </span>
    </Link>
  );
}
