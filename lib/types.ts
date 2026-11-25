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

/* ---------- GTM systems & playbooks (/playbooks) ---------- */

/** One box in a system diagram. `kind` changes its styling: a decision gate, a safe-abort path or an output. */
export type FlowNode = {
  label: string;
  detail?: string;
  kind?: 'decision' | 'fail' | 'output';
};

/** One column in a left-to-right flow. Several nodes in a column run in parallel. */
export type FlowColumn = {
  nodes: FlowNode[];
  /** Label on the arrow leading into this column, e.g. "Pass". */
  edge?: string;
};

/** A stage group in the master architecture diagram (Sources, Operator, Pipeline, Outputs). */
export type ArchitectureStage = {
  title: string;
  nodes: FlowNode[];
};

export type SpecRow = { label: string; detail: string };

export type Subsystem = {
  title: string;
  summary: string;
  flow: FlowColumn[];
  /** Branch that leaves the flow, drawn under it (e.g. a guardrail failure). */
  failBranch?: { from: string; label: string; node: FlowNode };
  specs: SpecRow[];
};

export type PlaybookEntry = {
  name: string;
  flow: string[];
  outcome: string;
};

export type GtmSystem = {
  slug: string;
  title: string;
  shortName: string;
  tagline: string;
  status: string;
  categories: string[];
  stack: string[];
  stats: ProjectStat[];
  highlights: SpecRow[];
  githubUrl?: string;
  why: string[];
  architecture: ArchitectureStage[];
  orchestrator: {
    title: string;
    points: SpecRow[];
    exitCodes: { code: string; meaning: string }[];
  };
  subsystems: Subsystem[];
  playbooks: PlaybookEntry[];
};
