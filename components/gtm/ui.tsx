import Link from 'next/link';
import { GTM } from '@/lib/colors';

/* Homepage (GTM site) UI primitives: arrow-pill buttons, underlined text links,
   mono section labels and two-tone headings. Charcoal + copper palette. */

function Arrow({ down = false, className = 'w-4 h-4' }: { down?: boolean; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
      {down ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
      )}
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  size?: 'sm' | 'md';
  className?: string;
};

/** Primary CTA: copper pill with a white arrow disc on the right and a soft copper glow. */
export function ArrowButton({ href, children, size = 'md', className = '' }: ButtonProps) {
  const sm = size === 'sm';
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full font-gtm-body font-medium text-white transition-all duration-200 hover:-translate-y-0.5 ${
        sm ? 'h-10 pl-4 pr-1 text-[13.5px]' : 'h-[50px] pl-6 pr-1.5 text-[14.5px]'
      } ${className}`}
      style={{ backgroundColor: GTM.copper, boxShadow: '0 12px 27px -12px rgba(168,90,20,0.8)' }}
    >
      {children}
      <span
        className={`flex items-center justify-center rounded-full bg-white transition-transform duration-200 group-hover:translate-x-0.5 ${
          sm ? 'w-8 h-8' : 'w-[38px] h-[38px]'
        }`}
        style={{ color: GTM.copper }}
      >
        <Arrow />
      </span>
    </Link>
  );
}

/** Secondary CTA: plain text with an animated underline and an arrow. */
export function TextLink({
  href,
  children,
  down = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  down?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-1.5 py-1.5 font-gtm-body font-medium text-[15px] text-primary ${className}`}
    >
      {children}
      <Arrow down={down} className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      <span className="absolute left-0 bottom-0 h-[1.5px] w-full bg-current origin-left scale-x-100 group-hover:scale-x-50 transition-transform duration-300" />
    </Link>
  );
}

/** Soft tinted pill (secondary nav action) with a leading icon. */
export function SoftPill({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-3.5 py-1.5 font-gtm-body text-[13.5px] font-medium transition-colors hover:brightness-95"
      style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}
    >
      {icon}
      {children}
    </Link>
  );
}

/** Mono section label: "— 02 / RESULTS". */
export function SectionLabel({ index, children, dark = false }: { index?: number; children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 mb-4 font-gtm-mono text-[11.5px] font-medium uppercase tracking-[0.12em]"
      style={{ color: dark ? GTM.copperLight : GTM.copper }}
    >
      <span className="inline-block w-5 h-[1.5px]" style={{ backgroundColor: 'currentColor' }} />
      {index !== undefined && <>{String(index).padStart(2, '0')} / </>}
      {children}
    </p>
  );
}

/** Two-tone heading: `lead` in ink, `accent` in copper. */
export function GtmHeading({
  lead,
  accent,
  as: Tag = 'h2',
  dark = false,
  className = '',
}: {
  lead?: string;
  accent: string;
  as?: 'h1' | 'h2';
  dark?: boolean;
  className?: string;
}) {
  const size =
    Tag === 'h1'
      ? 'text-[2.5rem] md:text-[3.25rem] leading-[1.05] tracking-[-0.04em]'
      : 'text-[2rem] md:text-[2.75rem] leading-[1.08] tracking-[-0.03em]';
  return (
    <Tag className={`font-gtm-heading font-semibold ${size} ${dark ? 'text-white' : 'text-[#1c1b19]'} ${className}`}>
      {lead && <>{lead} </>}
      <span style={{ color: dark ? GTM.copperLight : GTM.copper }}>{accent}</span>
    </Tag>
  );
}
