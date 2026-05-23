export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  situation: string;
  problem: string;
  approach: string;
  whatIBuilt: string;
  stack: string[];
  result: string | null;
  whatILearned: string | null;
  // Site-control fields (not rendered on case study page)
  featured?: boolean;
  order?: number;
  homeCardKicker?: string;
  homeCardTags?: string[];
  homeCardStats?: ProjectStat[];
  homeCardDescription?: string;
}
