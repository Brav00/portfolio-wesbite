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
    <header className="sticky top-0 z-50 bg-page-bg border-b border-black/[0.06]">
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
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
            >
              Get in touch
            </a>
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
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1E3A5F' }}
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
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
