import type { ProjectStat } from '@/lib/types';

type Props = {
  stat: ProjectStat;
};

export function StatCard({ stat }: Props) {
  return (
    <div className="bg-card border border-black/[0.08] rounded-2xl p-6 text-center flex-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <p className="font-gtm-heading tracking-[-0.03em] text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.value}</p>
      <p className="text-sm text-secondary">{stat.label}</p>
    </div>
  );
}
