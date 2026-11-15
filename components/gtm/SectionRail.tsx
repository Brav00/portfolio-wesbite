'use client';

import { useEffect, useRef, useState } from 'react';
import { GTM } from '@/lib/colors';

type Section = { id: string; label: string };

/** Fixed dot rail on the right edge. One dot per section; the active one stretches into a copper bar.
 *  A small "02 Results" pill flashes beside it when the section changes, then fades so it doesn't
 *  cover content (hovering a dot shows its pill). Numbering starts at 00 so it matches the section labels.
 *  Hidden below lg. */
export function SectionRail({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [flash, setFlash] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setActive(e.target.id);
          // Show the active pill briefly whenever the section changes
          setFlash(true);
          if (timer.current) clearTimeout(timer.current);
          timer.current = setTimeout(() => setFlash(false), 1600);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      if (timer.current) clearTimeout(timer.current);
    };
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 py-3 px-2 rounded-full border border-black/[0.08] backdrop-blur-md"
      style={{ backgroundColor: 'rgba(250,249,246,0.8)' }}
    >
      {sections.map((s, i) => {
        const isActive = s.id === active;
        const showPill = isActive && flash;
        return (
          <a key={s.id} href={`#${s.id}`} aria-label={s.label} className="group relative flex items-center justify-center w-3 h-4">
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: isActive ? 4 : 5,
                height: isActive ? 18 : 5,
                backgroundColor: isActive ? GTM.copper : 'rgba(44,44,42,0.25)',
              }}
            />
            <span
              className={`absolute right-6 whitespace-nowrap rounded-[7px] px-2.5 py-1 font-gtm-mono text-[10.5px] font-medium tracking-[0.06em] text-white pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
                showPill ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-1.5'
              }`}
              style={{ backgroundColor: isActive ? GTM.copper : GTM.charcoal }}
            >
              {String(i).padStart(2, '0')} {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
