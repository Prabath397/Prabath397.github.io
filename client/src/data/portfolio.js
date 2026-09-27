/**
 * Portfolio display data for React components.
 * Source of truth: existing portfolio (Prabath397.github.io).
 * This data drives the UI rendering — the server-side knowledge base
 * (server/data/*.json) is used separately for AI grounding.
 */

export const profile = {
  name: 'Prabath Udayanga Jayasuriya',
  title: 'Software Engineering Student',
  tagline: 'Versatile Technology Learner · Practical Problem Solver',
  location: 'Kandana, Sri Lanka',
  status: 'Open to internships and junior software roles',
  summary:
    'I build clean, usable solutions while growing knowledge across web, mobile, desktop applications, analytics, UI/UX, databases, networking, SDLC, and project management.',
  about:
    'I am currently following the Higher Diploma in Computing and Software Engineering at ICBT Campus, delivered with Cardiff Metropolitan University and leading toward the BSc (Hons) pathway. My focus is on becoming the kind of engineer who can connect knowledge from different modules, understand the problem, structure the solution, and keep improving the implementation after it works.',
  aboutExtra:
    'My administrative and data-entry experience has also shaped how I approach software: accuracy matters, workflows matter, and small reliability improvements can make daily work much easier.',
};

export const strengths = [
  {
    title: 'Product Mindset',
    description: 'I care about clarity, usable interfaces, and software that helps people complete real tasks.',
    icon: 'fas fa-compass-drafting',
  },
  {
    title: 'Strong Foundations',
    description:
      'I am building depth across web, mobile, desktop applications, analytics, UI/UX, databases, SDLC, networking, and core CS concepts.',
    icon: 'fas fa-layer-group',
  },
  {
    title: 'Reliable Collaboration',
    description: 'I bring ownership, communication, and consistency from both academic and workplace experience.',
    icon: 'fas fa-handshake-angle',
  },
];

export const featuredProjects = [
  {
    name: 'Cinnamon Export Management System',
    category: 'HD Final Project',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    description:
      'Built a web-based export management system for handling cinnamon export operations with structured data, clean UI flows, and practical admin workflows.',
    github: 'https://github.com/Prabath397/Cinnamon-Export-Management-System',
    featured: true,
  },
  {
    name: 'Enterprise Smart Courier System',
    category: 'Logistics Platform',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'React'],
    description:
      'Developed a full-stack courier platform with parcel booking, customer address management, tracking, warehouse operations, driver workflows, reports, and dashboards.',
    github: 'https://github.com/Prabath397/Enterprise-Smart-Courier-System',
  },
  {
    name: 'Nexia AI Chat Assistant',
    category: 'AI Assistant',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vite', 'Docker'],
    description:
      'Created a full-stack AI chat assistant using MongoDB Atlas, Express.js, React, Node.js, and Vite, with a containerized development setup.',
    github: 'https://github.com/Prabath397/Mern-AI-Support-Chatbot',
  },
  {
    name: 'Cozy Comfort SOC System',
    category: 'Supply Chain',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'PHP', 'JavaScript', 'Entity Framework Core'],
    description:
      'Built an SOC system using ASP.NET Core Web API, Entity Framework Core, SQL Server, PHP, and JavaScript for database-driven operations.',
    github: 'https://github.com/Prabath397/Cozy-Comfort-SOC-System-ASP.NET-Core',
  },
];

export const pinnedRepos = [
  {
    name: 'Cinnamon-Export-Management-System',
    description: 'Web-based cinnamon export management system with buyer, supplier, and admin modules.',
    language: 'PHP',
    color: '#4f5d95',
    stars: 1,
    url: 'https://github.com/Prabath397/Cinnamon-Export-Management-System',
  },
  {
    name: 'EcoStay-Retreat-Android-App',
    description:
      'Android resort booking app built with Java and SQLite for eco-room bookings, activities, notifications, and admin management.',
    language: 'Java',
    color: '#b07219',
    stars: 1,
    url: 'https://github.com/Prabath397/EcoStay-Retreat-Android-App',
  },
  {
    name: 'Mern-AI-Support-Chatbot',
    description:
      'ChatGPT-style MERN AI assistant with JWT auth, MongoDB conversations, file attachments, OCR image reading, admin dashboard, and OpenRouter AI integration.',
    language: 'JavaScript',
    color: '#f1e05a',
    stars: 1,
    url: 'https://github.com/Prabath397/Mern-AI-Support-Chatbot',
  },
  {
    name: 'Enterprise-Smart-Courier-System',
    description:
      'Full-stack logistics SaaS with Spring Boot, PostgreSQL, React, Docker, JWT auth, parcel tracking, warehouse workflows, delivery management, and reports.',
    language: 'Java',
    color: '#b07219',
    stars: 1,
    url: 'https://github.com/Prabath397/Enterprise-Smart-Courier-System',
  },
  {
    name: 'Cozy-Comfort-SOC-System-ASP.NET-Core',
    description:
      'Service-oriented blanket ordering and inventory management system built with ASP.NET Core Web API, SQL Server, PHP and JavaScript.',
    language: 'C#',
    color: '#178600',
    stars: 1,
    url: 'https://github.com/Prabath397/Cozy-Comfort-SOC-System-ASP.NET-Core',
  },
  {
    name: 'Dockerized-Student-Task-Manager',
    description: 'Student task management web app built with Flask, MySQL, Docker, and Docker Compose.',
    language: 'Python',
    color: '#3572A5',
    stars: 1,
    url: 'https://github.com/Prabath397/Dockerized-Student-Task-Manager',
  },
];

