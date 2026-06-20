import type { ProjectStat } from '@/lib/types';

type Props = {
  stat: ProjectStat;
};

export function StatCard({ stat }: Props) {
  return (
    <div className="bg-card border border-black/[0.08] rounded-xl p-6 text-center flex-1">
      <p className="text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.value}</p>
      <p className="text-sm text-secondary">{stat.label}</p>
    </div>
  );
}
