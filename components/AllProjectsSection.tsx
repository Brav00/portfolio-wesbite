'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { getAllCategories, formatCategoryLabel } from '@/lib/utils';
import { CaseStudyCard } from '@/components/gtm/CaseStudyCard';

type Props = {
  projects: Project[];
};

export function AllProjectsSection({ projects }: Props) {
  const [active, setActive] = useState<string[]>([]);
  const categories = getAllCategories(projects);

  const filtered =
    active.length === 0
      ? projects
      : projects.filter((p) => p.categories.some((c) => active.includes(c)));

  function toggle(cat: string) {
    setActive((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive([])}
          className={`px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-colors ${
            active.length === 0
              ? 'bg-[#a85a14] text-white shadow-[0_8px_18px_-10px_rgba(168,90,20,0.8)]'
              : 'bg-accent-tag text-accent hover:bg-[#f5e2c4]'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            className={`px-4 py-1.5 rounded-full text-[13.5px] font-medium transition-colors ${
              active.includes(cat)
                ? 'bg-[#a85a14] text-white shadow-[0_8px_18px_-10px_rgba(168,90,20,0.8)]'
                : 'bg-accent-tag text-accent hover:bg-[#f5e2c4]'
            }`}
          >
            {formatCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-secondary text-sm py-12 text-center">
          No projects match the selected filters.
        </p>
      )}
    </>
  );
}
