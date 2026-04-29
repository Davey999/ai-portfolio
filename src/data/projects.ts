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
}

export const projects: Project[] = [
  {
    slug: "football-finance",
    title: "Football Finance",
    type: "AI Workflow / Data Analysis",
    description:
      "Automated extraction and analysis of UK football club financial statements -turning Companies House filings into structured reports.",
    situation:
      "UK football clubs file annual accounts with Companies House, but extracting and interpreting financial data across multiple clubs is slow, manual work. It requires accounting knowledge, patience with inconsistent PDF formats, and hours of time that most analysts don't have.",
    problem:
      "A single club's accounts could take hours to read and analyse manually. There was no way to compare financials across clubs at scale, or to extract structured data from unstructured PDF filings without significant effort.",
    approach:
      "Combined Claude Code, the Companies House API, and Perplexity to build an automated pipeline. Claude handles interpretation and plain-English synthesis; Companies House provides the raw filing data; Perplexity fills in context where filings are ambiguous or incomplete.",
    whatIBuilt:
      "A pipeline that ingests filed accounts and outputs structured Excel and PDF reports -covering revenue, wages, profitability, and debt across multiple clubs in a single run. The output is designed to be readable by a finance professional without any further processing.",
    stack: ["Claude Code", "Companies House API", "Perplexity", "Excel", "PDF"],
    result: null,
    whatILearned: null,
  },
  {
    slug: "marketing-expert",
    title: "Marketing Expert",
    type: "AI Workflow / Content Strategy",
    description:
      "A Claude Code-powered marketing system that gives early-stage B2B SaaS companies a full marketing function -without hiring a team.",
    situation:
      "Early-stage B2B SaaS companies need consistent, strategic marketing but most can't afford a CMO or agency. The work doesn't disappear -it just doesn't get done, or gets done inconsistently by founders who aren't marketers.",
    problem:
      "Marketing requires strategic thinking across multiple functions simultaneously -content creation, competitor research, prospecting, and performance tracking. None of it scales without people, and none of it is easy to delegate without losing quality.",
    approach:
      "Built a two-layer system: a reusable methodology layer containing frameworks, templates, and scoring models, and a client-specific execution layer with isolated folders per engagement. Seven slash commands make the full marketing function operable without requiring marketing expertise to run.",
    whatIBuilt:
      "A Claude Code system with 7 slash commands covering the complete marketing function -LinkedIn content generation, competitive intelligence, prospect identification and scoring, and performance review. Currently deployed for a Melbourne-based B2B SaaS company. Each new client gets an isolated folder; the framework layer improves with every engagement.",
    stack: ["Claude Code", "Markdown", "Python", "WebFetch"],
    result: null,
    whatILearned: null,
  },
  {
    slug: "website-builder",
    title: "Website Builder",
    type: "AI Methodology / Web Development",
    description:
      "A structured 8-phase methodology for building production-quality websites with AI -used to build this site.",
    situation:
      "Building a website from a visual reference is a repeatable process. But it's typically treated as a bespoke creative task each time, which means every build starts from scratch, quality is inconsistent, and important steps like QA and design systems are skipped.",
    problem:
      "No structured methodology existed for using AI to build production-quality websites systematically. Most AI-assisted builds lack a coherent design system, skip accessibility checks, and produce technically fragile output that's hard to maintain.",
    approach:
      "Developed an 8-phase workflow -reference, discovery, pre-flight, build, design system, QA, content, ship -with defined outputs and exit criteria at each stage. Encoded the entire process as a reusable Claude Code skill so any future build starts from a proven foundation.",
    whatIBuilt:
      "The build-website skill. This portfolio site is the proof of concept -built entirely using the methodology, including a full CSS design system, WCAG AA contrast compliance across both dark and light modes, mobile-responsive navigation, and multi-page routing.",
    stack: ["Claude Code", "Next.js", "TypeScript", "Tailwind CSS", "Playwright"],
    result: null,
    whatILearned: null,
  },
  {
    slug: "youtube-analytics",
    title: "YouTube Analytics",
    type: "AI Tool / Data Analysis",
    description:
      "An AI-powered advisor that connects to your real YouTube channel data and turns it into an actionable content strategy.",
    situation:
      "YouTube creators have rich analytics data in YouTube Studio but no way to turn it into strategic decisions. The platform shows numbers -views, retention, CTR -but not what they mean for your specific channel or what you should do next.",
    problem:
      "The gap between 'here are your numbers' and 'here is what you should do next' requires analysis that YouTube Studio doesn't provide. Generic YouTube advice doesn't account for your specific audience, content mix, or posting patterns.",
    approach:
      "Built a Python CLI that connects to real channel data via Google APIs, caches it in SQLite to conserve API quota, then optionally runs Gemini-powered video content analysis across 12 quality dimensions. Everything feeds into an interactive Claude session that acts as a dedicated content advisor with full knowledge of the channel.",
    whatIBuilt:
      "A terminal tool with four core capabilities: an interactive chat interface where Claude answers strategic questions using live channel data; automated snapshot reports capturing performance at a point in time; an SEO impact tracker that measures before-and-after results; and Gemini-powered content quality scoring covering hook strength, thumbnail effectiveness, speech pacing, SEO, and more.",
    stack: [
      "Python",
      "Claude API",
      "YouTube Data API v3",
      "YouTube Analytics API v2",
      "Google OAuth 2.0",
      "Gemini 2.5 Flash",
      "SQLite",
    ],
    result:
      "After implementing SEO recommendations from the advisor: views per video increased by 549%, subscriber efficiency up 16.8x. In the following seven days: views up 154.7%, watch time up 535%.",
    whatILearned: null,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
