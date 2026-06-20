'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { getAllCategories, formatCategoryLabel } from '@/lib/utils';
import { ProjectCard } from '@/components/ProjectCard';

type Props = {
  projects: Project[];
  totalCount: number;
};

export function HomepageWorkSection({ projects, totalCount }: Props) {
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
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Recent work</h2>
        <p className="text-secondary mb-8">A selection of case studies from the last few years.</p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
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

        {/* Horizontally scrollable row */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <p className="text-secondary text-sm py-8">No projects match the selected filters.</p>
          )}
        </div>

        {/* View all link */}
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-sm text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            View all {totalCount} case studies on the projects page →
          </Link>
        </div>
      </div>
    </section>
  );
}
