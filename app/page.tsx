import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import { HomepageWorkSection } from '@/components/HomepageWorkSection';
import { TestimonialCard } from '@/components/TestimonialCard';
import { FadeIn } from '@/components/FadeIn';
import { WaveDivider } from '@/components/WaveDivider';
import { BackToTop } from '@/components/BackToTop';
import { BG } from '@/lib/colors';

const featuredProjects = projects.filter((p) => p.featured);

const homepageTestimonials = [
  {
    quote:
      'Working with Ahmer at Techling has been an exceptional experience. As our Head of Growth, he played a crucial role in building our entire digital and marketing infrastructure from the ground up. He built and scaled our marketing channels across content, email, and paid media, and set up robust outbound systems that allowed us to consistently reach and convert high-quality leads.',
    attribution: 'Muhammad Akif, CEO, Techling.ai',
  },
  {
    quote:
      "Ahmer knows his stuff when it comes to cold emailing. We signed multiple clients while working together and fully delegated the work to him with minimal communication needed.",
    attribution: 'Daryl Rosser, Logeix',
  },
  {
    quote:
      "What sets Ahmer apart is not just his expertise, but his work ethic and dedication. He's proactive, detail-oriented, and deeply committed to delivering results.",
    attribution: 'Muhammad Ammar, Director, Techling Healthcare',
  },
];

const stack: Record<string, string[]> = {
  'SEO & local search': [
    'SemRush',
    'Moz',
    'Google Search Console',
    'Google Analytics',
    'Google Business Profile',
  ],
  'Outbound & GTM': [
    'Smartlead',
    'EmailBison',
    'Apollo.io',
    'HeyReach',
    'Sales Navigator',
    'HubSpot CRM',
    'Reoon',
    'BounceBan',
    'LeadMagic',
  ],
  'AI tooling': ['Clay', 'ChatGPT', 'Claude', 'Claude Code', 'Apify'],
  'Project & client management': ['HubSpot CRM', 'Google Sheets'],
  'Content & design': ['Canva', 'Taplio'],
};

const recognition = [
  { year: '2025', description: 'GTM Engineering, Cohort 2, GTM Engineer School' },
  { year: '2020', description: 'Paid Traffic Mastery, E-commerce Marketing Mastery, Social Media Mastery — Digital Marketer certifications' },
  { year: '2019', description: 'Personal Branding certification, Lemlist' },
  { year: '2016–2020', description: 'BSc Computer Science and Programming, FAST NUCES, Pakistan' },
];

export default function Home() {
  return (
    <>
      <BackToTop />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24" style={{ backgroundColor: BG.warm }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Copy */}
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
              SEO · GTM · Outbound
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
              I help home services and B2B companies grow through SEO, GTM, and outbound
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
              6 years of hands-on work across SEO, cold outbound, and GTM — with {projects.length}+ documented case
              studies spanning B2B SaaS, e-commerce, and agencies.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="px-6 py-3 text-white text-sm font-semibold rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: BG.navy }}
              >
                Get in touch
              </a>
              <Link
                href="/projects"
                className="px-6 py-3 border text-sm font-semibold rounded-xl transition-colors hover:bg-[#EFF6FF]"
                style={{ borderColor: BG.navy, color: BG.navy }}
              >
                See all work
              </Link>
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
                  label: `${projects.length}+ Case Studies`,
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

          {/* Headshot */}
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

      {/* ── What I do ────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">What I do</h2>
            <div className="max-w-2xl space-y-4">
              <p className="text-muted leading-relaxed">
                I work across three things: SEO (technical and content), cold outbound (email and
                LinkedIn), and GTM strategy — positioning, ICP definition, and the systems that
                tie growth together. Most of my clients are B2B companies and agencies that need
                results, not decks.
              </p>
              <p className="text-muted leading-relaxed">
                I started in SEO, moved into lead generation and outbound, and picked up GTM as the
                natural connective tissue between them. With AI in the mix now, that range has
                turned into being a T-shaped technical marketer — able to move fast across channels
                and build things that actually run.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.warm} flip />

      {/* ── Recent work ──────────────────────────────────────── */}
      <HomepageWorkSection projects={featuredProjects} totalCount={projects.length} />

      <WaveDivider from={BG.warm} to={BG.blue} />

      {/* ── Testimonial ──────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <TestimonialCard
              quote={homepageTestimonials[0].quote}
              attribution={homepageTestimonials[0].attribution}
            />
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.navy} flip />

      {/* ── My story ─────────────────────────────────────────── */}
      <section id="story" className="py-20" style={{ backgroundColor: BG.navy }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-12">My story</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <FadeIn>
                <h3 className="text-base font-semibold text-white mb-3">Who I am</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Based in Australia. A tech guy turned marketer, fascinated by what actually moves
                  people to decide. 6 years in, across SEO, cold outbound, and GTM — with a CS
                  degree from FAST NUCES that still shows in how I think about systems and
                  automation.
                </p>
              </FadeIn>
              <FadeIn delay={80}>
                <h3 className="text-base font-semibold text-white mb-3">The journey</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  It started in a 2019 semester break, learning SEO through a friend&apos;s
                  recommendation and a stack of Coursera courses. When COVID hit, Digital Marketer
                  opened its paid courses free — I put in 16-hour days and got through as much as
                  I could. That led into lead generation and cold email, chasing the idea of running
                  my own agency. Two failed attempts later, I realised the real asset wasn&apos;t
                  any single skill — it was the range.
                </p>
              </FadeIn>
              <FadeIn delay={160}>
                <h3 className="text-base font-semibold text-white mb-3">How I work</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Today, with AI and LLMs in the mix, that range has turned into being a T-shaped
                  technical marketer. I build things that run — outbound systems, SEO foundations,
                  GTM frameworks — and I document them so they keep running after I&apos;m gone.
                  I work best with founders and operators who care about what the numbers say, not
                  how the deck looks.
                </p>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.navy} to={BG.warm} flip />

      {/* ── The stack ────────────────────────────────────────── */}
      <section id="stack" className="py-20" style={{ backgroundColor: BG.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">The stack</h2>
            <p className="text-secondary text-sm mb-10">
              What I use day to day. Not exhaustive, updated as the workflow shifts.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(stack).map(([category, tools]) => (
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

      {/* ── Recognition ──────────────────────────────────────── */}
      <section id="recognition" className="py-20" style={{ backgroundColor: BG.blue }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">Recognition</h2>
            <div className="max-w-xl">
              <div className="relative pl-8 space-y-8" style={{ borderLeft: '2px solid #93b4d4' }}>
                {recognition.map((item) => (
                  <div key={`${item.year}-${item.description}`} className="relative">
                    <span
                      className="absolute -left-[41px] top-0.5 w-3 h-3 rounded-full border-2"
                      style={{ backgroundColor: BG.blue, borderColor: BG.navy }}
                    />
                    <span className="text-sm font-semibold block mb-1" style={{ color: BG.navy }}>
                      {item.year}
                    </span>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <WaveDivider from={BG.blue} to={BG.warm} flip />

      {/* ── Get in touch ─────────────────────────────────────── */}
      <section id="contact" className="py-20" style={{ backgroundColor: BG.warm }}>
        <FadeIn>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Get in touch</h2>
            <p className="text-muted text-sm mb-4 max-w-md">
              Have a project in mind? I work with a small number of clients at a time, so reach out
              early.
            </p>
            <a
              href="mailto:ahmer.subhani02@gmail.com"
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: BG.navy }}
            >
              ahmer.subhani02@gmail.com
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
