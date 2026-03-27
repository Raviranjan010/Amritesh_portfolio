import profileImage from "../assets/amritesh.png";
import resumeFile from "../assets/Amritesh_cv (1).pdf";

export const portfolioData = {
  name: "Amritesh Jangir",
  firstName: "Amritesh",
  role: "Data Analyst & Full-Stack Developer",
  tagline:
    "Building high-performance web systems and data-intelligence tools that transform raw information into strategic decisions.",
  summary:
    "B.Tech CSE undergraduate at Lovely Professional University with a focus on Full-Stack Development (MERN), Data Analytics, and Machine Learning. Experienced in building end-to-end platforms and predictive models.",
  location: "Punjab, India",
  email: "amriteshjangir5@gmail.com",
  phone: "+91 8764251070",
  github: "https://github.com/AmriteshJangir",
  linkedin: "https://www.linkedin.com/in/amriteshjangir/",
  resume: resumeFile,
  image: profileImage,
  availability: "Available for Internships & Projects",
};

export const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Journey", to: "journey" },
  { label: "Contact", to: "contact" },
];

export const spotlightStats = [
  { value: "02", label: "Featured Builds" },
  { value: "05+", label: "Certificates" },
  { value: "150+", label: "DSA Solutions" },
  { value: "2027", label: "Graduation" },
];

export const skillsData = [
  {
    title: "Programming Languages",
    description: "Core logic and algorithmic problem-solving capabilities.",
    items: [
      { name: "C/C++", icon: "devicon:cplusplus" },
      { name: "Java", icon: "devicon:java" },
      { name: "Python", icon: "devicon:python" },
      { name: "SQL", icon: "tabler:sql" },
      { name: "JavaScript", icon: "devicon:javascript" },
    ],
  },
  {
    title: "Development Stack",
    description: "Building modern, scalable, and responsive web applications.",
    items: [
      { name: "React.js", icon: "devicon:react" },
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "Express.js", icon: "devicon:express" },
      { name: "MongoDB", icon: "devicon:mongodb" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
    ],
  },
  {
    title: "Data & BI",
    description: "Analyzing data patterns and creating interactive dashboards.",
    items: [
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "Power BI", icon: "simple-icons:powerbi" },
      { name: "Tableau", icon: "logos:tableau-icon" },
      { name: "Excel", icon: "vscode-icons:file-type-excel" },
      { name: "Streamlit", icon: "devicon:streamlit" },
    ],
  },
  {
    title: "Expertise",
    description: "Specialized skills in data science and engineering.",
    items: [
      { name: "EDA", icon: "carbon:chart-scatter" },
      { name: "Feature Engineering", icon: "carbon:machine-learning-model" },
      { name: "Model Tuning", icon: "carbon:chart-evaluation" },
      { name: "Problem Solving", icon: "carbon:idea" },
    ],
  },
];

export const highlights = [
  "MERN Stack Platforms",
  "Predictive Analytics",
  "Data Visualization",
  "Machine Learning Pipelines",
];

export const projects = [
  {
    id: 1,
    title: "Helpify",
    category: "Full-Stack Development",
    period: "Jan 2026 - Feb 2026",
    href: "https://github.com/AmriteshJangir",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200",
    description:
      "A comprehensive MERN-based home services marketplace connecting customers with skilled professionals.",
    bullets: [
      "Designed role-based dashboards for Customers, Service Providers, and Admins.",
      "Implemented a real-time booking lifecycle tracker from assignment to completion.",
      "Developed secure authentication and automated notification systems for seamless UX.",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "MySQL"],
    accent: "from-[#2947a9] via-[#6170ff] to-[#8ed8c0]",
  },
  {
    id: 2,
    title: "Severity Prediction",
    category: "Data Science & ML",
    period: "Mar 2025 - Apr 2025",
    href: "https://github.com/AmriteshJangir",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=1200",
    description:
      "A machine learning project focused on predicting the severity of road accidents based on historical crash data.",
    bullets: [
      "Performed extensive Exploratory Data Analysis (EDA) to identify key accident risk factors.",
      "Utilized Random Forest Classifier with hyperparameter tuning to achieve high accuracy.",
      "Built an interactive Streamlit dashboard for real-time severity prediction results.",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    accent: "from-[#121826] via-[#23507a] to-[#4db7b0]",
  },
];

export const learningJourney = [
  {
    title: "DSA Mastery",
    org: "Cipher Schools",
    type: "Intensive Training",
    period: "Jun 2025 - Aug 2025",
    details: [
      "Mastered complex algorithms and data structures through 150+ solved challenges.",
      "Focused on time and space complexity optimization for large-scale systems.",
    ],
  },
  {
    title: "Scientific Computing",
    org: "FreeCodeCamp",
    type: "Certification",
    period: "Sep 2025",
    details: ["Applied Python for data analysis, profiling, and mathematical modeling."],
  },
  {
    title: "Cloud Computing",
    org: "NPTEL (IIT Kharagpur)",
    type: "Certification",
    period: "Apr 2025",
    details: ["Explored virtualization, cloud architectures, and distributed computing models."],
  },
  {
    title: "Hackathon Finalist",
    org: "Code of Duty",
    type: "Competition",
    period: "Mar 2024",
    details: ["Collaborated on a rapid-prototyping challenge to build a functional tech solution in 24 hours."],
  },
];

export const achievements = [
  "Solved 150+ problems across LeetCode, GFG, and platform specific challenges.",
  "Invited Attendee at the Oracle India Summit, exploring next-gen database tech.",
  "Participant in Bhashini Workshop (Govt. of India) for NLP and language tech.",
];

export const education = [
  {
    school: "Lovely Professional University",
    place: "Punjab, India",
    degree: "B.Tech in Computer Science & Engineering",
    meta: "GPA: 6.75/10",
    period: "2023 - 2027",
  },
  {
    school: "Ceeri Vidya Mandir",
    place: "Pilani, Rajasthan",
    degree: "Intermediate (Class XII)",
    meta: "Focus: PCM",
    period: "2021 - 2023",
  },
];

export const socials = [
  { name: "LinkedIn", href: portfolioData.linkedin },
  { name: "GitHub", href: portfolioData.github },
  { name: "Email", href: `mailto:${portfolioData.email}` },
];
