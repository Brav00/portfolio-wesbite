'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function FadeIn({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(28px)',
      }}
    >
      {children}
    </div>
  );
}
