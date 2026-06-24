import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { FadeIn } from '@/components/FadeIn';
import { CountUp } from '@/components/CountUp';
import { BackToTop } from '@/components/BackToTop';
import { CopyButton } from '@/components/CopyButton';
import { WaveDivider } from '@/components/WaveDivider';
import { formatCategoryLabel } from '@/lib/utils';
import rawData from '@/data/projects_updated.json';

export const metadata: Metadata = {
  title: 'Digital Marketing — Ahmer Mehmood',
  description:
    '6 years across SEO, paid search, content, and AI-augmented campaigns. Based in Australia, open to digital marketing roles.',
};

const allProjects = rawData.projects;
const dmProjectSlugs: string[] = rawData.digitalMarketingProjects;
const dmProjects = dmProjectSlugs
  .map((slug) => allProjects.find((p) => p.slug === slug))
  .filter((p): p is (typeof allProjects)[number] => p !== undefined);

const whatIDo = rawData.digitalMarketingWhatIDo;
const dmStack = rawData.digitalMarketingStack as Record<string, string[]>;

const PROVIDER_MAP: Record<string, { label: string; bg: string; color: string }> = {
  'GTM Engineer School': { label: 'GTM Engineer School', bg: '#DCFCE7', color: '#166534' },
  'Lemlist':             { label: 'Lemlist',             bg: '#FEE2E2', color: '#991B1B' },
  'CXL':                 { label: 'CXL',                 bg: '#FEF3C7', color: '#92400E' },
  'DigitalMarketer.com': { label: 'DigitalMarketer',     bg: '#DBEAFE', color: '#1E40AF' },
  'Google Analytics':    { label: 'Google',              bg: '#F3F4F6', color: '#374151' },
};

function getProvider(text: string) {
  for (const [key, val] of Object.entries(PROVIDER_MAP)) {
    if (text.includes(key)) return val;
  }
  return null;
}

const WHAT_I_DO_ICONS: Record<string, React.ReactNode> = {
  SEO: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
    </svg>
  ),
  'Google Ads': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-8 4 4 4-6 4 10" />
    </svg>
  ),
  Content: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 013.182 3.182L7.5 19.213l-4.5 1.125 1.125-4.5L16.862 3.487z" />
    </svg>
  ),
  Social: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.75a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6zM12 9.75a3 3 0 100-6 3 3 0 000 6zM6.75 15a6.001 6.001 0 0110.5 0" />
    </svg>
  ),
  AI: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
};

const WHAT_I_DO_BULLETS: Record<string, string[]> = {
  SEO:          ['Technical site audits', 'On-page content optimisation', 'Local & programmatic SEO'],
  'Google Ads': ['Search & shopping campaigns', 'Full-funnel keyword strategy', 'Conversion tracking & reporting'],
  Content:      ['Blog & landing page production', 'SEO-aligned editorial calendars', 'Content briefs & tone-of-voice'],
  Social:       ['LinkedIn content strategy', 'Founder brand building', 'Audience growth campaigns'],
  AI:           ['AI content & research workflows', 'Clay & Apify automation', 'Reporting at scale'],
};

const BG = {
  warm:  '#faf9f6',
  blue:  '#EFF6FF',
  navy:  '#1E3A5F',
} as const;

