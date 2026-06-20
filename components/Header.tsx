'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const base = isHome ? '' : '/';

  const [menuOpen, setMenuOpen] = useState(false);

  const anchorLinks = [
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
          {anchorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            Projects →
          </Link>
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
          {anchorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-secondary hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/projects"
            className="text-sm font-semibold text-accent"
            onClick={() => setMenuOpen(false)}
          >
            Projects →
          </Link>
        </div>
      )}
    </header>
  );
}
