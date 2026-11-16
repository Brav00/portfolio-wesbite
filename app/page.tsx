import Image from 'next/image';
import projects from '@/data/projects';
import rawData from '@/data/projects_updated.json';
import { FadeIn } from '@/components/FadeIn';
import { CountUp } from '@/components/CountUp';
import { WaveDivider } from '@/components/WaveDivider';
import { BackToTop } from '@/components/BackToTop';
import { CopyButton } from '@/components/CopyButton';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { GTM } from '@/lib/colors';
import { ArrowButton, TextLink, SectionLabel, GtmHeading } from '@/components/gtm/ui';
import { SectionRail } from '@/components/gtm/SectionRail';
import { CaseStudyCard } from '@/components/gtm/CaseStudyCard';

/* ── Content ─────────────────────────────────────────────────────── */

// GTM engineering case studies, cold email first.
const GTM_PROJECT_SLUGS = [
  'arken-cold-email',
  'logeix-cold-email',
  'syntech-cold-email',
  'viralfire-outbound',
  'techling-cold-email',
  'plus-social-cold-email',
  'techling-head-of-growth',
  'techling-linkedin-outreach',
];
const gtmProjects = GTM_PROJECT_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
  (p): p is (typeof projects)[number] => p !== undefined
);

const headlineStats = [
  { value: '$1.1M', label: 'Total pipeline generated' },
  { value: '61+', label: 'Meetings booked' },
  { value: '13+', label: 'Clients signed' },
  { value: '17%', label: 'Average positive reply rate' },
];

const ICON = {
  mail: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75',
  linkedin: 'M18 18.75a3 3 0 100-6 3 3 0 000 6zm-12 0a3 3 0 100-6 3 3 0 000 6zM12 9.75a3 3 0 100-6 3 3 0 000 6zM6.75 15a6.001 6.001 0 0110.5 0',
  data: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
  automation: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
  crm: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  target: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
};

