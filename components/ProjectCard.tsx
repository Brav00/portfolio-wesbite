import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { formatCategoryLabel } from '@/lib/utils';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-card rounded-xl border border-black/[0.08] overflow-hidden hover:border-black/20 transition-colors flex-shrink-0 w-72 md:w-80"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-dark-block overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          unoptimized
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm group-hover:bg-white transition-colors">
            <svg
              className="w-5 h-5 text-primary ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-tag text-accent"
            >
              {formatCategoryLabel(cat)}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* One-line result */}
        <p className="text-xs text-secondary">{project.oneLineResult}</p>
      </div>
    </Link>
  );
}

/* Grid variant — same card but full-width in a CSS grid */
export function ProjectCardGrid({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-card rounded-xl border border-black/[0.08] overflow-hidden hover:border-black/20 transition-colors"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video bg-dark-block overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm group-hover:bg-white transition-colors">
            <svg
              className="w-5 h-5 text-primary ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-accent-tag text-accent"
            >
              {formatCategoryLabel(cat)}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-semibold text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-secondary">{project.oneLineResult}</p>
      </div>
    </Link>
  );
}
