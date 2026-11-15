'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useBrand } from '@/lib/useBrand';
import { ArrowButton, SoftPill } from '@/components/gtm/ui';

const DM_SECTIONS = ['meet-ahmer', 'case-studies', 'what-i-do', 'tools', 'certifications', 'testimonials', 'contact'];
const HOME_SECTIONS = ['results', 'work', 'what-i-do', 'stack', 'story', 'testimonials', 'contact'];

export function Header() {
  const pathname = usePathname();
  const brand = useBrand();
  const isHome = pathname === '/';
  const isDigitalMarketing = pathname === '/digital-marketing';
  const base = isHome ? '' : '/';

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy on the two long landing pages
  useEffect(() => {
    if (!isDigitalMarketing && !isHome) return;
    const ids = isDigitalMarketing ? DM_SECTIONS : HOME_SECTIONS;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isDigitalMarketing, isHome]);

  const anchorLinks = isDigitalMarketing
    ? [
        { href: '#meet-ahmer', label: 'Meet Ahmer' },
        { href: '#case-studies', label: 'See my work' },
        { href: '#what-i-do', label: 'Work I do' },
        { href: '#tools', label: 'Tools I use' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#certifications', label: 'Certifications' },
      ]
    : [
        { href: `${base}#work`, label: 'Work' },
        { href: `${base}#what-i-do`, label: 'What I do' },
        { href: `${base}#stack`, label: 'Stack' },
        { href: `${base}#story`, label: 'Story' },
        { href: `${base}#testimonials`, label: 'Testimonials' },
      ];

  const isActive = (href: string) =>
    (isDigitalMarketing || isHome) && activeSection === href.split('#')[1];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/[0.06] transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm' : ''}`}
      style={{ backgroundColor: scrolled ? brand.bgScrolled : brand.bg }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans text-primary font-semibold text-base tracking-tight hover:text-accent transition-colors"
        >
          Ahmer Mehmood
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {anchorLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13.7px] text-[#3a3936] hover:text-[#1c1b19] transition-colors"
                style={{
                  color: active ? brand.primary : undefined,
                  fontWeight: active ? 600 : undefined,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          {isDigitalMarketing ? (
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Ahmer_Mehmood_Digital_Marketing_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-3.5 py-1.5 text-[13.5px] font-medium transition-colors hover:brightness-95"
                style={{ backgroundColor: '#faeeda', color: '#854f0b' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.9} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Resume
              </a>
              <ArrowButton href="#contact" size="sm">Get in touch</ArrowButton>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <SoftPill
                href="/projects"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.9} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                }
              >
                All case studies
              </SoftPill>
              <ArrowButton href={`${base}#contact`} size="sm">Get in touch</ArrowButton>
            </div>
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-5 h-0.5 bg-primary transition-transform origin-center ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary transition-transform origin-center ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/[0.06] bg-page-bg px-6 py-4 flex flex-col gap-4">
          {anchorLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: active ? brand.primary : undefined, fontWeight: active ? 600 : undefined }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          {isDigitalMarketing ? (
            <>
              <a
                href="/resume.pdf"
                download="Ahmer_Mehmood_Digital_Marketing_Resume.pdf"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-full"
                style={{ backgroundColor: '#faeeda', color: '#854f0b' }}
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-4 py-2.5 text-sm font-medium text-white rounded-full text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: brand.primary }}
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </a>
            </>
          ) : (
            <>
              <Link
                href="/projects"
                className="px-4 py-2.5 text-sm font-medium rounded-full text-center"
                style={{ backgroundColor: '#faeeda', color: '#854f0b' }}
                onClick={() => setMenuOpen(false)}
              >
                All case studies
              </Link>
              <Link
                href={`${base}#contact`}
                className="px-4 py-2.5 text-sm font-medium text-white rounded-full text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: brand.primary }}
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
