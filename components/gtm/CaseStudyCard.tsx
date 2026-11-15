import Link from 'next/link';
import type { Project } from '@/lib/types';
import { CountUp } from '@/components/CountUp';
import { formatCategoryLabel } from '@/lib/utils';
import { GTM } from '@/lib/colors';

/** Case study card used on the homepage row and the /projects grid. No image area: it leads with
 *  the numbers. Cards for case studies with a video get a small "Video walkthrough" pill.
 *  The whole card links to the case study. */
export function CaseStudyCard({ project, className = '' }: { project: Project; className?: string }) {
  const hasVideo = Boolean(project.videoUrl);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative bg-card border border-black/[0.08] rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#a85a14]/30 hover:-translate-y-1.5 ${className}`}
    >
      {/* Left accent bar */}
      <span
        className="absolute left-0 inset-y-0 w-[3px] rounded-l-2xl origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
        style={{ backgroundColor: GTM.copper }}
      />

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
              style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}
            >
              {formatCategoryLabel(cat)}
            </span>
          ))}
        </div>
        {hasVideo && (
          <span
            className="flex-shrink-0 inline-flex items-center gap-1 pl-1.5 pr-2.5 py-0.5 rounded-full border text-[11px] font-medium"
            style={{ borderColor: 'rgba(168,90,20,0.25)', color: GTM.copperInk }}
          >
            <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: GTM.copper }}>
              <svg className="w-2 h-2 ml-px" fill="#fff" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Video walkthrough
          </span>
        )}
      </div>

      <h3 className="font-gtm-heading tracking-[-0.01em] text-base font-semibold text-primary leading-snug mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted mb-2 flex-1">{project.oneLineResult}</p>

      {/* Hover-reveal snippet */}
      <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300 ease-out">
        <p className="text-xs text-secondary leading-relaxed pb-3 pt-1 border-t border-black/[0.06] mt-1">
          {project.solution.slice(0, 110).trim()}…
        </p>
      </div>

      <div className="flex gap-3 mb-5">
        {project.stats.slice(0, 2).map((stat) => (
          <div key={stat.label} className="flex-1 rounded-xl p-3 text-center" style={{ backgroundColor: GTM.sand }}>
            <div className="flex items-center justify-center gap-1 mb-0.5">
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke={GTM.copper} strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
              <CountUp value={stat.value} className="font-gtm-heading text-lg font-semibold" style={{ color: GTM.copperInk }} />
            </div>
            <p className="text-xs text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Looks like the TextLink; a span because the whole card is already a link */}
      <span className="relative self-start inline-flex items-center gap-1.5 py-1.5 font-medium text-sm text-primary">
        Read case study
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
        </svg>
        <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-current origin-left group-hover:scale-x-50 transition-transform duration-300" />
      </span>
    </Link>
  );
}
