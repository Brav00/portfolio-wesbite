'use client';

import { useEffect, useRef, useState } from 'react';

function parse(raw: string) {
  const m = raw.match(/^(\$?)([\d,\.]+)([%KMx+]*)$/);
  if (!m) return null;
  return {
    prefix: m[1],
    num: parseFloat(m[2].replace(/,/g, '')),
    suffix: m[3],
    hasComma: m[2].includes(','),
  };
}

function fmt(n: number, hasComma: boolean, suffix: string) {
  if (hasComma) return Math.round(n).toLocaleString('en-AU');
  if (suffix === 'K' || suffix === 'M') {
    const s = n.toFixed(1);
    return s.endsWith('.0') ? s.slice(0, -2) : s;
  }
  return Number.isInteger(n) ? String(Math.round(n)) : n.toFixed(1);
}

type Props = { value: string; className?: string };

export function CountUp({ value, className }: Props) {
  const parsed = parse(value);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!parsed) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || !parsed) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(eased * parsed.num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}{fmt(count, parsed.hasComma, parsed.suffix)}{parsed.suffix}
    </span>
  );
}
