import type { Project } from '@/lib/types';

const CATEGORY_LABELS: Record<string, string> = {
  seo: 'SEO',
  gtm: 'GTM',
  outbound: 'Outbound',
  positioning: 'Positioning',
  'local-seo': 'Local SEO',
};

export function formatCategoryLabel(slug: string): string {
  return CATEGORY_LABELS[slug] ?? slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

export function getAllCategories(projects: Project[]): string[] {
  const cats = new Set<string>();
  projects.forEach((p) => p.categories.forEach((c) => cats.add(c)));
  return [...cats].sort();
}

export function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? null;
}

export function getLoomId(url: string): string | null {
  const match = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  return match?.[1] ?? null;
}
