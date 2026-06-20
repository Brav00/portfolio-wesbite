'use client';

import { useState } from 'react';
import type { Project } from '@/lib/types';
import { getAllCategories, formatCategoryLabel } from '@/lib/utils';
import { ProjectCardGrid } from '@/components/ProjectCard';

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
          className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            active.length === 0
              ? 'bg-primary text-white'
              : 'bg-accent-tag text-accent hover:bg-accent hover:text-white'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggle(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              active.includes(cat)
                ? 'bg-primary text-white'
                : 'bg-accent-tag text-accent hover:bg-accent hover:text-white'
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
            <ProjectCardGrid key={project.slug} project={project} />
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
