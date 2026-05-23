---
slug: youtube-analytics
title: YouTube Analytics
type: AI Tool / Data Analysis
description: |
  An AI-powered advisor that connects to your real YouTube channel data and turns it into an actionable content strategy.
situation: |
  YouTube creators have rich analytics data in YouTube Studio but no way to turn it into strategic decisions. The platform shows numbers -views, retention, CTR -but not what they mean for your specific channel or what you should do next.
problem: |
  The gap between 'here are your numbers' and 'here is what you should do next' requires analysis that YouTube Studio doesn't provide. Generic YouTube advice doesn't account for your specific audience, content mix, or posting patterns.
approach: |
  Built a Python CLI that connects to real channel data via Google APIs, caches it in SQLite to conserve API quota, then optionally runs Gemini-powered video content analysis across 12 quality dimensions. Everything feeds into an interactive Claude session that acts as a dedicated content advisor with full knowledge of the channel.
whatIBuilt: |
  A terminal tool with four core capabilities: an interactive chat interface where Claude answers strategic questions using live channel data; automated snapshot reports capturing performance at a point in time; an SEO impact tracker that measures before-and-after results; and Gemini-powered content quality scoring covering hook strength, thumbnail effectiveness, speech pacing, SEO, and more.
stack:
  - Python
  - Claude API
  - YouTube Data API v3
  - YouTube Analytics API v2
  - Google OAuth 2.0
  - Gemini 2.5 Flash
  - SQLite
result: |
  After implementing SEO recommendations from the advisor: views per video increased by 549%, subscriber efficiency up 16.8x. In the following seven days: views up 154.7%, watch time up 535%.
whatILearned: null
showOnSite: true
featured: true
order: 20
homeCardKicker: AI TOOL · DATA ANALYSIS
homeCardTags:
  - Python
  - Claude API
  - YouTube API
homeCardStats:
  - value: "+549%"
    label: VIEWS PER VIDEO
  - value: "+535%"
    label: WATCH TIME
---

<!-- AUTO-SYNCED FROM content-creation/1 - Projects/b - Project Summaries/ -->
<!-- DO NOT EDIT HERE. Edit the source file in content-creation, then run `npm run sync-content`. -->

# YouTube Analytics Advisor

## Business Context

Personal project. Built to turn YouTube Studio's raw analytics data into actionable content strategy decisions for a real channel.

## What It Does

A terminal tool that connects to a YouTube channel's live data via Google APIs, caches results in SQLite to conserve API quota, and provides:

- Interactive chat interface where Claude answers strategic questions using live channel data
- Automated snapshot reports capturing performance at a point in time
- SEO impact tracker measuring before-and-after results from optimisation changes
- Gemini-powered content quality scoring across 12 quality dimensions (hook strength, thumbnail effectiveness, speech pacing, SEO, etc.)

## Result

After implementing SEO recommendations from the advisor:
- Views per video: +549%
- Subscriber efficiency: 16.8x
- Following 7 days: views +154.7%, watch time +535%
