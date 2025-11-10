export const OVERVIEW = `
A detail-oriented and passionate Senior Frontend Developer with 5 years of hands-on experience crafting high-quality, scalable web applications using HTML/CSS, TypeScript, JavaScript, and Next. At Appfuxion Consulting, I play a key role in developing AEON Digital Bank’s B2B loan services, delivering clean, efficient code and secure, user-focused features. I’m deeply committed to writing maintainable code, contributing throughout the development lifecycle, and sharing knowledge with others across the tech stack. Passionate about frontend development and team collaboration, I strive to build robust solutions that drive real impact.`;

export const EDUCATION = `
Graduated from Universitas Gadjah Mada with Bachelor's Degree of Science in Electronics and Instrumentation (2014 – 2019). Continuous learner through online courses, and experimentation`;

export const TOOLS_AND_KNOWLEDGE = `
Next.js, React, TypeScript, JavaScript, Tailwind CSS, Zustand, TanStack Query, Vitest, Jest, Node.js API implementation, GraphQL implementation in Frontend, BPMN modeler, emotion CSS, Ant Design, New Relic, Flutter (basic), PHP, Wordpress, Bootstrap, JQuery, Vuetify, Vuex, and Nuxt.
`;

export const EXPERIENCE = [
  {
    title: "Senior Frontend Developer",
    company: "Appfuxion Consulting",
    type: "Full-time",
    location: "Jakarta, Indonesia",
    period: "Jan 2025 – present",
    description: `Appfuxion Consulting is a digital solutions and software testing company with operations across Asia-Pacific. In this role, I work with AEON Digital Bank to develop its B2B loan services.`,
    responsibilities: [
      "Developing client and admin dashboard features",
      "Conducting code reviews",
      "Maintaining and fixing bugs",
      "Maintaining web performance",
      "Creating unit tests",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Vitest",
      "Tailwind",
      "Zustand",
      "BPMN modeler",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Courtwin",
    type: "Part-time",
    location: "Remote",
    period: "Sept 2024 – Jan 2025",
    description: `Courtwin is a platform for padel sports that helps users find and book courts, lessons, and coaches.`,
    responsibilities: [
      "Creating booking court schedule feature",
      "Creating coach schedule feature",
      "Creating open/close court feature",
      "Maintaining and fixing bugs",
      "Maintaining web performance",
      "Creating unit tests",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Jest",
      "Tailwind",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "Software Engineer - Web Platform",
    company: "Tokopedia",
    type: "Full-time",
    location: "Yogyakarta, Indonesia",
    period: "Oct 2021 – Jul 2024",
    description: `Tokopedia provides an online marketplace for sellers and buyers across Indonesia. Worked on the Fulfillment team handling Dilayani Tokopedia (DT) and Warehouse Management System (WMS) features.`,
    responsibilities: [
      "Creating and maintaining DT and warehouse dashboards",
      "Developing responsive landing pages for Dilayani Tokopedia and Kurir Rekomendasi",
      "Fixing bugs and maintaining code quality",
      "Maintaining web performance",
      "Creating unit tests",
    ],
    tech: [
      "React",
      "TypeScript",
      "emotion CSS",
      "Jest",
      "GraphQL",
      "Node.js",
      "New Relic",
      "Ant Design",
      "Flutter (basic)",
    ],
  },
  {
    title: "Industry Trainer - Technical Support",
    company: "Glints Academy",
    type: "Part-time",
    location: "Remote",
    period: "May 2021 – May 2022",
    description: `Glints Academy is part of Glints, a talent platform in Southeast Asia. Mentored students in frontend bootcamp classes.`,
    responsibilities: [
      "Mentoring students and providing technical guidance",
      "Conducting regular classes 5 times a week",
      "Preparing assignments and exercises",
      "Sharing industry insights and best practices",
      "Teaching extra alumni sessions",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Born Digital",
    type: "Full-time",
    location: "Yogyakarta, Indonesia",
    period: "Feb 2021 – Oct 2021",
    description: `Born Digital focuses on web and application development.`,
    responsibilities: [
      "Converting designs into responsive web/mobile views",
      "Fixing bugs from existing projects",
      "Creating interactive web-based games for organizational engagement",
    ],
    tech: ["React", "JavaScript", "JQuery", "PHP", "Bootstrap", "WordPress"],
  },
  {
    title: "Frontend Engineer",
    company: "Qatros",
    type: "Full-time",
    location: "Yogyakarta, Indonesia",
    period: "Aug 2020 – Jan 2021",
    description: `Handled web development and research projects.`,
    responsibilities: [
      "Building responsive desktop web views",
      "Researching headless CMS and face API integration",
    ],
    tech: ["Vue", "Nuxt", "JavaScript", "Vuetify", "Vuex"],
  },
];

export const BASE_PROMPT = (question: string) => {
  return `
  You are an AI assistant that knows everything about Rafdian Ramadhan.
  Be concise, friendly, and confident.
  
  Overview:
  ${OVERVIEW}
  
  Education:
  ${EDUCATION}
  
  Professional Experience:
  ${EXPERIENCE.map(
    (exp) =>
      `${exp.title} at ${exp.company} (${exp.period})\n${exp.description}`
  ).join("\n\n")}
  
  Tools & Knowledge:
  ${TOOLS_AND_KNOWLEDGE}

  Tone & Style:
  Answer in a concise, helpful, and slightly friendly tone. If asked about Rafdian’s experience or work, answer as if you are his AI twin.
  
  Question: ${question}
  `;
};
