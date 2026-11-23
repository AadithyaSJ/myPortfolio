import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  unreal,
  blender,
  python,
  django,
  fastapi,
  postgresql,
  nextjs,
  langchain,
  dev,
  meta,
  utoc,
  glonix,
  maestrominds,
  bullbear,
  ecommerce,
  superr,
  printmatrix,
  lifejournal,
  ragchatbot,
  her,
  carsim,
  tvs,
  tro,
  leap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & Multi-Agent Systems",
    icon: backend,
  },
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend & Cloud Architect",
    icon: creator,
  },
  {
    title: "Interactive 3D & XR Engineer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django & DRF",
    icon: django,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "LangGraph / AI",
    icon: langchain,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Unreal Engine",
    icon: unreal,
  },
];

const experiences = [
  {
    title: "Backend Developer (Django)",
    company_name: "Utoc Pvt. Ltd",
    icon: utoc,
    iconBg: "#1E3A8A",
    date: "Oct 2025 - Jan 2026",
    points: [
      "Developed and maintained high-throughput Django API endpoints for efficient management of daily task data used by 500+ employees in a Singapore-based engineering company.",
      "Designed robust database models and integrated APIs to ensure seamless, reliable enterprise operations with high data consistency.",
      "Optimized query performance and implemented robust error handling to guarantee continuous operational uptime.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Glonix",
    icon: glonix,
    iconBg: "#FFFFFF",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Built a full-stack CRM and accounting platform using Django, Django REST Framework, PostgreSQL, and React.",
      "Implemented JWT-based RBAC workflows across a 5-level employee hierarchy utilized by 50+ active employees.",
      "Developed end-to-end CRM pipeline routing, Quote-to-Invoice financial ledger workflows, and real-time SSE notifications.",
      "Deployed Dockerized container microservices integrated with AWS S3 for secure file storage and audit traceability.",
    ],
  },
  {
    title: "Full Stack Developer Intern (ReactJS & AI)",
    company_name: "Maestrominds Technology",
    icon: maestrominds,
    iconBg: "#4C1D95",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Implemented automated communication architectures in Maestrominds' learning platform using EmailJS and Groq API.",
      "Automated 4 critical learner communication flows: enrollment, deadline reminders, student feedback loops, and performance reports.",
      "Integrated Groq LLM inference pipelines delivering personalized, contextual AI feedback across 10+ core physics modules.",
    ],
  },
  {
    title: "2× Smart India Hackathon Winner & XR Researcher",
    company_name: "Sri Sairam Techno Incubator / National Hackathons",
    icon: meta,
    iconBg: "#1F2937",
    date: "2024 - 2025",
    points: [
      "2× Winner at Smart India Hackathon (SIH 2024 & SIH 2025) and Winner at Xynthra Hackathon.",
      "Architected multi-sensory VR systems with 3D Reality Capture reconstruction, AI-based interaction, and olfactory scent simulation.",
      "Built real-time gaze tracking and user interaction analysis platforms for electric vehicle ergonomics.",
      "Showcased advanced XR projects at Umagine TN – Chennai Trade Centre.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aadithya's work on our multi-agent architecture and predictive stock pipelines demonstrated exceptional engineering depth and algorithmic clarity.",
    name: "BullBear AI",
    designation: "Multi-Agent System",
    company: "Autonomous Intelligence",
    image: "https://api.dicebear.com/7.x/bottts/svg?seed=BullBear",
  },
  {
    testimonial:
      "Building a 5-level RBAC CRM with quote-to-invoice financial workflows under tight deadlines was executed flawlessly with high reliability.",
    name: "Glonix CRM",
    designation: "Enterprise Deployment",
    company: "Glonix Tech",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=Glonix",
  },
  {
    testimonial:
      "Aadithya led our hackathon team to win Smart India Hackathon twice in a row, demonstrating unmatched innovation across AI and immersive technologies.",
    name: "Smart India Hackathon",
    designation: "National Hackathon",
    company: "Ministry of Education",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=SIH",
  },
];

