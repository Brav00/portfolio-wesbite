import Image from 'next/image';
import Link from 'next/link';
import projects from '@/data/projects';
import { HomepageWorkSection } from '@/components/HomepageWorkSection';
import { TestimonialCard } from '@/components/TestimonialCard';

const featuredProjects = projects.filter((p) => p.featured);

const homepageTestimonial = {
  quote:
    "Ahmer doesn't just give you a strategy document and disappear. He builds the system, trains the team, and stays until it's working. That combination is genuinely rare.",
  attribution: 'Founder, B2B technology company',
};

const stack: Record<string, string[]> = {
  'SEO & local search': [
    'Ahrefs',
    'Semrush',
    'Screaming Frog',
    'Google Search Console',
    'BrightLocal',
    'Google Business Profile',
  ],
  'Outbound & GTM': [
    'Apollo',
    'Outreach',
    'Clay',
    'HubSpot',
    'LinkedIn Sales Navigator',
    'Lemlist',
  ],
  'AI tooling': ['Claude', 'ChatGPT', 'Perplexity'],
  'Project & client management': ['Notion', 'Loom', 'Slack', 'Linear'],
};

const recognition = [
  { year: '2024', description: 'Google Analytics 4 certification' },
  { year: '2023', description: 'HubSpot content marketing certification' },
  { year: '2022', description: 'Launched independent practice after 15+ years in-house and agency' },
  { year: '2018', description: 'Semrush Academy SEO fundamentals certification' },
  { year: '2015', description: 'Promoted to head of digital, [Agency name — placeholder]' },
  { year: '2010', description: 'BSc Marketing, [University name — placeholder]' },
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
              15+ years across two agencies and as an independent consultant. 9+ documented case
              studies with measurable results.
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
                src="/images/placeholder-headshot.svg"
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
              I run two practices side by side. One is client-facing delivery — SEO campaigns,
              outbound programmes, and GTM engagements for home services and B2B companies where
              I&apos;m hands-on with execution, not just strategy. The other is systems and
              operations work: helping founders and sales leaders build the infrastructure that
              makes growth repeatable and measurable.
            </p>
            <p className="text-muted leading-relaxed">
              Both come from the same roots: 15+ years of doing the actual work, in-house and at
              agencies, before going independent. Most consultants come from one world or the
              other. Working across both means I understand what breaks when strategy meets
              execution — and how to prevent it.
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
            quote={homepageTestimonial.quote}
            attribution={homepageTestimonial.attribution}
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
                Based in [city — placeholder]. 15+ years in marketing and growth, working with
                everyone from local home services businesses to Series B SaaS companies. Currently
                building a personal brand around GTM frameworks for B2B operators and sharing the
                systems that have actually worked in the field.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">The journey</h3>
              <p className="text-muted text-sm leading-relaxed">
                Started in-house at a regional company learning every part of the marketing
                function from the ground up. Moved into agency life where I led accounts across
                home services and professional services verticals, eventually heading up the
                digital team. After 15+ years accumulating systems that consistently worked, I
                took those independent and haven&apos;t looked back.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-primary mb-3">How I work</h3>
              <p className="text-muted text-sm leading-relaxed">
                Direct, documented, measurable. Every engagement ends with something you can hand
                to the next person — a playbook, a system, a trained team. I work better with
                operators than with brand marketers because the people I work best with care about
                what the numbers say at the end of the quarter, not what the slide deck looked
                like.
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
            href="mailto:hello@ahmermehmood.com"
            className="text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            hello@ahmermehmood.com
          </a>
        </div>
      </section>
    </>
  );
}
