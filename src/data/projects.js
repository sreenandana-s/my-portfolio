// Edit this file to add, remove, or update portfolio projects.
// `image` accepts any URL or a path under /public. Leave empty for a generated placeholder.

export const projects = [
  {
    id: "ullaas",
    name: "ULLAAS",
    collaborative: true,
    description:
      "A localized e-commerce platform connecting Kudumbashree women entrepreneurs directly with buyers, built to make community-run marketplaces discoverable online.",
    contribution: [
      "Backend development",
      "Supabase authentication",
      "PostgreSQL integration",
      "REST API development",
      "Role-based access control",
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    links: {
      github: "https://github.com/yogita-mehta/ullas-market",
      live: "https://ullas-market.vercel.app/",
    },
    accent: "indigo",
  },
  {
    id: "gridlock",
    name: "Flipkart Gridlock",
    collaborative: true,
    description:
      "An event-driven traffic congestion prediction dashboard with interactive maps and live analytics for tracking urban traffic patterns.",
    contribution: [
      "Streamlit dashboard",
      "Folium map visualization",
      "Backend API integration",
      "Traffic metrics visualization",
    ],
    tech: ["Python", "Streamlit", "Folium"],
    links: {
      github: "https://github.com/yogita-mehta/Gridlock-TrafficSense",
    },
    accent: "violet",
  },
  {
    id: "sentiment-analyser",
    name: "IMDb Sentiment Analysis",
    collaborative: false,
    description:
      "A machine learning project that classifies movie reviews as positive or negative using classic natural language processing techniques.",
    contribution: [
      "TF-IDF vectorization",
      "Logistic Regression",
      "Naive Bayes",
      "Support Vector Machine comparison",
    ],
    tech: ["Python", "Scikit-learn", "NLP"],
    links: {
      github: "https://github.com/sreenandana-s/Sentiment_Analyser",
    },
    accent: "indigo",
  },
];
