export const profile = {
  name: "Somay Kousis",
  email: "somaykousis@gmail.com",
  github: "https://github.com/Somay-kousis",
  linkedin: "https://www.linkedin.com/in/somay-kousis-630ab1313/",
  leetcode: "https://leetcode.com/u/oeuvre/",
  resume: "https://drive.google.com/file/d/12tOU2lDhsohhyAulXJyM9EX8_oPnXQyz/view?usp=share_link",
  image: "/profile.jpeg",
};

export const proofPoints = [
  "Built the orchestrator routing tasks across a 3,000+ subagent registry through intent classification, capability scoring, context assembly, and dispatch, cutting misrouted tasks ~40% and dispatch latency to ~120ms.",
  "Kept 25 of 25 concurrent writes on a contended counter, with 58 SERIALIZABLE conflicts caught and auto-retried, where a flat-file analog kept 1 and silently lost 24. Ships as a runnable benchmark, not a screenshot.",
  "Cut CI log payload 76% to 93% before any model call, measured against Podman's own logformatter fixtures and reproducible from a fresh clone with no token and no API budget.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  detail: string[];
  stack: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    company: "RYSE Technologies",
    role: "AI Systems Engineer Intern",
    period: "Jul 2026 – Present",
    location: "Remote / Part-time",
    summary:
      "Building the orchestration layer that routes work across a large registry of specialized subagents.",
    detail: [
      "Built the main orchestrator agent, routing tasks across a registry of 3,000+ specialized subagents through a multi-layer pipeline: intent classification, capability scoring, context assembly, then dispatch.",
      "Cut misrouted tasks by roughly 40% and brought dispatch latency to around 120ms.",
      "Built production subagents using UV for isolated dependency and environment management, each with a persistent memory layer for long-running task continuity.",
    ],
    stack: ["Python", "LangGraph", "UV", "PostgreSQL", "Vector memory"],
  },
  {
    company: "Something",
    role: "Co-Founder & CEO",
    period: "Oct 2025 – Present",
    location: "Delhi, IN",
    summary:
      "Co-founded a founder and investor matching platform built on a verified network rather than pitch polish.",
    detail: [
      "Own frontend, AI architecture, and go-to-market across a two-sided product serving founders and investors.",
      "Grew a 573-person waitlist inside the first month with zero paid distribution.",
      "Designed cost-aware multi-provider AI routing across Groq, Gemini, and Claude to keep inference economics viable pre-revenue.",
    ],
    stack: ["Next.js 15", "React 19", "Node / Express", "MongoDB", "LangGraph"],
    href: "https://github.com/Somay-kousis/Something",
  },
  {
    company: "SteelCareer",
    role: "Software Developer, Client Project",
    period: "Jan 2026 – Mar 2026",
    location: "Remote",
    summary:
      "Delivered a multi-role recruitment product end to end for a local client.",
    detail: [
      "Shipped seeker, provider, and admin roles against one shared data model.",
      "Built job workflows, approval chains, interview scheduling, authentication, and analytics.",
      "Took the project from requirements to deployed product as the sole developer.",
    ],
    stack: ["Next.js", "Supabase", "Vercel", "TypeScript"],
  },
];

export const education = {
  institution: "ABV-IIITM Gwalior",
  degree: "B.Tech, Computer Science and Engineering",
  period: "Aug 2024 – 2028",
  location: "Gwalior, IN",
  coursework: [
    "Data Structures & Algorithms",
    "OOPS",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    detail: "6th place nationally, leading a team of 6 at a government innovation challenge.",
  },
  {
    title: "Hacksagon 2024",
    detail: "2nd position, Hardware Track, inter-college challenge.",
  },
  {
    title: "Published Writer",
    detail: "CAMA Magazine (Canada). Poetry recitations performed to audiences of 350+.",
  },
];

export const certifications = [
  { title: "MCP: Build Rich-Context AI Apps", issuer: "Anthropic" },
  { title: "AI Agents for Image and Video Generation", issuer: "Google" },
];

