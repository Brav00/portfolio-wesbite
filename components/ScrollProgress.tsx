'use client';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[3px] transition-none pointer-events-none"
      style={{ width: `${pct}%`, backgroundColor: '#1E3A5F' }}
    />
  );
}
