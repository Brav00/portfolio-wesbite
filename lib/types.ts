export type ProjectStat = {
  value: string;
  label: string;
};

export type WorkflowStep = {
  title: string;
  description: string;
  isResult?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  engagementType?: string;
  categories: string[];
  thumbnail: string;
  videoUrl?: string;
  oneLineResult: string;
  stats: ProjectStat[];
  problem: string;
  solution: string;
  result: string;
  screenshots: string[];
  tools?: string[];
  workflow?: WorkflowStep[];
  workflowIntro?: string;
  testimonial: { quote: string; attribution: string } | null;
  featured: boolean;
};