export const experience = [
  {
    title: 'Administrative Supervisor',
    company: 'Citypak by Advantis Head Office, Colombo 02',
    period: 'Feb 2025 - Present',
    current: true,
    highlights: [
      'Oversee administrative operations with attention to accuracy and workflow consistency.',
      'Coordinate daily office tasks and support smooth internal operations.',
      'Promoted to a permanent role after a successful internship period.',
    ],
  },
  {
    title: 'Data Entry Intern',
    company: 'Citypak by Advantis Head Office, Colombo 02',
    period: 'May 2024 - Jan 2025',
    current: false,
    highlights: [
      'Entered, updated, and maintained company records with high accuracy.',
      'Supported administrative tasks and document processing workflows.',
      'Built practical habits around precision, consistency, and accountability.',
    ],
  },
];

export const education = [
  {
    degree: 'Higher Diploma in Computing and Software Engineering',
    institution: 'ICBT Campus - Cardiff Metropolitan University',
    period: '2024 - 2026',
    notes: 'Leading to BSc (Hons)',
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'De Mazenod College, Kandana',
    period: '2023',
    notes: 'English Medium',
    grades: [
      { subject: 'ICT', grade: 'B' },
      { subject: 'Combined Maths', grade: 'S' },
      { subject: 'Physics', grade: 'S' },
      { subject: 'General English', grade: 'A' },
    ],
  },
  {
    degree: 'Cambridge GCE Ordinary Level',
    institution: 'OKI International School, Kandana',
    period: '2019',
    notes: 'English Medium',
    grades: [
      { subject: 'Mathematics', grade: 'A' },
      { subject: 'Sinhala', grade: 'A' },
      { subject: 'Computer Science', grade: 'B' },
      { subject: 'Physics/Chemistry/Biology', grade: 'B' },
      { subject: 'English Language', grade: 'C' },
    ],
  },
];

export const certifications = [
  {
    title: 'Cloud Computing: Understanding Core Concepts',
    provider: 'Certificate of Completion',
    description:
      'Completed learning focused on cloud computing fundamentals, core concepts, and the technology foundations used in modern software and infrastructure.',
    imagePath: '/images/cert-cloud-computing.png',
    documentPath: '/documents/CertificateOfCompletion_Cloud_Computing.pdf',
    linkedinPost:
      'https://www.linkedin.com/posts/prabath-jayasuriya_cloud-computing-understanding-core-concepts-ugcPost-7469000926251511808-M2T0/',
  },
  {
    title: 'Cybersecurity with Cloud Computing',
    provider: 'Certificate of Completion',
    description:
      'Completed learning focused on cybersecurity principles in cloud environments, strengthening awareness of secure cloud-based systems and infrastructure.',
    imagePath: '/images/cert-cybersecurity.png',
    documentPath: '/documents/CertificateOfCompletion_Cybersecurity.pdf',
    linkedinPost:
      'https://www.linkedin.com/posts/prabath-jayasuriya_cybersecurity-with-cloud-computing-ugcPost-7470389789297381377-Amqj/',
  },
];

export const skills = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    items: ['Java', 'JavaScript', 'C#', 'Python', 'PHP', 'C++', 'SQL', 'R'],
  },
  {
    title: 'Frontend',
    icon: 'fas fa-window-restore',
    items: ['React', 'Vite', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Backend and APIs',
    icon: 'fas fa-server',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'ASP.NET Core', 'REST APIs'],
  },
  {
    title: 'Databases and ORM',
    icon: 'fas fa-database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'SQLite', 'JPA/Hibernate', 'Entity Framework Core'],
  },
  {
    title: 'DevOps and Tools',
    icon: 'fas fa-screwdriver-wrench',
    items: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'Swagger/OpenAPI', 'VS Code', 'Visual Studio'],
  },
  {
    title: 'Software Concepts',
    icon: 'fas fa-diagram-project',
    items: ['OOP', 'Data Structures', 'JWT Authentication', 'Role-Based Access Control (RBAC)', 'RESTful API Design', 'SDLC'],
  },
];

export const contact = {
  email: 'prabathjayasuriya2003@gmail.com',
  phone: '+94773013042',
  phoneDisplay: '077 301 3042',
  whatsapp: 'https://wa.me/94773013042',
  linkedin: 'https://www.linkedin.com/in/prabath-jayasuriya',
  github: 'https://github.com/Prabath397',
  portfolio: 'https://Prabath397.github.io',
  cvPath: '/documents/MyNewCV.pdf',
};

export const sectionIds = ['about', 'work', 'experience', 'education', 'certifications', 'skills', 'contact'];

export const heroMetrics = [
  { label: '2024 - 2026', description: 'Higher Diploma in Computing and Software Engineering' },
  { label: 'Wide skill set', description: 'Development, design, data, systems, and delivery' },
  { label: 'Sri Lanka', description: 'Based in Kandana' },
];
