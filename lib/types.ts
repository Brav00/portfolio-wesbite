export type ProjectStat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  engagementType: string;
  categories: string[];
  thumbnail: string;
  videoUrl: string;
  oneLineResult: string;
  stats: [ProjectStat, ProjectStat];
  problem: string;
  solution: string;
  result: string;
  screenshot: string;
  testimonial: {
    quote: string;
    attribution: string;
  };
  featured: boolean;
};
