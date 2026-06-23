'use client';

import { useState, useEffect } from 'react';

type Testimonial = {
  quote: string;
  attribution: string;
  linkedin?: string;
};

type Props = {
  testimonials: Testimonial[];
  intervalMs?: number;
};

export function TestimonialSlider({ testimonials, intervalMs = 5000 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [testimonials.length, intervalMs]);

  return (
    <div
      className="rounded-2xl px-8 py-12 md:px-16 md:py-16 text-center"
      style={{ backgroundColor: '#1E3A5F' }}
    >
      <div className="relative min-h-[8rem] flex items-center justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
          >
            <p className="font-serif text-white/90 text-xl md:text-2xl leading-relaxed mb-6 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm" style={{ color: '#93b4d4' }}>
                {t.attribution}
              </p>
              {t.linkedin && (
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="transition-opacity hover:opacity-80"
                  style={{ color: '#93b4d4' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-0.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
        <div
          key={active}
          className="h-full rounded-full"
          style={{
            backgroundColor: 'rgba(255,255,255,0.65)',
            animation: `dm-progress ${intervalMs}ms linear forwards`,
          }}
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: i === active ? '#ffffff' : '#93b4d4',
              opacity: i === active ? 1 : 0.5,
              transform: i === active ? 'scale(1.25)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
