export const profile = {
  name: "Somay Kousis",
  email: "somaykaush@gmail.com",
  github: "https://github.com/Somay-kousis",
  linkedin: "https://www.linkedin.com/in/somay-kousis-630ab1313/",
  leetcode: "https://leetcode.com/u/oeuvre/",
  resume: "https://drive.google.com/file/d/1mU8r2zI36x6aFIVa9dP1By7WiRupzQi_/view?usp=share_link",
  image: "/profile.jpeg",
};

export const proofPoints = [
  "Built multi-tiered RAG & multi-agent systems with LangGraph, parallel debate nodes, state constraint schemas, and critique loops.",
  "Engineered hybrid search pipelines (Pinecone + BM25) and Jina Reranking, optimizing latency (MTTV) by ~51%.",
  "Designed non-generic premium client frontends using Next.js 15 & React 19, dockerized environments, and custom MCP integrations.",
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
  secondaryImages?: string[];
};

export const projects: Project[] = [
  {
    slug: "rabbithole",
    title: "RabbitHole",
    label: "Agentic AI / Multi-Agent Courtroom",
    year: "2026",
    status: "LangGraph system",
    problem:
      "Messy public debates and complex legal scenarios resist simple, consensus-driven answers, and LLMs under prompt constraints frequently suffer from token overruns and perspective compliance issues.",
    approach:
      "Built a stateful multi-agent courtroom architecture with a moderator node scheduling parallel advocate/critic perspectives. Implemented a self-correcting RAG sub-graph combining Pinecone/BM25 search, Jina Reranking, and Self-RAG hallucination auditing.",
    modelOrSystem:
      "Hierarchical LangGraph orchestration featuring State-Based Schema Constraints to restrict token usage, a Corrective RAG (CRAG) fallback using Jina Web Search, and dual-tier model routing (Llama-3.3-70B and smaller models).",
    result:
      "Optimized execution latency (MTTV) by 51% (from 19.8s to 9.8s) while completely neutralizing token overruns. Delivered a modular, inspectable Python engine alongside a Next.js/React debug interface.",
    stack: ["LangGraph", "Corrective RAG", "Jina Rerank", "Python", "FastAPI", "Pinecone & BM25", "Docker", "Groq Optimization"],
    technicalHighlights: [
      "Strict State-Based Schema Constraints resolving prompt-based perspective compliance issues.",
      "Self-RAG Hallucination Auditor loop utilizing Jina Rerank and Corrective web search fallback.",
      "Dynamic model routing and moderator partitioning reducing daily token consumption under Groq rate limits."
    ],
    repoUrl: "https://github.com/Somay-kousis/RabbitHole",
    heroImage: "https://cdn.phototourl.com/free/2026-07-01-7f4fad58-9b7d-49c6-9c47-830d70558b84.jpg",
    heroImageAspect: "1600 / 918",
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
      "Built a long-term stateful assistant that automatically maps developer logs, persistent preference states, and builds chronological profiles using LangGraph.",
    modelOrSystem:
      "Multi-agent memory loop with Chroma/Supabase vector storage, Self-Corrective RAG verification, and scheduled dossier compilation.",
    result:
      "Created a memory system that preserves continuity across projects and exposes a technically inspectable architecture for retrieval, planning, and automated review.",
    stack: ["LangGraph", "Python", "Chroma", "Supabase", "CRAG / SRAG", "FastAPI", "Docker"],
    technicalHighlights: [
      "Routes requests across conversational, planning, memory extraction, and RAG tracks.",
      "Grades retrieved documents and generated answers before accepting the response path.",
      "Runs automated timeline loops that search, review, summarize, update memory, and notify the user.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Co-Founder-Memory",
    heroImage: "https://www.image2url.com/r2/default/images/1782892828138-eae87302-0978-4734-80b3-5e39d2947178.jpg",
    heroImageAspect: "2048 / 1078",
  },
  {
    slug: "steelecareer",
    title: "SteelCareer",
    label: "Semantic Matching / Product ML",
    year: "2026",
    status: "Production client work",
    problem:
      "Job discovery usually relies on brittle keyword matching, forcing candidates and recruiters through noisy search flows.",
    approach:
      "Designed a matching workflow that treats profile and role data as semantic objects, then surfaces stronger matches through a product-friendly onboarding flow.",
    modelOrSystem:
      "Semantic search and matching layer built into a Next.js product with Supabase-backed data and TypeScript application logic.",
    result:
      "Created a clearer path from candidate signals to relevant opportunities without claiming unsupported performance metrics.",
    stack: ["Semantic Search", "Next.js", "TypeScript", "Supabase", "Product ML"],
    technicalHighlights: [
      "Modeled candidate and role attributes for retrieval-oriented matching.",
      "Connected ML-facing ranking logic to a usable product flow.",
      "Kept the system explainable enough for recruiter and candidate workflows.",
    ],
    demoUrl: "https://github.com/Somay-kousis/SteelCareer",
    repoUrl: "https://github.com/Somay-kousis/SteelCareer",
    heroImage: "https://cdn.phototourl.com/free/2026-07-01-ba7ab812-f83d-402d-927a-5b05afb0a812.png",
  },
  {
    slug: "something",
    title: "Something",
    label: "Founder-Investor Platform / AI Personas",
    year: "2026",
    status: "Full-stack platform",
    problem:
      "Startup platforms usually optimize visibility and pitch polish, but early ideas need critique, trust, milestone clarity, and emotionally-aware validation.",
    approach:
      "Designed a dual-agent operator-critic validation environment (Something & Nothing) where founders test ideas. Structured a secure Milestone Escrow Pipeline to release funds based on verified proof logs.",
    modelOrSystem:
      "Next.js 15, React 19, and Radix UI frontend integrated with a Node.js/Express backend, Mongoose schema escrow states, similarity index calculation vectors, and custom spatial-aware blurs.",
    result:
      "Rebranded Mutiny into a stunning, non-generic, premium dark-mode platform. Established a verified trust layer where payout release is committee-controlled by proof logs.",
    stack: ["Next.js 15", "React 19", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "Supabase & Render MCP"],
    technicalHighlights: [
      "Milestone Escrow Pipeline requiring ≥50% committee verification of submitted GitHub/test logs.",
      "Dual-agent operator (Something/Belief) and critic (Nothing/Doubt) validation modes.",
      "Premium dark-mode UI with custom glassmorphism, spatial equilibrium indicators, and fluid Framer Motion transitions."
    ],
    repoUrl: "https://github.com/Somay-kousis/Something",
    heroImage: "https://cdn.phototourl.com/free/2026-07-01-13c4bf34-3456-49ce-95fd-f439a1da5f26.png",
    heroImageAspect: "3372 / 1822",
    secondaryImages: [
      "https://cdn.phototourl.com/free/2026-07-01-52fabeab-0128-4a38-96a2-b2e93cb7a631.png",
      "https://cdn.phototourl.com/free/2026-07-01-82b2825b-c2a7-4dd1-ac08-dbeb4d795ae2.png",
    ],
  },

];

export const technicalCore = [
  {
    title: "Agentic AI",
    items: ["LangGraph", "Agentic Systems", "MCP", "HITL", "State Schema Constraints", "Ollama"],
  },
  {
    title: "Applied AI / RAG",
    items: ["CRAG / SRAG", "Jina Reranker", "Hybrid Search", "Vector Search (Pinecone/Chroma)", "Memory Systems", "DSPy Evaluation"],
  },
  {
    title: "Product Systems",
    items: ["FastAPI", "Next.js 15 / React 19", "Multi-Container Docker", "Supabase & Render", "Express / Node", "API Design"],
  },
];

export const labNotes = [
  {
    date: "2026.05.17",
    title: "Invisible Functionality",
    summary:
      "When systems are built correctly, the interface gets out of the user's way and the underlying logic feels obvious.",
  },
  {
    date: "2026.04.12",
    title: "The Latent Product",
    summary:
      "A product lens changes ML architecture: the goal becomes useful agency, not only accuracy.",
  },
  {
    date: "2025.11.03",
    title: "Brutalism in Data",
    summary:
      "Good data products expose structure before decoration, especially when decisions depend on the signal.",
  },
];
