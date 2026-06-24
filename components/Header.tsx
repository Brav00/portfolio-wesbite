'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
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

  useEffect(() => {
    if (!isDigitalMarketing) return;
    const ids = ['meet-ahmer', 'case-studies', 'what-i-do', 'tools', 'certifications', 'testimonials', 'contact'];
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
  }, [isDigitalMarketing]);

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
        { href: `${base}#stack`, label: 'Stack' },
        { href: `${base}#story`, label: 'Story' },
        { href: `${base}#recognition`, label: 'Recognition' },
      ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/[0.06] transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm' : ''}`}
      style={{ backgroundColor: scrolled ? 'rgba(250,249,246,0.85)' : '#faf9f6' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-primary font-semibold text-base tracking-tight hover:text-accent transition-colors"
        >
          Ahmer Mehmood
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {anchorLinks.map((link) => {
            const isActive = isDigitalMarketing && activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{
                  color: isActive ? '#1E3A5F' : undefined,
                  fontWeight: isActive ? 600 : undefined,
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
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border transition-colors hover:bg-[#EFF6FF]"
                style={{ borderColor: '#1E3A5F', color: '#1E3A5F' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Resume
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1E3A5F' }}
              >
                Get in touch
              </a>
            </div>
          ) : (
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Projects →
            </Link>
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
            const isActive = isDigitalMarketing && activeSection === link.href.replace('#', '');
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: isActive ? '#1E3A5F' : undefined, fontWeight: isActive ? 600 : undefined }}
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
                className="flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg border transition-colors hover:bg-[#EFF6FF]"
                style={{ borderColor: '#1E3A5F', color: '#1E3A5F' }}
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1E3A5F' }}
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </a>
            </>
          ) : (
            <Link
              href="/projects"
              className="text-sm font-semibold text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Projects →
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
