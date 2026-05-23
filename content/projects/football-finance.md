---
slug: football-finance
title: Football Finance
type: AI Workflow / Data Analysis
description: |
  Automated extraction and analysis of UK football club financial statements -turning Companies House filings into structured reports.
situation: |
  UK football clubs file annual accounts with Companies House, but extracting and interpreting financial data across multiple clubs is slow, manual work. It requires accounting knowledge, patience with inconsistent PDF formats, and hours of time that most analysts don't have.
problem: |
  A single club's accounts could take hours to read and analyse manually. There was no way to compare financials across clubs at scale, or to extract structured data from unstructured PDF filings without significant effort.
approach: |
  Combined Claude Code, the Companies House API, and Perplexity to build an automated pipeline. Claude handles interpretation and plain-English synthesis; Companies House provides the raw filing data; Perplexity fills in context where filings are ambiguous or incomplete.
whatIBuilt: |
  A pipeline that ingests filed accounts and outputs structured Excel and PDF reports -covering revenue, wages, profitability, and debt across multiple clubs in a single run. The output is designed to be readable by a finance professional without any further processing.
stack:
  - Claude Code
  - Companies House API
  - Perplexity
  - Excel
  - PDF
result: null
whatILearned: null
showOnSite: true
featured: true
order: 10
homeCardKicker: AI WORKFLOW · FINANCE
homeCardTags:
  - Claude Code
  - Companies House API
  - Excel
homeCardDescription: |
  Automated pipeline turning Companies House filings into structured financial reports across multiple UK football clubs.
---

<!-- AUTO-SYNCED FROM content-creation/1 - Projects/b - Project Summaries/ -->
<!-- DO NOT EDIT HERE. Edit the source file in content-creation, then run `npm run sync-content`. -->

# Football Club Financial Intelligence System

## Business Context
- **Client/situation**: Personal project / Portfolio piece
- **Business problem**: Football club financial accounts are filed 6-9 months after year-end. By the time you read them, they're outdated. Finance professionals need both historical accuracy (audited accounts) and current context (what happened since filing). Traditional approach requires manually reading PDFs + manually researching updates = hours of work per club.

## AI Solution - Two Complementary Tools

### System Overview
AI-powered financial analysis platform that solves the "regulatory filing lag" problem by combining historical accuracy with current market intelligence.

### Tool 1: Financial Data Extractor

**What it does**: Automatically extracts 18 financial metrics from image-based PDF accounts

**Technologies used**:
- Companies House API → Download regulatory filing PDFs
- Claude API (Haiku model) → Visual document analysis for image-based PDFs
- Python → Data extraction and processing
- pandas/openpyxl → Excel output with formatted metrics

**Workflow**:
```
Companies House API → Download PDFs →
Claude API (visual analysis) → Automated validation → Excel output
```

**Output**: Football_Club_Financials_2024.xlsx (5 clubs × 18 metrics)
- Revenue breakdown (broadcasting, commercial, matchday)
- Profitability (operating profit, pre-tax profit)
- Balance sheet (assets, liabilities, net debt)
- Player economics (wages, transfer fees, amortization)

**Key innovation**: Self-validating using accounting equations (catches AI errors automatically)

### Tool 2: Financial Controller Summary Report

**What it does**: Combines audited historical data with live market intelligence in a 3-tier confidence report

**Technologies used**:
- Tool 1 audited data (historical baseline)
- Perplexity API → Research current market intelligence
- Python → Report generation and confidence scoring
- Professional PDF output → Stakeholder-ready reports

**Workflow**:
```
Tool 1 audited data + Perplexity API research →
3-tier confidence report → Professional PDF
```

**Output**: 8-page branded PDF with 3 sections:
1. **Audited Financials** (HIGH confidence - from Tool 1)
2. **Official Updates** (MEDIUM confidence - club announcements since filing)
3. **Market Intelligence** (RESEARCH-based - transfers, analyst commentary, commercial deals)

**Key innovation**: 3-tier confidence structure + verification against audited baseline (distinguishes fact from analysis)

### Complete System Workflow

```
Annual Accounts (Filed 31 May 2024)
    ↓
Tool 1: Extract historical metrics → Excel
    ↓
Tool 2: Add current intelligence → Controller Summary PDF
    ↓
Finance professional has:
  - Audited historical data (FY2024)
  - Current market context (Jun 2024 - Feb 2026)
  - Ready for decision-making
```

## Technical Implementation

### Tool 1: Financial Data Extractor

**Key technical details**:
- Built Python scripts: extract tool, validation system, Excel generator, error detection
- Integrated Claude API with visual document analysis capability
- Switched from Sonnet to Haiku model for better throughput (50k vs 30k tokens/minute)
- Interactive extraction (one club at a time) rather than batch processing
- Automated validation using accounting principles (Assets - Liabilities = Net Assets, revenue component sums)

**Challenges solved**:
- PDFs were scanned images (no text layer) → pivoted to visual AI instead of text extraction
- Rate limits with batch processing → switched to interactive approach with delays
- AI extraction errors (£7M Liverpool error) → built automated validation to catch mistakes
- Sonnet too slow/expensive → switched to Haiku (70% cost reduction, faster)

### Tool 2: Financial Controller Summary Report

**Key technical details**:
- Dual AI integration: Claude (extraction) + Perplexity (research)
- Confidence scoring system (HIGH/MEDIUM/RESEARCH-based tiers)
- Source citation for verification
- Professional PDF formatting for stakeholder presentation
- Verification against audited baseline (catches research errors/hallucinations)

**Challenges solved**:
- Regulatory filing lag problem (6-9 months outdated) → add current intelligence layer
- Trust issue with AI research → 3-tier confidence system + source citations
- Mixing fact and analysis → clear separation with confidence levels
- Stakeholder presentation → professional PDF output