function Icon({ d, className = 'w-6 h-6' }: { d: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

const coldEmail = {
  title: 'Signal-based cold email systems',
  text: "Cold email as the engine of a full GTM system. I find alpha in data your competitors aren't using, turn buying signals into AI-personalised plays, and wire every touchpoint across email, LinkedIn and CRM into one workflow. The goal is a repeatable system, not one-off campaigns.",
  bullets: [
    'Custom signals built from scratch: scraped site changes, new ad campaigns, review trends and niche directories',
    'Clay waterfalls and custom data sources for list alpha',
    'AI research agents writing personalisation at scale',
    'Multi-touch sequences across email and LinkedIn',
    'CRM sync, lead routing and AI reply classification',
    'Deliverability infrastructure built for scale',
  ],
};

const otherServices = [
  {
    icon: ICON.linkedin,
    title: 'LinkedIn outbound plays',
    text: 'Signal-triggered LinkedIn plays that run in sync with email, so every prospect gets a coordinated multi-touch sequence.',
    bullets: [
      'Sales Navigator and HeyReach multi-sender campaigns',
      'Engagement signals from profile views, post likes and comments',
      'Founder-led social selling and profile alignment',
    ],
  },
  {
    icon: ICON.data,
    title: 'Data & enrichment engineering',
    text: 'Clay-powered data pipelines that build your TAM, enrich every account and surface the alpha worth writing about.',
    bullets: [
      'TAM mapping and account scoring',
      'Waterfall enrichment and contact verification',
      'Custom scrapers with Apify and Claude Code',
    ],
  },
  {
    icon: ICON.automation,
    title: 'AI agents & GTM automation',
    text: 'Agentic workflows that do the manual work between research, outreach and pipeline.',
    bullets: [
      'AI agents for account research and lead qualification',
      'Custom GTM tooling built with Claude Code',
      'Automated handoffs from signal to sequence to CRM',
    ],
  },
  {
    icon: ICON.crm,
    title: 'CRM & GTM ops',
    text: 'The RevOps layer that keeps the system clean, measurable and tied to revenue.',
    bullets: [
      'HubSpot pipeline, lifecycle and lead routing setup',
      'Attribution from first touch to closed deal',
      'Dashboards tracking pipeline, not vanity metrics',
    ],
  },
];

const stack: Record<string, string[]> = {
  'Cold email': ['Smartlead', 'EmailBison', 'Instantly'],
  'Data & enrichment': ['Clay', 'Apify', 'Sales Navigator', 'AI Ark', 'Prospeo', 'LeadMagic', 'BounceBan'],
  'LinkedIn': ['HeyReach', 'Sales Navigator', 'Taplio'],
  'AI & automation': ['Claude', 'Claude Code', 'ChatGPT'],
  'CRM & ops': ['HubSpot'],
};

const PROVIDER_MAP: Record<string, { label: string; bg: string; color: string }> = {
  'GTM Engineer School': { label: 'GTM Engineer School', bg: '#DCFCE7', color: '#166534' },
  Lemlist: { label: 'Lemlist', bg: '#FEE2E2', color: '#991B1B' },
  'FAST NUCES': { label: 'FAST NUCES', bg: '#F3F4F6', color: '#374151' },
};

const recognition = [
  ...rawData.recognition.filter((r) => r.text.includes('GTM Engineer School') || r.text.includes('Lemlist')),
  { year: '2016–2020', text: 'BSc Computer Science, FAST NUCES, Pakistan.' },
];

function getProvider(text: string) {
  for (const [key, val] of Object.entries(PROVIDER_MAP)) {
    if (text.includes(key)) return val;
  }
  return null;
}

const testimonials = [
  {
    quote:
      'Ahmer knows his stuff when it comes to cold emailing. We signed multiple clients while working together and fully delegated the work to him with minimal communication needed.',
    attribution: 'Daryl Rosser, Logeix',
  },
  {
    quote:
      'He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
    attribution: 'Muhammad Akif, CEO, Techling.ai',
    linkedin: 'https://www.linkedin.com/in/moohammad-akif/',
  },
  {
    quote:
      "What sets Ahmer apart is not just his expertise, but his work ethic and dedication. He's proactive, detail-oriented, and deeply committed to delivering results.",
    attribution: 'Muhammad Ammar, Director, Techling Healthcare',
  },
];

const RAIL = [
  { id: 'top', label: 'Intro' },
  { id: 'results', label: 'Results' },
  { id: 'work', label: 'Work' },
  { id: 'what-i-do', label: 'Services' },
  { id: 'stack', label: 'Stack' },
  { id: 'story', label: 'Story' },
  { id: 'recognition', label: 'Certifications' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

/* ── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="font-gtm-body [&_section[id]]:scroll-mt-20">
      <BackToTop />
      <SectionRail sections={RAIL} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section id="top" className="pt-20 pb-16 md:pt-28 md:pb-24" style={{ backgroundColor: GTM.warm }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2 mb-6" style={{ backgroundColor: GTM.tag }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GTM.copper }} />
            <p
              className="text-[14px] font-semibold"
              style={{
                background: `linear-gradient(90deg, ${GTM.copperInk}, ${GTM.copper}, ${GTM.copperLight}, ${GTM.copper}, ${GTM.copperInk})`,
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                animation: 'shimmer-slide 4s linear infinite',
              }}
            >
              GTM Engineering · Cold Email · Outbound Systems
            </p>
            </div>
            <GtmHeading as="h1" lead="I engineer pipeline for B2B companies through" accent="cold email, data and automation" className="mb-6" />
            <p className="text-muted text-[16.8px] leading-[1.6] mb-9 max-w-xl">
              Engineer by training, marketer by trade, measured on sales. 6 years across SEO,
              outbound and Head of Growth roles, now building GTM systems that run on data, AI and
              code.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <ArrowButton href="#contact">Get in touch</ArrowButton>
              <TextLink href="#work" down>See my work</TextLink>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { d: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', label: '6 Years Experience' },
                { d: ICON.mail, label: 'Cold Email Specialist' },
                { d: ICON.target, label: 'Based in Australia' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full text-[13px] font-medium"
                  style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}
                >
                  <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center"><Icon d={badge.d} className="w-3.5 h-3.5" /></span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[38%] flex-shrink-0">
            <div className="relative w-full aspect-[5/6] rounded-2xl overflow-hidden bg-[#e5e3de]">
              <Image src="/images/headshot.png" alt="Ahmer Mehmood" fill className="object-cover" priority unoptimized />
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3 backdrop-blur-md flex items-center gap-3"
                style={{ backgroundColor: 'rgba(44,44,42,0.82)' }}
              >
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: GTM.copperLight }} />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full" style={{ backgroundColor: GTM.copperLight }} />
                </span>
                <p className="text-xs text-white/85 font-medium">Taking on new outbound projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from={GTM.warm} to={GTM.sand} />

      {/* ── Results ──────────────────────────────────────────── */}
      <section id="results" className="py-16" style={{ backgroundColor: GTM.sand }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={1}>Results</SectionLabel>
            <GtmHeading lead="Results at a" accent="glance." className="mb-3" />
            <p className="text-secondary text-[15px] mb-10">Combined across my outbound client work. Confirmed figures only, so the real totals are higher.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {headlineStats.map((stat, i) => (
                <FadeIn key={stat.label} delay={i * 80}>
                  <div className="bg-card border border-black/[0.08] rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CountUp value={stat.value} className="block font-gtm-heading tracking-[-0.03em] text-3xl md:text-4xl font-semibold mb-2" style={{ color: GTM.copper }} />
                    <p className="text-sm text-muted leading-snug">{stat.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={GTM.sand} to={GTM.warm} flip />

      {/* ── Case studies ─────────────────────────────────────── */}
      <section id="work" className="py-16" style={{ backgroundColor: GTM.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={2}>Work</SectionLabel>
            <GtmHeading lead="Case" accent="studies." className="mb-3" />
            <p className="text-secondary text-[15px] mb-10">Cold email, LinkedIn outreach and GTM builds, with the numbers behind them.</p>

            <div className="overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
              <div className="flex gap-5" style={{ minWidth: 'max-content' }}>
                {gtmProjects.map((project) => (
                  <CaseStudyCard key={project.slug} project={project} className="w-[320px] flex-shrink-0" />
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-secondary">← Swipe to see all GTM case studies →</p>
              <TextLink href="/projects" className="text-sm">Explore the full portfolio</TextLink>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={GTM.warm} to={GTM.charcoal} />

      {/* ── What I do ────────────────────────────────────────── */}
      <section id="what-i-do" className="py-16" style={{ backgroundColor: GTM.charcoal }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={3} dark>Services</SectionLabel>
            <GtmHeading lead="What I" accent="do." dark className="mb-3" />
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Cold email is the core. The rest of the GTM stack makes it work better.
            </p>

            {/* Featured: cold email */}
            <FadeIn>
              <div
                className="relative bg-card rounded-2xl p-6 md:p-8 mb-4 overflow-hidden border-2"
                style={{ borderColor: GTM.copper }}
              >
                <span
                  className="absolute top-0 right-0 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white rounded-bl-xl"
                  style={{ backgroundColor: GTM.copper }}
                >
                  Core focus
                </span>
                <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 md:gap-10 items-start">
                  <div>
                    <div className="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4" style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}>
                      <Icon d={ICON.mail} className="w-7 h-7" />
                    </div>
                    <h3 className="font-gtm-heading tracking-[-0.02em] text-xl font-semibold text-primary mb-2">{coldEmail.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{coldEmail.text}</p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 md:pt-16">
                    {coldEmail.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted flex items-start gap-2">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: GTM.copper }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((item, i) => (
                <FadeIn key={item.title} delay={i * 80}>
                  <div className="group bg-card border border-black/[0.08] rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-200">
                    <div className="w-9 h-9 rounded-[11px] flex items-center justify-center mb-4" style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}>
                      <Icon d={item.icon} />
                    </div>
                    <h3 className="font-gtm-heading tracking-[-0.01em] text-base font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                    <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-300 ease-out">
                      <ul className="mt-3 pt-3 border-t border-black/[0.06] space-y-1.5">
                        {item.bullets.map((b) => (
                          <li key={b} className="text-xs text-secondary flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GTM.copper }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={GTM.charcoal} to={GTM.warm} flip />

      {/* ── Stack ────────────────────────────────────────────── */}
      <section id="stack" className="py-16" style={{ backgroundColor: GTM.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={4}>Stack</SectionLabel>
            <GtmHeading lead="The" accent="stack." className="mb-3" />
            <p className="text-secondary text-[15px] mb-10">What I build GTM systems with. Updated as the workflow shifts.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {Object.entries(stack).map(([category, tools]) => (
                <div key={category}>
                  <h3 className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-semibold rounded-full cursor-default transition-all duration-150 hover:scale-105 hover:shadow-md"
                        style={{ backgroundColor: GTM.tag, color: GTM.copperInk }}
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

      <WaveDivider from={GTM.warm} to={GTM.sand} />

      {/* ── My story ─────────────────────────────────────────── */}
      <section id="story" className="py-16" style={{ backgroundColor: GTM.sand }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={5}>Story</SectionLabel>
            <GtmHeading lead="My" accent="story." className="mb-3" />
            <p className="text-secondary text-[15px] mb-10">Engineer by training, marketer by trade, GTM engineer by choice.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Who I am',
                  text: 'Based in Australia. A tech guy turned marketer, with a CS degree from FAST NUCES that still shows in how I think about systems and automation.',
                },
                {
                  title: 'The journey',
                  text: "It started with SEO in a 2019 semester break. During COVID I put in 16-hour days on Digital Marketer's courses, which led into lead generation and cold email. Two agency attempts later, outbound became the thing I'm best at.",
                },
                {
                  title: 'How I work',
                  text: "Today I build outbound systems with Clay, AI and code: data in, meetings out. I document everything so it keeps running after I'm gone, and I work best with founders who care what the numbers say.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 80}>
                  <div className="group relative bg-card border border-black/[0.08] rounded-2xl p-6 h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div
                      className="absolute left-0 inset-y-0 w-[3px] origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"
                      style={{ backgroundColor: GTM.copper }}
                    />
                    <span className="text-xs font-semibold" style={{ color: GTM.copper }}>0{i + 1}</span>
                    <h3 className="font-gtm-heading tracking-[-0.01em] text-base font-semibold text-primary mt-1 mb-3">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={GTM.sand} to={GTM.warm} flip />

      {/* ── Recognition ──────────────────────────────────────── */}
      <section id="recognition" className="py-16" style={{ backgroundColor: GTM.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={6}>Certifications</SectionLabel>
            <GtmHeading lead="My" accent="certifications." className="mb-12" />
            <div className="max-w-xl">
              <div className="relative pl-8 space-y-8" style={{ borderLeft: `2px solid ${GTM.copperLight}` }}>
                {recognition.map((item) => {
                  const provider = getProvider(item.text);
                  return (
                    <div key={`${item.year}-${item.text}`} className="relative">
                      <span
                        className="absolute -left-[41px] top-0.5 w-3 h-3 rounded-full border-2"
                        style={{ backgroundColor: GTM.warm, borderColor: GTM.copper }}
                      />
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold" style={{ color: GTM.copperInk }}>{item.year}</span>
                        {provider && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: provider.bg, color: provider.color }}>
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

      <WaveDivider from={GTM.warm} to={GTM.sand} />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="testimonials" className="py-16" style={{ backgroundColor: GTM.sand }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={7}>Testimonials</SectionLabel>
            <TestimonialSlider testimonials={testimonials} intervalMs={6000} />
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={GTM.sand} to={GTM.warm} flip />

      {/* ── Get in touch ─────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: GTM.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <SectionLabel index={8}>Contact</SectionLabel>
            <GtmHeading lead="Get in" accent="touch." className="mb-4" />
            <p className="text-muted text-sm mb-8 max-w-md">
              Need outbound that books meetings? I work with a small number of clients at a time, so reach out early.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <a
                  href={`mailto:${rawData.contact.email}`}
                  className="flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: GTM.copperInk }}
                >
                  <Icon d={ICON.mail} className="w-5 h-5 flex-shrink-0" />
                  {rawData.contact.email}
                </a>
                <CopyButton text={rawData.contact.email} />
              </div>
              <a
                href={rawData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-semibold hover:opacity-80 transition-opacity"
                style={{ color: GTM.copperInk }}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
