export const profile = {
  name: "Somay Kousis",
  email: "somaykaush@gmail.com",
  github: "https://github.com/Somay-kousis",
  linkedin: "https://www.linkedin.com/in/somay-kousis-630ab1313/",
  leetcode: "https://leetcode.com/u/oeuvre/",
  resume: "/resume.pdf",
  image: "/profile.jpeg",
};

export const proofPoints = [
  "Built retrieval and semantic-search systems around embeddings, vector search, and grounded responses.",
  "Shipped prediction projects using feature engineering, XGBoost, scikit-learn, and model evaluation.",
  "Connects ML implementation with product workflows, deployment constraints, and clear user-facing outcomes.",
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
    slug: "co-founder-memory",
    title: "Co-Founder Memory",
    label: "Agentic Memory / LangGraph",
    year: "2026",
    status: "Agentic AI system",
    problem:
      "Most AI assistants answer the current prompt but lose long-term builder context, project momentum, and evolving preferences.",
    approach:
      "Built a stateful co-founder assistant that captures engineering logs, extracts persistent preferences, compiles chronological dossiers, and routes work through critique-driven graph loops.",
    modelOrSystem:
      "LangGraph multi-agent system with permanent memory stores, Chroma/Supabase retrieval, self-correcting RAG checks, DuckDuckGo fallback search, and scheduled dossier generation.",
    result:
      "Created a memory system that preserves continuity across projects and exposes a technically inspectable architecture for retrieval, planning, and automated review.",
    stack: ["LangGraph", "Python", "Chroma", "Supabase", "CRAG/SRAG", "FastAPI"],
    technicalHighlights: [
      "Routes requests across conversational, planning, memory extraction, and RAG tracks.",
      "Grades retrieved documents and generated answers before accepting the response path.",
      "Runs automated timeline loops that search, review, summarize, update memory, and notify the user.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Co-Founder-Memory",
    heroImage: "/images/projects/co-founder-memory-workflow.png",
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
    heroImage: "/images/projects/steelecareer-hero.png",
    secondaryImages: [
      "/images/projects/steelecareer-detail-1.png",
      "/images/projects/steelecareer-detail-2.png",
    ],
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
      "Built an experimental founder-investor ecosystem with two AI personas: Some for critical investor pressure-testing and Thing for empathetic operator feedback.",
    modelOrSystem:
      "Next.js and React frontend paired with an Express/MongoDB backend, JWT auth, founder and investor flows, AI-assisted validation, funding campaigns, trust tracking, and milestone release logic.",
    result:
      "Shows full-stack product architecture around AI-assisted decision-making, transparent funding workflows, and trust as visible infrastructure.",
    stack: ["Next.js", "React", "TypeScript", "Express", "MongoDB", "Three.js"],
    technicalHighlights: [
      "Designed separate founder and investor workflows around idea posting, discovery, messaging, and milestone monitoring.",
      "Modeled Some and Thing as complementary critique modes for idea validation and founder support.",
      "Structured funding logic around pledge, escrow, milestone verification, and release states.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Something",
    heroImage: "/images/projects/something-hero.png",
    heroImageAspect: "3416 / 1848",
  },
  {
    slug: "ghosting",
    title: "Ghosting",
    label: "Churn Prediction / Explainability",
    year: "2026",
    status: "Case study",
    problem:
      "Customer churn is easy to notice after the fact and harder to detect while behavioral signals are still subtle.",
    approach:
      "Built an investigative ML workflow around churn signals, feature preparation, model training, and narrative analysis.",
    modelOrSystem:
      "XGBoost classification pipeline supported by pandas, scikit-learn, and behavioral feature exploration.",
    result:
      "Turned churn prediction into a readable case study that explains both the modeling path and the product risk behind the model.",
    stack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Explainability"],
    technicalHighlights: [
      "Prepared behavioral features for supervised churn classification.",
      "Used model outputs to reason about user-risk signals.",
      "Framed predictions in a way non-ML stakeholders can understand.",
    ],
    repoUrl: "https://github.com/Somay-kousis/Customer-Churn",
    heroImage: "/images/projects/ghosting-hero.png",
    secondaryImages: [
      "/images/projects/ghosting-detail-1.png",
      "/images/projects/ghosting-detail-2.png",
    ],
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    label: "Regression / Feature Engineering",
    year: "2026",
    status: "ML project",
    problem:
      "Housing-price prediction depends on turning messy property attributes into useful model signals.",
    approach:
      "Built a regression workflow focused on feature engineering, preprocessing, evaluation, and model iteration.",
    modelOrSystem:
      "Structured ML pipeline using Python data tooling and gradient-boosted modeling patterns.",
    result:
      "Demonstrates practical model-building fundamentals: data preparation, validation, and iterative optimization.",
    stack: ["Python", "Feature Engineering", "XGBoost", "Regression", "Model Evaluation"],
    technicalHighlights: [
      "Converted raw property fields into model-ready features.",
      "Compared predictive behavior through validation-focused iteration.",
      "Kept the project grounded in reproducible ML workflow basics.",
    ],
    repoUrl: "https://github.com/Somay-kousis/House-Price-Prediction-System",
    heroImage: "/images/projects/house-price-prediction-clean.png",
    heroImageAspect: "3289 / 1728",
  },
  {
    slug: "portfolio-ai",
    title: "Portfolio AI",
    label: "RAG / Grounded Answers",
    year: "2026",
    status: "Integrated system",
    problem:
      "Static portfolios make recruiters hunt through pages instead of asking targeted questions about a candidate's work.",
    approach:
      "Integrated a retrieval-based assistant that answers from a personal knowledge base rather than only using prewritten responses.",
    modelOrSystem:
      "RAG flow using documents, chunking, embeddings, vector retrieval, and a response layer exposed through the portfolio.",
    result:
      "Gives the portfolio an interactive layer while keeping the main recruiter path clear and evidence-first.",
    stack: ["RAG", "Embeddings", "Vector Search", "Next.js API Routes", "LLaMA"],
    technicalHighlights: [
      "Proxies portfolio questions through a dedicated chat API route.",
      "Uses retrieval as the core answer strategy rather than a static FAQ.",
      "Keeps contact and proof visible even if the assistant is unavailable.",
    ],
    repoUrl: "https://github.com/Somay-kousis/self.so",
    heroImage: "/images/projects/portfolio-ai-hero.png",
    heroImageAspect: "1536 / 1024",
  },
];

export const technicalCore = [
  {
    title: "Machine Learning",
    items: ["PyTorch", "XGBoost", "Scikit-learn", "Pandas", "Feature Engineering", "Model Evaluation"],
  },
  {
    title: "Applied AI",
    items: ["RAG", "Embeddings", "Vector Search", "Semantic Search", "LangGraph", "Agentic Systems"],
  },
  {
    title: "Product Systems",
    items: ["FastAPI", "Next.js", "TypeScript", "Supabase", "API Design", "Deployment"],
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
