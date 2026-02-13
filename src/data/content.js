// src/data/content.js

export const PROFILE = {
  name: "Naina Kothari",
  role: "Full-Stack Developer (MERN) | Backend & Real-Time Systems",
  location: "Mumbai, India",
  headline:
    "Final-year Computer Engineering student building scalable full-stack applications, authentication systems, and real-time services with a strong backend focus.",
  about:
    "I specialize in full-stack development with a strong interest in backend engineering. I've built authentication microservices, real-time chat and voice systems, and reusable backend services designed for scalability and easy integration.",
  links: {
    github: "https://github.com/NainaKothari-14",
    linkedin: "https://www.linkedin.com/in/naina-kothari",
    email: "mailto:nainavasai@gmail.com",
    resume: "/Naina-Kothari-Resume.pdf",
  },
};

export const PROJECTS = [
  {
    title: "Authentication Service",
    tagline: "Production-ready authentication microservice with multiple login methods.",
    stack: ["Node.js", "Express", "PostgreSQL", "React"],
    kind: "Microservice",
    links: {
      repo: "https://github.com/NainaKothari-14/auth-service",
    },
    highlights: [
      "Built a standalone authentication microservice supporting Email/Password, OTP (Email & WhatsApp), OAuth2 (Google, GitHub), and SSO.",
      "Designed secure authentication flows using JWT and structured API responses.",
      "Architected the service to be reusable and easily integrated across multiple applications.",
    ],
  },
  {
    title: "MentorHer — Women Mentorship Platform",
    tagline: "Collaborative mentorship platform focused on women in tech.",
    stack: ["Next.js", "TypeScript"],
    kind: "Full-Stack",
    links: {
      live: "https://mentorher.vercel.app/",
      repo: "https://github.com/NainaKothari-14/mentor-her-platform-contribution",
    },
    highlights: [
      "Contributed to a group project aimed at connecting women mentors and mentees.",
      "Built frontend features using Next.js and TypeScript.",
      "Focused on clean UI components, routing, and maintainable structure.",
    ],
  },
  {
    title: "Real-Time Chat System with Presence & Activity Logging",
    tagline: "Scalable real-time chat application with logging and analytics.",
    stack: ["Socket.IO", "Redis", "MongoDB", "Kafka", "Elasticsearch"],
    kind: "Real-Time System",
    links: {
      repo: "https://github.com/NainaKothari-14/Realtime-Chat-System-with-Presence-Activity-Logging",
    },
    highlights: [
      "Built real-time chat with typing indicators and presence tracking.",
      "Used Redis for fast in-memory presence management.",
      "Integrated Kafka and Elasticsearch for activity logging and search.",
    ],
  },
  {
    title: "Real-Time Voice Chat System",
    tagline: "Full-stack voice chat system with live audio streaming.",
    stack: ["Socket.IO", "Redis", "Node.js", "React"],
    kind: "Real-Time System",
    links: {
      repo: "https://github.com/NainaKothari-14/Realtime-Voice-Chat-System",
    },
    highlights: [
      "Developed real-time voice chat with multiple rooms.",
      "Implemented live voice streaming and mute/unmute controls.",
      "Managed real-time state efficiently using Redis and Socket.IO.",
    ],
  },
  {
    title: "PDF Generation Service",
    tagline: "Lightweight PDF generation microservice with live preview.",
    stack: ["Node.js", "pdf-lib", "React"],
    kind: "Microservice",
    links: {
      repo: "https://github.com/NainaKothari-14/pdf-generation-service-pdf-lib",
      live: "https://pdf-generation-service-pdf-lib.vercel.app/",
    },
    highlights: [
      "Built lightweight PDF generation using pdf-lib.",
      "Added React-based preview before download.",
      "Designed clean, reusable APIs for integration.",
    ],
  },
  {
    title: "Independent Email Service",
    tagline: "Reusable email-sending microservice for OTPs and notifications.",
    stack: ["Node.js", "Nodemailer"],
    kind: "Microservice",
    links: {
      repo: "https://github.com/NainaKothari-14/independent-email-service",
    },
    highlights: [
      "Built independent email service for OTPs and notifications.",
      "Designed config-driven integration for reuse.",
      "Focused on reliability and clean error handling.",
    ],
  },
];

export const SKILLS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
  { label: "Real-Time & Messaging", items: ["Socket.IO", "Kafka", "Elasticsearch"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering — Computer Engineering",
    org: "Vidyavardhini's College of Engineering & Technology, Mumbai University",
    time: "2022 – 2026",
    meta: "CGPA: 8.1 | Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Distributed Systems, Advanced DBMS, AI, NLP, OOP",
  },
  {
    title: "Higher Secondary Education — Science",
    org: "Thomas Baptista Junior College",
    time: "2020 – 2022",
    meta: "Science Stream with focus on foundational web technologies (HTML)",
  },
  {
    title: "Secondary School Education",
    org: "Carmel Convent School",
    time: "2008 – 2020",
    meta: "Completed primary and secondary education",
  },
];

export const CERTS = [
  "Infosys Springboard — Java, Python, Data Structures & Algorithms",
  "MERN Stack & Web Development Certifications (Prodigy Infotech, CodSoft)",
];

export const ACHIEVEMENTS = [
  "Runner-up, VNPS Paper Presentation — Personalized Learning App for Autistic Children",
  "Built 6+ production-ready projects showcasing real-time systems and microservices architecture",
  "Contributed to open-source women-in-tech mentorship platform (MentorHer)",
  "Developed scalable authentication service supporting multiple OAuth providers and OTP methods",
];