const projects = [
  {
    name: "BullBear AI",
    badge: "AI & FinTech",
    description:
      "Multi-agent intraday financial intelligence platform for NSE. Architected a 6-agent system using LangGraph orchestrating Bull, Bear, Market Context, News, Risk, and Verification agents with NVIDIA Nemotron, XGBoost, and real-time WebSocket feeds.",
    tags: [
      { name: "langgraph", color: "blue-text-gradient" },
      { name: "nvidia-nim", color: "green-text-gradient" },
      { name: "xgboost", color: "pink-text-gradient" },
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
    ],
    image: bullbear,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "Forever E-Commerce with Multi-Agent RAG",
    badge: "Full-Stack AI",
    description:
      "Production full-stack e-commerce platform featuring an 8-agent AI shopping concierge with hybrid RAG (vector + lexical BM25), real-time apparel inventory, natural language discovery, and end-to-end checkout with Stripe & Razorpay.",
    tags: [
      { name: "agentic-rag", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "react18", color: "pink-text-gradient" },
      { name: "sqlalchemy-async", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "SupeRR Selector",
    badge: "Sports AI & Analytics",
    description:
      "T20 Cricket decision-intelligence engine analyzing 200,999 ball-by-ball deliveries across 883 matches. Computes dynamic pressure intensity (BPI/BoPI), Bayesian reliability ranking, and features multi-agent LLM debate verification.",
    tags: [
      { name: "sports-analytics", color: "blue-text-gradient" },
      { name: "bayesian-ml", color: "green-text-gradient" },
      { name: "multi-agent", color: "pink-text-gradient" },
      { name: "python", color: "blue-text-gradient" },
      { name: "react-dashboard", color: "green-text-gradient" },
    ],
    image: superr,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "PrintMatrix Business Operations",
    badge: "Enterprise Web",
    description:
      "Local-first printing business management & immutable double-entry financial ledger application. Handles production stages, vendor routing, Tamil Nadu GST billing, proforma invoicing, and multi-device LAN access.",
    tags: [
      { name: "nextjs14", color: "blue-text-gradient" },
      { name: "django-drf", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "docker", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
    ],
    image: printmatrix,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "Life Journal – AI Memory Graph",
    badge: "Mobile & Local AI",
    description:
      "Private, offline-first personal memory system built with Jetpack Compose and Room. Powered by local 384-dimensional dense vector embeddings, SQLite FTS5 hybrid search, and SQLCipher AES-GCM biometric encryption.",
    tags: [
      { name: "android-kotlin", color: "blue-text-gradient" },
      { name: "jetpack-compose", color: "green-text-gradient" },
      { name: "local-embeddings", color: "pink-text-gradient" },
      { name: "offline-first", color: "blue-text-gradient" },
    ],
    image: lifejournal,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "Startup Failure Intelligence (RAG)",
    badge: "Local RAG & NLP",
    description:
      "Retrieval-Augmented Generation chatbot analyzing 2,400+ startup post-mortems across 8 sectors. Runs completely locally on consumer hardware using Ollama (Llama 3), FAISS vector indexing, and grounded source citations.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "ollama-local", color: "green-text-gradient" },
      { name: "faiss-vector", color: "pink-text-gradient" },
      { name: "streamlit", color: "blue-text-gradient" },
    ],
    image: ragchatbot,
    source_code_link: "https://github.com/AadithyaSJ",
  },
  {
    name: "Multi-Sensory VR Heritage (SIH'24 Winner)",
    badge: "SIH Winner • XR",
    description:
      "Smart India Hackathon winning cultural preservation system combining photogrammetric 3D reconstruction, AI conversational guides, and controlled scent dispersal simulation for deep sensory immersion.",
    tags: [
      { name: "sih-winner", color: "pink-text-gradient" },
      { name: "unreal-engine", color: "blue-text-gradient" },
      { name: "reality-capture", color: "green-text-gradient" },
      { name: "vr-hardware", color: "blue-text-gradient" },
    ],
    image: her,
    source_code_link: "https://tinyurl.com/SIH24Proj",
  },
  {
    name: "VR EV Ergonomics & Gaze Analysis (SIH'25 Winner)",
    badge: "SIH Winner • XR",
    description:
      "Smart India Hackathon winning system utilizing VR gaze tracking and biomechanical interaction analysis to study driver behavior and optimize cockpit ergonomics for next-generation electric vehicles.",
    tags: [
      { name: "sih-winner", color: "pink-text-gradient" },
      { name: "unreal-engine", color: "blue-text-gradient" },
      { name: "gaze-tracking", color: "green-text-gradient" },
      { name: "ev-design", color: "blue-text-gradient" },
    ],
    image: carsim,
    source_code_link: "https://tinyurl.com/SIH25Proj",
  },
];

export { services, technologies, experiences, testimonials, projects };
