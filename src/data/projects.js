export const projects = [
  {
    id: "ullaas",
    name: "ULLAAS – The Joy of Growth",
    collaborative: true,
    description:
      "A localized e-commerce platform connecting Kudumbashree women entrepreneurs with buyers, built to make community-run marketplaces discoverable online.",
    highlights: [
      "Developed backend services for a localized e-commerce platform connecting Kudumbashree women entrepreneurs with buyers using Supabase and PostgreSQL.",
      "Implemented authentication, product listing management, order processing, and role-based access control for Seller, Buyer, and Admin workflows.",
      "Integrated REST APIs with the frontend for secure data management and scalable backend functionality.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/yogita-mehta/ullas-market",
      live: "https://ullas-market.vercel.app/",
    },
  },
  {
    id: "lazylift",
    name: "LazyLift – AI-Powered Adaptive Academic Planner",
    collaborative: true,
    description:
      "A full-stack academic planning platform that processes syllabi and previous-year question papers for personalized study planning.",
    highlights: [
      "Built a full-stack academic planning platform that processes syllabi and previous-year question papers to extract questions, topics, marks, and academic evidence for personalized study planning.",
      "Implemented question-topic mapping, duplicate detection, PYQ-based topic weightage, explainable priorities, and dynamically generated study plans.",
      "Developed persistent calendar scheduling and a natural-language scheduling assistant with conflict-aware rescheduling and database persistence.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "SQLite",
      "Gemini API",
      "REST APIs",
    ],
    links: {
      github: "https://github.com/GradienttAscent/ll",
      live: "https://ll-three-gilt.vercel.app/",
    },
  },
  {
    id: "offensive-lang",
    name: "Multilingual Offensive Language Detection in Dravidian Code-Mixed Text",
    collaborative: false,
    description:
      "A multilingual NLP classification pipeline for offensive language detection in Tamil-English, Malayalam-English, and Kannada-English code-mixed text.",
    highlights: [
      "Developed a multilingual NLP classification pipeline for offensive language detection in Tamil-English, Malayalam-English, and Kannada-English code-mixed text.",
      "Fine-tuned a pretrained MuRIL-large transformer model for binary classification using a pooled multilingual dataset.",
      "Achieved 88.47% accuracy and 81.00% Macro-F1 on the test set.",
      "Conducted language-wise evaluation and error analysis.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "MuRIL",
      "Scikit-learn",
    ],
    links: {},
  },
];
