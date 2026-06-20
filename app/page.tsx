import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import { HomepageWorkSection } from '@/components/HomepageWorkSection';
import { TestimonialCard } from '@/components/TestimonialCard';

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
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Copy */}
          <div className="flex-1">
            <p className="text-accent text-sm font-semibold tracking-wide mb-4">
              SEO · GTM · Outbound
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-primary leading-tight mb-6">
              I help home services and B2B companies grow through SEO, GTM, and outbound
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
              6 years of hands-on work across SEO, cold outbound, and GTM — with {projects.length}+ documented case
              studies spanning B2B SaaS, e-commerce, and agencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get in touch
              </a>
              <Link
                href="/projects"
                className="px-6 py-3 border border-black/20 text-primary text-sm font-semibold rounded-xl hover:border-black/40 transition-colors"
              >
                See all work
              </Link>
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

      {/* ── What I do ────────────────────────────────────────── */}
      <section className="py-16 border-t border-black/[0.06]">
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
      </section>

      {/* ── Recent work ──────────────────────────────────────── */}
      <HomepageWorkSection projects={featuredProjects} totalCount={projects.length} />

      {/* ── Testimonial ──────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialCard
            quote={homepageTestimonials[0].quote}
            attribution={homepageTestimonials[0].attribution}
          />
        </div>
      </section>

      {/* ── My story ─────────────────────────────────────────── */}
      <section id="story" className="py-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">My story</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">Who I am</h3>
              <p className="text-muted text-sm leading-relaxed">
                Based in Australia. A tech guy turned marketer, fascinated by what actually moves
                people to decide. 6 years in, across SEO, cold outbound, and GTM — with a CS
                degree from FAST NUCES that still shows in how I think about systems and
                automation.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">The journey</h3>
              <p className="text-muted text-sm leading-relaxed">
                It started in a 2019 semester break, learning SEO through a friend&apos;s
                recommendation and a stack of Coursera courses. When COVID hit, Digital Marketer
                opened its paid courses free — I put in 16-hour days and got through as much as
                I could. That led into lead generation and cold email, chasing the idea of running
                my own agency. Two failed attempts later, I realised the real asset wasn&apos;t
                any single skill — it was the range.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">How I work</h3>
              <p className="text-muted text-sm leading-relaxed">
                Today, with AI and LLMs in the mix, that range has turned into being a T-shaped
                technical marketer. I build things that run — outbound systems, SEO foundations,
                GTM frameworks — and I document them so they keep running after I&apos;m gone.
                I work best with founders and operators who care about what the numbers say, not
                how the deck looks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The stack ────────────────────────────────────────── */}
      <section id="stack" className="py-20 border-t border-black/[0.06]">
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
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-tag text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognition ──────────────────────────────────────── */}
      <section id="recognition" className="py-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">Recognition</h2>
          <div className="max-w-xl">
            <div className="relative border-l-2 border-accent/30 pl-8 space-y-8">
              {recognition.map((item) => (
                <div key={`${item.year}-${item.description}`} className="relative">
                  <span className="absolute -left-[41px] top-0.5 w-3 h-3 rounded-full bg-accent-tag border-2 border-accent" />
                  <span className="text-sm font-semibold text-accent block mb-1">{item.year}</span>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Get in touch ─────────────────────────────────────── */}
      <section id="contact" className="py-20 border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Get in touch</h2>
          <p className="text-muted text-sm mb-4 max-w-md">
            Have a project in mind? I work with a small number of clients at a time, so reach out
            early.
          </p>
          <a
            href="mailto:ahmer.subhani02@gmail.com"
            className="text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            ahmer.subhani02@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
