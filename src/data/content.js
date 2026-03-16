// src/data/content.js

export const PROFILE = {
  name: "Naina Kothari",
  role: "Full-Stack Developer | Backend & Real-Time Systems",
  location: "Mumbai, India",
  headline:
    "Final-year Computer Engineering student specializing in scalable full-stack applications, authentication systems, and real-time communication platforms.",
  about:
    "I build scalable full-stack applications with a strong focus on backend architecture and real-time systems. My work includes authentication microservices, real-time communication platforms, and reusable backend services designed for scalability, security, and clean integration across applications.",
  links: {
    github: "https://github.com/NainaKothari-14",
    linkedin: "https://www.linkedin.com/in/naina-kothari",
    email: "mailto:nainavasai@gmail.com",
    resume: "/Naina-Kothari-Resume.pdf",
  },
};

export const PROJECTS = [
  {
    title: "Real-Time Voice Chat System",
    tagline: "Scalable voice chat platform supporting live audio communication.",
    image: "/project/Realtime-Voice-Chat-System.png",
    stack: ["Node.js", "React", "Socket.IO", "Redis"],
    kind: "Real-Time System",
    featured: true,
    links: {
      repo: "https://github.com/NainaKothari-14/Realtime-Voice-Chat-System",
      demo: "https://realtime-voice-chat-system.vercel.app/",
    },
    highlights: [
      "Built a real-time voice communication platform supporting multi-room audio interaction.",
      "Implemented live audio streaming with mute/unmute functionality and low-latency messaging.",
      "Used Redis and Socket.IO for efficient real-time state management and event broadcasting.",
    ],
  },
  {
    title: "MentorHer — Women Mentorship Platform",
    tagline: "Platform connecting women mentors and mentees in tech.",
    image: "/project/mentor-her.png",
    stack: ["Next.js", "TypeScript"],
    kind: "Full-Stack",
    featured: true,
    links: {
      live: "https://mentorher.vercel.app/",
      repo: "https://github.com/NainaKothari-14/mentor-her-platform-contribution",
    },
    highlights: [
      "Contributed to a collaborative platform designed to support mentorship for women in technology.",
      "Developed frontend modules using Next.js and TypeScript.",
      "Implemented reusable UI components and improved routing structure for maintainability.",
    ],
  },
  {
    title: "Authentication Service",
    tagline: "Production-ready authentication microservice with multiple login strategies.",
    image: "/project/auth-services.png",
    stack: ["Node.js", "Express", "PostgreSQL", "React"],
    kind: "Microservice",
    featured: true,
    links: {
      repo: "https://github.com/NainaKothari-14/auth-service",
    },
    highlights: [
      "Developed a standalone authentication microservice supporting Email/Password, OTP (Email & WhatsApp), OAuth2 (Google, GitHub), and SSO.",
      "Designed secure authentication flows using JWT with modular API architecture.",
      "Built reusable authentication APIs designed for integration across multiple applications.",
    ],
  },
  {
    title: "PDF Generation Service",
    tagline: "Microservice for dynamic PDF generation with live preview.",
    image: "/project/pdf generator.png",
    stack: ["Node.js", "React", "pdf-lib"],
    kind: "Microservice",
    featured: false,
    links: {
      repo: "https://github.com/NainaKothari-14/pdf-generation-service-pdf-lib",
      live: "https://pdf-generation-service-pdf-lib.vercel.app/",
    },
    highlights: [
      "Built lightweight backend service for dynamic PDF generation using pdf-lib.",
      "Implemented React-based live preview before downloading generated documents.",
      "Designed clean API endpoints enabling easy integration with other systems.",
    ],
  },
  {
    title: "Independent Email Service",
    tagline: "Reusable microservice for transactional email and OTP delivery.",
    image: "/project/independent-email.png",
    stack: ["Node.js", "Nodemailer"],
    kind: "Microservice",
    featured: false,
    links: {
      repo: "https://github.com/NainaKothari-14/independent-email-service",
    },
    highlights: [
      "Developed an independent email service for OTP delivery and transactional notifications.",
      "Implemented configuration-driven setup for easy integration across applications.",
      "Focused on reliability, modular architecture, and clean error handling.",
    ],
  },
  {
    title: "Real-Time Chat System with Presence & Activity Logging",
    tagline: "Distributed real-time messaging system with analytics and logging.",
    image: "/project/Realtime -chat-system-with-presence.png",
    stack: ["Socket.IO", "Redis", "MongoDB", "Kafka", "Elasticsearch"],
    kind: "Real-Time System",
    featured: false,
    links: {
      repo: "https://github.com/NainaKothari-14/Realtime-Chat-System-with-Presence-Activity-Logging",
    },
    highlights: [
      "Developed scalable real-time chat with typing indicators and user presence tracking.",
      "Used Redis for fast in-memory presence management.",
      "Integrated Kafka and Elasticsearch for event streaming, activity logging, and search capabilities.",
    ],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);

export const SKILLS = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
  { label: "Real-Time Systems", items: ["Socket.IO", "Kafka", "WebSockets"] },
  { label: "Search & Logging", items: ["Elasticsearch"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Vercel"] },
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering — Computer Engineering",
    org: "Vidyavardhini's College of Engineering & Technology, Mumbai University",
    time: "2022 – 2026",
    meta: "CGPA: 8.1 | Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Distributed Systems, Advanced DBMS, Artificial Intelligence, NLP, Object-Oriented Programming",
  },
  {
    title: "Higher Secondary Education — Science",
    org: "Thomas Baptista Junior College",
    time: "2020 – 2022",
    meta: "Science stream with early exposure to web technologies.",
  },
  {
    title: "Secondary School Education",
    org: "Carmelite Convent English High School",
    time: "2008 – 2020",
    meta: "Completed primary and secondary education.",
  },
];

export const ACHIEVEMENTS = [
  "Top 10 Finalist — EdQuest Women Who Code Hackathon 2025 for building a scalable technical solution.",
  "Runner-up — VNPS Paper Presentation for research on a personalized learning application for autistic children.",
  "Published two academic project copyrights.",
  "Developed a scalable authentication microservice supporting OAuth providers and OTP-based authentication.",
];