## Skills Demonstrated

### AI skills
- **Multi-AI integration**: Claude API (extraction) + Perplexity API (research)
- Visual document analysis implementation
- Model selection optimization (Haiku vs Sonnet)
- Rate limit handling and throughput optimization
- Confidence scoring and verification systems
- Critical thinking: Caught AI hallucination, verified against source data

### Finance/domain skills
- Financial statement analysis (P&L, balance sheet)
- UK GAAP/FRS 102 understanding
- Football-specific accounting (player registrations, amortization)
- Revenue recognition and balance sheet equation validation
- Regulatory filing knowledge (Companies House)
- Market intelligence integration

### Technical skills
- Python development (API integration, data processing)
- Data validation and error detection systems
- Excel automation with professional formatting
- PDF generation and report formatting
- Problem-solving through iteration (5+ failed approaches before success)
- Production-ready error handling

## Outcome & Impact

### Results
- Successfully extracted 18 financial metrics for 5 Premier League clubs
- Total of 90 data points across £3.4B combined revenue
- Processed all clubs in ~6 minutes with full validation
- Generated finance-professional-grade PDF reports with 3-tier confidence structure

### Business value
- **Time saved**: Automates what takes analysts hours (Swiss Ramble expert reads these PDFs manually)
- **Cost**: ~$0.05 per club for extraction + research (includes both AI APIs)
- **Accuracy**: Automated validation caught errors that manual review might miss
- **Completeness**: Solves the lag problem - historical truth + current context in one system
- **Scalability**: Can process entire league (20 clubs) in ~20 minutes vs 40-60 hours manually
- **Stakeholder-ready**: Professional PDF output, no additional formatting needed

### Key Metrics (Sample Dataset)
- Revenue leaders: Man City £715M, Liverpool £614M, Man United £613M
- 60% of clubs loss-making (3 of 5 analyzed)
- £2.8B total player assets across 5 clubs
- 60.8% average wage-to-revenue ratio (within industry benchmark)

## Key Learnings

### What worked
- **Dual AI approach**: Claude for extraction (accuracy) + Perplexity for research (current intelligence)
- Visual AI analysis for image-based PDFs
- Haiku model for high-throughput, cost-effective processing
- Automated validation using accounting principles (domain expertise enables automation)
- Interactive extraction with immediate validation (catch errors early)
- 3-tier confidence system (clear separation of fact vs analysis)
- Self-correcting workflow (validation fail → deep-dive → re-extract → validate)

### What didn't work
- Text extraction (pdfplumber) - PDFs had no text layer
- Pattern matching with regex - no extractable text to match
- Batch processing all clubs - hit API rate limits
- Sonnet model - too slow and expensive for this use case
- Trusting AI output blindly - £7M Liverpool error proved validation essential

### Would do differently
- Check document format first before choosing extraction method
- Start with cheaper/faster models, only upgrade if needed
- Build validation from the start, not as afterthought
- Always validate AI-extracted financial data (especially for regulatory filings)

## Portfolio Value

**What this demonstrates**:
- **Dual AI integration**: Not just one tool, but orchestrating multiple AI systems (Claude + Perplexity)
- **Finance domain expertise**: Validation, ratios, football-specific metrics, regulatory knowledge
- **Critical thinking**: Caught AI hallucination, verified against source data, built confidence scoring
- **Production quality**: Error handling, professional outputs, complete documentation
- **Problem-solving**: Addresses real business problem (regulatory lag) with practical two-tier solution

**Perfect AI Finance portfolio piece**: Shows ability to build practical tools that combine multiple AI APIs with domain expertise and deliver stakeholder-ready outputs.

## Content Angles

### LinkedIn post ideas from this project:

1. **"How I Built a System That Solves the 6-Month Regulatory Lag Problem"** - System overview
   - Addresses real business problem (outdated filings)
   - Two-tool complementary approach
   - Historical accuracy + current intelligence

2. **"I Analyzed £3.4B in Football Revenue Using Two AI Systems - Here's Why You Need Both"** - Dual AI integration
   - Claude for accuracy (extraction)
   - Perplexity for currency (research)
   - Why one AI isn't enough

3. **"The Claude Code Workflow Shift: From Copy/Paste to End-to-End Pipelines"** - Technical workflow angle
   - No more copy/paste between tools
   - Companies House → Claude → Perplexity → PDF/Excel
   - Full context, integrated pipeline

4. **"Finance-Grade AI Reporting: The 3-Tier Confidence System"** - Trust and verification angle
   - HIGH confidence (audited data from Tool 1)
   - MEDIUM confidence (official announcements)
   - RESEARCH-based (market intelligence)
   - Source citations for verification

5. **"How I Cut Football Finance Analysis from Hours to Minutes (With Validation)"** - Efficiency/ROI angle
   - Automates expert manual work
   - $0.05 per club cost
   - Production-ready outputs

6. **"60% of Premier League Clubs Are Loss-Making Despite £3.4B Revenue - Here's the Data"** - Industry insight angle
   - Data-driven insights
   - Industry benchmark analysis
   - Real metrics from the system

### Key takeaways to share:
- Regulatory filing lag is a real problem - system solves it with dual approach
- Multiple AI systems working together > single AI tool
- Domain expertise (accounting) enables automated validation
- Clear confidence levels build trust in AI outputs
- End-to-end pipelines eliminate copy/paste friction
- Finance-professional-grade outputs require verification, not just extraction

---
*Source notes: 1 - Projects/dm-notes/football-finance-analyser.md*
*Timeline: 2 days Tool 1 development + Tool 2 integration*
*Last updated: February 9, 2026*