export default function DigitalMarketingPage() {
  return (
    <>
      <BackToTop />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24" style={{ backgroundColor: BG.warm }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            {/* Shimmer tagline */}
            <p
              className="text-sm font-semibold tracking-wide mb-4"
              style={{
                background: `linear-gradient(90deg, ${BG.navy}, #4a7fb5, #93b4d4, #4a7fb5, ${BG.navy})`,
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                animation: 'shimmer-slide 4s linear infinite',
              }}
            >
              SEO · Google Ads · Content · AI Marketing
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
              I help businesses grow through data-driven digital marketing
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
              6 years across SEO, paid search, content, and AI-augmented campaigns. Based in
              Australia, open to digital marketing roles.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="mailto:ahmer.subhani02@gmail.com"
                className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: BG.navy }}
              >
                Get in touch
              </a>
              <a
                href="#case-studies"
                className="px-6 py-3 border text-sm font-semibold rounded-xl transition-colors hover:bg-[#EFF6FF]"
                style={{ borderColor: BG.navy, color: BG.navy }}
              >
                See my work
              </a>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-4">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: '6 Years Experience',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                    </svg>
                  ),
                  label: '14+ Case Studies',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  label: 'Based in Australia',
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
                  style={{ backgroundColor: BG.blue, color: BG.navy }}
                >
                  {badge.icon}
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[38%] flex-shrink-0">
            <div className="relative w-full aspect-[5/6] rounded-2xl overflow-hidden bg-[#e5e3de]">
              <Image
                src="/images/headshot.png"
                alt="Ahmer Mehmood"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from={BG.warm} to={BG.blue} />

      {/* ── Meet Ahmer ───────────────────────────────────────── */}
      <section id="meet-ahmer" className="py-16" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Meet Ahmer.</h2>
            <p className="text-secondary text-sm mb-8">A quick intro to who I am and how I work.</p>
            <YouTubeEmbed url="https://www.loom.com/share/d47b9cdb3491461ba1a798e700038886" title="Meet Ahmer Mehmood" />
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.warm} flip />

      {/* ── Case Studies ─────────────────────────────────────── */}
      <section id="case-studies" className="py-16" style={{ backgroundColor: BG.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Case studies.</h2>
            <p className="text-secondary text-sm mb-8">
              Digital marketing projects — SEO, Google Ads, and content.
            </p>

            <div className="overflow-x-scroll pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-5" style={{ minWidth: 'max-content' }}>
                {dmProjects.map((project) => (
                  <div
                    key={project.slug}
                    className="group relative bg-card border border-black/[0.08] rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#1E3A5F]/30 hover:-translate-y-1.5"
                    style={{ width: '320px', flexShrink: 0 }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute left-0 inset-y-0 w-[3px] rounded-l-2xl origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
                      style={{ backgroundColor: BG.navy }}
                    />

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                          style={{ backgroundColor: BG.blue, color: BG.navy }}
                        >
                          {formatCategoryLabel(cat)}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold text-primary leading-snug mb-2">
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
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex-1 rounded-xl p-3 text-center"
                          style={{ backgroundColor: BG.blue }}
                        >
                          <div className="flex items-center justify-center gap-1 mb-0.5">
                            <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke={BG.navy} strokeWidth={2.5} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            <CountUp value={stat.value} className="text-lg font-semibold" style={{ color: BG.navy } as React.CSSProperties} />
                          </div>
                          <p className="text-xs text-secondary">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold transition-opacity hover:opacity-70"
                      style={{ color: BG.navy }}
                    >
                      Read case study →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-sm text-secondary mt-4">
              ← Swipe to see all digital marketing case studies →
            </p>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.warm} to={BG.navy} />

      {/* ── What I do ────────────────────────────────────────── */}
      <section id="what-i-do" className="py-16" style={{ backgroundColor: BG.navy }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">What I do.</h2>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Five channels, one integrated approach.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whatIDo.slice(0, 4).map((item, i) => (
                <FadeIn key={item.title} delay={i * 80}>
                  <div className="group bg-card border border-black/[0.08] rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-200">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: BG.blue, color: BG.navy }}
                    >
                      {WHAT_I_DO_ICONS[item.icon] ?? null}
                    </div>
                    <h3 className="text-base font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                    {/* Hover bullet reveal */}
                    <div className="overflow-hidden max-h-0 group-hover:max-h-28 transition-all duration-300 ease-out">
                      <ul className="mt-3 pt-3 border-t border-black/[0.06] space-y-1.5">
                        {(WHAT_I_DO_BULLETS[item.icon] ?? []).map((b) => (
                          <li key={b} className="text-xs text-secondary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BG.navy }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
              <div className="sm:col-span-2 flex sm:justify-center">
                <FadeIn delay={320} className="w-full sm:w-[calc(50%-8px)]">
                  <div className="group bg-card border border-black/[0.08] rounded-2xl p-6 hover:shadow-lg transition-all duration-200">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: BG.blue, color: BG.navy }}
                    >
                      {WHAT_I_DO_ICONS[whatIDo[4].icon] ?? null}
                    </div>
                    <h3 className="text-base font-semibold text-primary mb-2">{whatIDo[4].title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{whatIDo[4].text}</p>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-28 transition-all duration-300 ease-out">
                      <ul className="mt-3 pt-3 border-t border-black/[0.06] space-y-1.5">
                        {(WHAT_I_DO_BULLETS[whatIDo[4].icon] ?? []).map((b) => (
                          <li key={b} className="text-xs text-secondary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BG.navy }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.navy} to={BG.warm} flip />

      {/* ── Tools I use ──────────────────────────────────────── */}
      <section id="tools" className="py-16" style={{ backgroundColor: BG.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: BG.blue, color: BG.navy }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.896-1.183l3.184.53a1.5 1.5 0 01.82 2.503l-2.252 2.252a1.5 1.5 0 01-2.003.128l-.534-.4" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Tools I use.</h2>
            </div>
            <p className="text-secondary text-sm mb-10">
              What I reach for on digital marketing engagements.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(dmStack).map(([category, tools]) => (
                <div key={category}>
                  <h3 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-semibold rounded-full cursor-default transition-all duration-150 hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: BG.blue, color: BG.navy }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.warm} to={BG.blue} />

      {/* ── Certifications ───────────────────────────────────── */}
      <section id="certifications" className="py-16" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#dbeafe', color: BG.navy }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">Certifications</h2>
            </div>
            <div className="max-w-xl">
              <div className="relative pl-8 space-y-8" style={{ borderLeft: '2px solid #93b4d4' }}>
                {rawData.recognition.map((item) => {
                  const provider = getProvider(item.text);
                  return (
                    <div key={`${item.year}-${item.text}`} className="relative">
                      <span
                        className="absolute -left-[41px] top-0.5 w-3 h-3 rounded-full border-2"
                        style={{ backgroundColor: BG.blue, borderColor: BG.navy }}
                      />
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold" style={{ color: BG.navy }}>
                          {item.year}
                        </span>
                        {provider && (
                          <span
                            className="px-2 py-0.5 text-xs font-semibold rounded-full"
                            style={{ backgroundColor: provider.bg, color: provider.color }}
                          >
                            {provider.label}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.warm} flip />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="testimonials" className="py-16" style={{ backgroundColor: BG.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <TestimonialSlider
              testimonials={[
                {
                  quote:
                    'Working with Ahmer at Techling has been an exceptional experience. He played a crucial role in building our entire digital and marketing infrastructure from the ground up.',
                  attribution: 'Muhammad Akif, CEO, Techling.ai',
                  linkedin: 'https://www.linkedin.com/in/moohammad-akif/',
                },
                {
                  quote:
                    'It has been an excellent experience working with Ahmer. He is a quick learner with a keen attention to detail.',
                  attribution: 'Sarmad Sohail, Director of Web and Search, Lion Digital',
                  linkedin: 'https://www.linkedin.com/in/sabsohail/',
                },
              ]}
            />
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.warm} to={BG.blue} />

      {/* ── Get in touch ─────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Get in touch</h2>
            <p className="text-muted text-sm mb-8 max-w-md">
              Open to digital marketing roles and projects in Australia. Reach out directly.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <a
                  href="mailto:ahmer.subhani02@gmail.com"
                  className="flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: BG.navy }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
                  </svg>
                  ahmer.subhani02@gmail.com
                </a>
                <CopyButton text="ahmer.subhani02@gmail.com" />
              </div>
              <a
                href="tel:0438053591"
                className="flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity"
                style={{ color: BG.navy }}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0438 053 591
              </a>
              <div className="flex items-center gap-3 font-semibold" style={{ color: BG.navy }}>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Hervey Bay, Queensland
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.warm} flip />
    </>
  );
}
