"use client";

import { useRef, useEffect } from "react";

const terms = [
  {
    term: "Large Language Model (LLM)",
    paragraphs: [
      "The technology behind tools like Claude, ChatGPT, and Gemini. An LLM is trained on enormous amounts of text and learns to predict what comes next - which is why it can write, summarise, explain, and answer questions. They are not databases. They don't look things up. They generate responses based on patterns.",
    ],
    example:
      "When you ask Claude to summarise a management accounts pack, it's not retrieving a stored answer. It's generating one based on what you've given it and what it's learned.",
  },
  {
    term: "Prompt",
    paragraphs: [
      "What you type into an AI. A prompt can be a question, an instruction, or a description of what you want. The quality of the prompt affects the quality of the output - but it's not the only thing that matters.",
    ],
    example:
      '"Explain the revenue variance" is a prompt. So is "Here are the actuals and budget for March. Identify the top three variances and suggest a cause for each, based only on the data I\'ve provided."',
  },
  {
    term: "Prompt Engineering",
    paragraphs: [
      "Writing prompts deliberately to get better results. It sounds more technical than it is. At its core it's about being specific, giving context, and being clear about what you want and what you don't.",
    ],
    example:
      'Adding "do not make assumptions about figures I haven\'t provided" to your prompt is prompt engineering. It\'s a guardrail, not a magic formula.',
  },
  {
    term: "Context",
    paragraphs: [
      "The background information you give the AI before or alongside your question. Context is what turns a generic answer into a useful one. The more relevant detail you provide - about your industry, your data, your constraints, what you've already tried - the better the output.",
    ],
    example:
      'Telling Claude "this is an intercompany reconciliation between two subsidiaries on different ERP systems, and timing differences are common" before asking it to analyse a file is context. Without it, Claude has to guess.',
  },
  {
    term: "Context Engineering",
    paragraphs: [
      "Deliberately designing what context you give the AI - and when. It goes beyond writing one good prompt. It's about thinking through what the AI needs to know to do the job well: the rules, the format, the constraints, the examples.",
    ],
    example:
      "Building a Claude Project that already contains your chart of accounts, your reconciliation format, and your review checklist - so every time you start a month-end task, the AI already knows the rules without you re-explaining them.",
  },
  {
    term: "Context Window",
    paragraphs: [
      "The amount of information an AI can hold in its working memory at one time. Everything in a conversation - your prompts, the AI's responses, any documents you paste in - counts toward this limit and gets carried forward.",
      "Every time the AI generates a response, it re-reads the entire conversation from the beginning. Not just your last message - everything. The longer a conversation gets, the more the model has to process just to answer your next question.",
      "When a conversation gets very long, two things tend to go wrong: earlier instructions get forgotten, and hallucination risk increases. A crowded context window means the model is working with more noise.",
      "The fix: start a new conversation for each new task. Only paste in what the AI actually needs. Use Claude Projects for standing context - your rules, formats, and preferences - rather than re-pasting them each time.",
    ],
    example:
      "If you're doing month-end and you've been working through five different tasks in one Claude session - variance analysis, commentary, a reconciliation, formatting, then a board pack summary - by the last task the model is carrying all the previous work too. Starting a fresh conversation for each task keeps the model focused and the outputs cleaner.",
  },
  {
    term: "Hallucination",
    paragraphs: [
      "When an AI produces information that sounds confident but is wrong or made up. This is the most important thing to understand if you're using AI in finance. The AI doesn't know when it doesn't know something - it will fill the gap with something plausible.",
    ],
    example:
      'Ask Claude to calculate a ratio using figures you haven\'t provided, and it may invent numbers rather than say "I don\'t have that data." For anything where accuracy matters, verify the output.',
  },
  {
    term: "Probabilistic vs Deterministic",
    paragraphs: [
      "Deterministic means: same input, same output, every time. An Excel formula is deterministic. A SQL query is deterministic. AI is probabilistic - same input, potentially different output each time. That's not a flaw, it's how it works.",
      "The implication: if you need consistent, auditable outputs, use AI to build a deterministic tool rather than asking AI to run the task directly each time.",
    ],
    example:
      "Use Claude to write the M code for a Power Query reconciliation. The M code is deterministic - once written, it runs the same way every time. Claude's help building it was probabilistic. Once you have the code, you don't need Claude for that task anymore.",
  },
  {
    term: "Model",
    paragraphs: [
      "The underlying AI system you're using. Different companies make different models. They vary in speed, cost, capability, and the types of task they handle best.",
      "The main providers: Anthropic makes Claude (Haiku, Sonnet, Opus), strong at following detailed instructions and working with long documents. OpenAI makes ChatGPT and GPT models, widely used with strong general capability. Google makes Gemini, integrated into Google Workspace tools.",
      "Within each provider there are usually tiers: a fast, cheap version for simple tasks, a mid-range for everyday use, and a high-capability version for harder problems.",
    ],
    example:
      "Claude Haiku is good for quick questions and formatting tasks. Claude Opus is better for reviewing a complex multi-entity structure and explaining where the risks are. Using Opus for simple tasks is like using a calculator with a PhD to add up a shopping list.",
  },
  {
    term: "Reasoning Models",
    paragraphs: [
      "A specific type of AI model that works through a problem step by step before giving an answer - similar to how you might draft working before presenting a conclusion. Standard models respond quickly; reasoning models take longer because they're doing more internal thinking first.",
      "Examples: OpenAI's o1 and o3 models, Google's Gemini 2.5 Pro, Claude with extended thinking enabled.",
      "Use a reasoning model for multi-step problems with dependencies, or when getting the logic right matters more than speed. Don't bother for summarising a document, drafting a variance explanation, or reformatting a table.",
    ],
    example:
      "Ask a standard model to review a three-entity intercompany elimination and it may miss a step. Ask a reasoning model the same question and it will work through the entity relationships, the timing differences, and the elimination logic before answering. The trade-off: it takes longer and costs more. For a month-end close task where an error means a restatement, that's probably worth it.",
  },
];

export default function GlossaryPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
    }
  }, []);

  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[15vw]">
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col mb-[5vh]"
        style={{
          opacity: 0,
          filter: "blur(1px)",
          transition: "opacity 0.8s ease-out, filter 0.8s ease-out",
        }}
      >
        <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-wide">
          GLOSSARY
        </h1>
        <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mt-2">
          Plain-English definitions of AI terms for finance professionals.
        </p>
      </div>

      {/* Terms */}
      <div className="flex flex-col">
        {terms.map((item, i) => (
          <div
            key={i}
            className="py-[clamp(1.5rem,4vh,3rem)] border-b border-border"
            style={{
              opacity: 0,
              filter: "blur(1px)",
              transform: "translateY(10px)",
              transition: "opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out",
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.filter = "blur(0px)";
                        el.style.transform = "translateY(0)";
                      }, i * 60);
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <h2 className="text-[clamp(0.9rem,1.3vw,1.4rem)] font-light tracking-wide mb-[1.5vh]">
              {item.term}
            </h2>
            <div className="flex flex-col gap-3 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.05rem] font-light leading-[clamp(1.3rem,3vh,1.6rem)] text-text-primary max-w-[70ch]">
              {item.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              <p className="text-text-secondary italic mt-1">
                Finance example: {item.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Staleness note */}
      <p className="text-text-secondary text-[clamp(0.6rem,0.75vw,0.85rem)] font-light mt-[4vh] pb-[clamp(3rem,8vh,6rem)]">
        Model names in this glossary will date. Last reviewed May 2026.
      </p>
    </div>
  );
}