export type Project = {
  slug: string;
  title: string;
  label: string;
  year: string;
  status: string;
  problem: string;
  approach: string;
  modelOrSystem: string;
  result: string;
  stack: string[];
  technicalHighlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  heroImage?: string;
  heroImageAspect?: string;
};

export const projects: Project[] = [
  {
    slug: "paperplanes",
    title: "PaperPlanes",
    label: "Agentic Memory / Distributed Systems",
    year: "2026",
    status: "Hackathon backend",
    problem:
      "Research assistants built as a vector store plus a chatbot cannot tell a superseded fact from a current one, and lose writes the moment more than one update lands at once.",
    approach:
      "Built a research companion on a CockroachDB memory substrate with bi-temporal fact versioning, so every fact carries both when it was true and when it was recorded. Replaced blind upserts with an explicit ADD, UPDATE, INVALIDATE, or NOOP consolidation write path.",
    modelOrSystem:
      "LangGraph and FastAPI over CockroachDB used as a real transactional memory substrate: C-SPANN vector indexes, recursive-CTE graph traversal, LangGraph checkpoints, and a managed MCP server letting the agent introspect its own memory over read-only SQL. Amazon Bedrock (Nova Pro and Lite, Titan Embeddings) handles generation and embeddings.",
    result:
      "Every claim ships a reproduction command. 25 concurrent writers on one counter: CockroachDB kept 25 of 25 with 58 SERIALIZABLE conflicts caught and auto-retried to success, where a flat-file analog kept 1 and silently lost 24. Retrieval stays index-served at ~10,000 notes, EXPLAIN ANALYZE showing a ~15ms vector search rather than a full scan. After a live database restart mid-conversation, the next turn returns 200 where it previously returned 500.",
    stack: ["LangGraph", "CockroachDB", "AWS Bedrock", "MCP", "FastAPI", "React 19", "AWS S3 / EC2", "Python"],
    technicalHighlights: [
      "Bi-temporal fact versioning with contradiction detection between papers, so a superseded claim is closed with valid_to and stays auditable instead of being overwritten.",
      "Mem0-style consolidation write path deciding ADD, UPDATE, INVALIDATE, or NOOP per incoming fact, each branch covered by its own live integration test.",
      "Every write path wrapped in a retry that backs off with full jitter on SQLSTATE 40001 only, which is precisely why 25 of 25 writers survive.",
      "Tested against a real cluster rather than mocks, including an explicit test asserting the decision model is real Nova and not stubbed.",
    ],
    repoUrl: "https://github.com/Somay-kousis/PaperPlanes",
    heroImage: "/images/projects/paperplanes-hero.png",
    heroImageAspect: "1024 / 496",
  },
  {
    slug: "podman-flake-agent",
    title: "Podman Flake Agent",
    label: "Agentic CI Analysis / Open Source",
    year: "2026",
    status: "Open-source prototype",
    problem:
      "Podman's May 2026 migration off Cirrus CI orphaned logformatter, the 38KB Perl script that classified every subtest as pass, fail, skip, or flake. Triage fell back to a human reading a bar graph, and the project does not re-run failing tests, so the obvious ground-truth signal (failed then passed on retry) is not handed to you.",
    approach:
      "Built a prototype for the LFX Mentorship on agentic CI flake categorization, designed to sit downstream of the open PR restoring logformatter rather than compete with it. Mined three proxy signals for ground truth, weighted by strength: rerun disagreement on an identical commit SHA, the same test failing across unrelated commits, and post-merge failures on main.",
    modelOrSystem:
      "Standard-library Python with the model SDK imported lazily, treating logformatter's HTML as a stream of annotated lines rather than a DOM tree, because the failure summary and its diagnostic detail never share a subtree. Ships an evaluation harness that scores verdicts against labelled real failures.",
    result:
      "Cut log payload 76% to 93% across Podman's own logformatter fixtures before any inference runs, which is what makes 30+ jobs per PR affordable to analyse. Abstention is a first-class verdict, and the harness explicitly counts the dangerous confusion: real bugs waved through as re-runnable flakes.",
    stack: ["Python", "LLM Evals", "GitHub Actions API", "Bi-temporal Store", "Zero Dependencies"],
    technicalHighlights: [
      "Ground truth mined from three weighted proxy signals, because the project sets GINKGO_FLAKE_ATTEMPTS to 0 and never auto-reruns.",
      "Line-oriented parsing yielding per-test granularity, which is what makes deduplication against existing flake issues possible at all.",
      "Non-destructive classification history via ADD, UPDATE, INVALIDATE, or NOOP, so a flake that was diagnosed, fixed, then regressed stays auditable.",
      "ETag-revalidated caching where a 304 consumes no rate-limit quota, and a committed dossier corpus so the agent can be iterated with no token and no API budget.",
    ],
    repoUrl: "https://github.com/Somay-kousis/podman-flake-agent",
    heroImage: "/images/projects/podman-hero.png",
    heroImageAspect: "1024 / 585",
  },
  {
    slug: "rabbithole",
    title: "RabbitHole",
    label: "Agentic AI / Multi-Agent Legal Deliberation",
    year: "2026",
    status: "LangGraph system",
    problem:
      "Contested legal questions resist single consensus answers, and multi-agent systems steered by prompt instructions alone drift. Asked for 2 perspectives, the graph generated 6 to 8, a 3 to 4x overrun that exhausted Groq's token-per-minute ceiling before the debate resolved.",
    approach:
      "Built a LangGraph courtroom over a real legal corpus, where a moderator node acts as orchestra director and schedules exactly the number of perspective nodes requested. Replaced prompt-based constraints with a strict state schema tracking perspective count, jury type, and case category as enforced state rather than a request.",
    modelOrSystem:
      "Hierarchical LangGraph orchestration over hybrid retrieval (Pinecone dense vectors plus a BM25 sparse encoder), Jina cross-relevance reranking, a CRAG fallback to Jina Web Search when the grader rejects local chunks, and dual-tier model routing that sends only core synthesis to Llama-3.3-70B.",
    result:
      "Cut mean time to verdict from 19.8s to 9.8s, roughly 51%, and eliminated the perspective overrun entirely. Ambiguous retrieval runs the local and web paths in parallel instead of failing.",
    stack: ["LangGraph", "Pinecone + BM25", "Jina Rerank", "CRAG / Self-RAG", "Groq", "Llama-3.3-70B", "Python", "FastAPI"],
    technicalHighlights: [
      "Strict state schema replacing prompt-based perspective constraints, which is what actually stopped the 3 to 4x token overrun.",
      "Hybrid retrieval pairing dense embeddings for semantic match with BM25 sparse terms for exact legal section and case citations.",
      "Three-way CRAG routing: good chunks synthesize locally, bad chunks fall back to web search, ambiguous chunks run both paths in parallel.",
      "Dual-tier routing keeping the 70B model on core synthesis only, designed against Groq's 30 req/min and 6,000 token/min free-tier limits.",
    ],
    repoUrl: "https://github.com/Somay-kousis/RabbitHole",
    heroImage: "/images/projects/rabbithole.jpeg",
    heroImageAspect: "1600 / 918",
  },
  {
    slug: "something",
    title: "Something",
    label: "Founder-Investor Platform / Co-Founded",
    year: "2026",
    status: "Co-founded platform",
    problem:
      "Team formation and capital discovery are the same failure wearing two costumes. Existing platforms either gate on post-traction signals a pre-seed founder cannot produce, or apply no verification at all and drown both sides in noise.",
    approach:
      "Co-founded a platform that meets founders and investors at whatever stage they are already at, built on a verified-network moat: proof-of-work founders, verified investors, and crowd-validated problem signal, with adversarial AI review acting as a trust filter rather than the product.",
    modelOrSystem:
      "Next.js 15, React 19, and Radix UI frontend over a Node.js and Express backend with MongoDB, using LangGraph orchestration and cost-aware multi-provider AI routing across Groq, Gemini, and Claude.",
    result:
      "573-person waitlist inside the first month with zero paid distribution. I own frontend, AI architecture, and go-to-market as co-founder and CEO.",
    stack: ["Next.js 15", "React 19", "Express", "MongoDB", "LangGraph", "Tailwind CSS", "Framer Motion"],
    technicalHighlights: [
      "Verification gated on proof that exists before revenue (prototype, pilot, patent, press) rather than on Stripe-verified revenue or accredited-investor status.",
      "Private review track where AI reviewers argue for and against an idea before anything becomes public.",
      "Cost-aware routing across three model providers, chosen per request against latency and price rather than pinned to one vendor.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Something",
    heroImage: "/images/projects/something-hero.png",
    heroImageAspect: "1760 / 951",
  },
  {
    slug: "coop-purchase-coordinator",
    title: "Co-op Purchase Coordinator",
    label: "Multi-Agent Economics / Mechanism Design",
    year: "2026",
    status: "Deployed service",
    problem:
      "When autonomous agents buy from shared sellers, they collide: two agents bid against each other for the same product, agents waste rounds bidding under a seller's hidden floor, and agents buying different products from one seller lose the wholesale discount they jointly earned.",
    approach:
      "Built a REST coordination service that agents call before every purchase attempt, resolving each collision with the mechanism that actually fits it rather than one generic rule: second-price auctions for direct conflicts, coalition discounts for bundling, and binary search for price discovery.",
    modelOrSystem:
      "FastAPI service with a Vickrey auction paying max(second price + 1, seller floor), Shapley-inspired coalition discounts scaling with buyer count, and an explore-exploit strategy that probes the midpoint below 0.5 confidence and bids the floor above it.",
    result:
      "Converges on a seller's reservation price in about 7 rounds via binary search. A budget guard blocks bids that cannot clear a known floor and routes the buyer to the cheapest alternative seller instead. Covered by 46 tests including concurrency, pool TTL, persistence, and 3 regression bugs.",
    stack: ["FastAPI", "Python", "Pydantic", "Docker", "Google Cloud Run", "Pytest"],
    technicalHighlights: [
      "Nash-optimal auction flooring the winning bid at the seller's reservation price, which removes rounds that could never clear.",
      "Shapley-inspired group discount scaling 5% at two buyers to 20% at four or more.",
      "Explore-exploit price convergence in log2(90) rounds, roughly 7, with learned seller limits surviving a pool reset.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Co-op-Purchase-Coordinator",
    heroImage: "/images/projects/coop-purchase-hero.jpg",
    heroImageAspect: "1024 / 650",
  },
  {
    slug: "co-founder-memory",
    title: "Co-Founder Memory",
    label: "Agentic Memory / LangGraph",
    year: "2026",
    status: "Agentic AI system",
    problem:
      "Most AI assistants answer the current prompt but lose long-term builder context, project momentum, and evolving preferences.",
    approach:
      "Architected a 19-node stateful LangGraph system that separates live conversational memory extraction, critique-driven planning loops, and an automated nightly dossier pipeline into distinct tracks.",
    modelOrSystem:
      "LangGraph orchestration backed by Supabase pgvector with HNSW indexing, with Self-Corrective RAG verification gating what reaches the response path.",
    result:
      "Built a daily catch-up scheduler that reconstructs project momentum by correlating engineering logs, GitHub activity, and targeted web search, looping an auto-reviewer node back to search until the dossier passes quality checks.",
    stack: ["LangGraph", "Supabase pgvector", "HNSW", "CRAG / SRAG", "FastAPI", "Python"],
    technicalHighlights: [
      "19 nodes routing across conversational, planning, memory extraction, and retrieval tracks.",
      "Grades retrieved documents and generated answers before accepting the response path.",
      "Nightly dossier loop that searches, reviews, summarizes, and updates memory without prompting.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Co-Founder-Memory",
    heroImage: "/images/projects/cofounder-memory-hero.jpg",
    heroImageAspect: "1760 / 891",
  },
];

export const technicalCore = [
  {
    title: "Agentic Orchestration",
    items: ["LangGraph", "LangChain", "MCP", "State Schema Constraints", "HITL", "Multi-Provider Routing", "Deep Agents"],
  },
  {
    title: "Retrieval & Memory",
    items: ["Hybrid Search", "Pinecone + BM25", "Jina Rerank", "CRAG / Self-RAG", "Bi-Temporal Versioning", "pgvector / HNSW", "C-SPANN ANN"],
  },
  {
    title: "Evaluation & Correctness",
    items: ["LLM-as-Judge", "Gold Label Sets", "Abstention Metrics", "Live Integration Tests", "SERIALIZABLE Retries", "Pytest"],
  },
  {
    title: "Systems & Product",
    items: ["FastAPI", "CockroachDB", "PostgreSQL", "Supabase", "AWS Bedrock", "Docker", "Next.js 15 / React 19"],
  },
];

export type LabNote = {
  date: string;
  title: string;
  summary: string;
  source?: string;
};

export const labNotes: LabNote[] = [
  {
    date: "2026.08",
    title: "A Confident Wrong Answer Is Worse Than No Tool",
    summary:
      "Call a real race condition an infra blip and you have told a maintainer to press re-run on a genuine bug. So abstention became a first-class verdict, and the harness reports abstention rate next to accuracy and counts the dangerous confusion separately. A classifier that says nothing is recoverable. One that is confidently wrong is not.",
    source: "Podman Flake Agent",
  },
  {
    date: "2026.07",
    title: "Prompts Are Requests, Schemas Are Constraints",
    summary:
      "Asked politely for two perspectives, the graph produced six to eight, a 3 to 4x overrun that burned the token ceiling before the debate resolved. No amount of prompt rewording fixed it. Moving perspective count into a state schema the moderator schedules against fixed it completely, because the constraint stopped being something the model could ignore.",
    source: "RabbitHole",
  },
  {
    date: "2026.07",
    title: "Never Overwrite What You Might Have To Explain",
    summary:
      "A fact is not static. It gets recorded, superseded, contradicted, and sometimes restored. Destructive updates make the current state cheap to read and the history impossible to recover. Closing rows with valid_to instead of overwriting them keeps a harder question answerable: what did we believe last month, and were we right?",
    source: "PaperPlanes",
  },
  {
    date: "2026.07",
    title: "Prove The Boring Baseline Cannot Do It",
    summary:
      "Claiming a distributed database beats a flat file is easy. Running 25 concurrent writers against both and showing one keeps 25 and the other keeps 1 is the version anyone can check. Every architectural claim worth making should come with the command that reproduces it, otherwise it is decoration.",
    source: "PaperPlanes",
  },
  {
    date: "2026.07",
    title: "Cost Is An Architecture Decision, Not A Billing Problem",
    summary:
      "Thirty CI jobs per pull request, each with a full journal, is not something you feed to a model and sort out later. Extracting only the failing block first cuts the payload 76% to 93% before inference. Free-tier rate limits are the same pressure in a different costume, and both are best answered in the design rather than the invoice.",
    source: "Podman Flake Agent",
  },
  {
    date: "2026.06",
    title: "Test Against The Thing That Breaks You",
    summary:
      "Mocks agree with you. A real cluster does not. The tests worth writing are the ones that run against live infrastructure, restart the database mid-conversation, and assert that the model under test is the real one and not a stub that quietly returns whatever makes the suite pass.",
    source: "PaperPlanes",
  },
];
