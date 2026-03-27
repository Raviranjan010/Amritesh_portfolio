import profileImage from "../assets/amritesh.png";
import resumeFile from "../assets/Amritesh_cv (1).pdf";

export const portfolioData = {
  name: "Amritesh Jangir",
  firstName: "Amritesh",
  role: "Data Analyst & Full-Stack Developer",
  tagline:
    "I build practical web products and data-driven tools that turn raw information into usable decisions.",
  summary:
    "Computer Science undergraduate focused on full-stack development, analytics, and machine learning. I enjoy building systems that are useful in the real world, from MERN platforms to predictive dashboards.",
  location: "Punjab, India",
  email: "amriteshjangir5@gmail.com",
  phone: "+91 8764251070",
  github: "https://github.com/AmriteshJangir",
  linkedin: "https://www.linkedin.com/in/amriteshjangir/",
  resume: resumeFile,
  image: profileImage,
  availability: "Open to internships, freelance work, and collaboration.",
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
  { value: "2", label: "Featured builds" },
  { value: "4+", label: "Certificates" },
  { value: "150+", label: "DSA problems solved" },
  { value: "2027", label: "Graduation target" },
];

export const skillsData = [
  {
    title: "Programming Languages",
    description:
      "Strong fundamentals across development, problem solving, and data work.",
    items: [
      { name: "C", icon: "devicon:c" },
      { name: "C++", icon: "devicon:cplusplus" },
      { name: "Java", icon: "devicon:java" },
      { name: "Python", icon: "devicon:python" },
      { name: "SQL", icon: "tabler:sql" },
      { name: "JavaScript", icon: "devicon:javascript" },
    ],
  },
  {
    title: "Frontend & Web",
    description:
      "Interfaces focused on clarity, responsiveness, and practical user flows.",
    items: [
      { name: "React.js", icon: "devicon:react" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "Node.js", icon: "devicon:nodejs" },
      { name: "Express.js", icon: "devicon:express" },
    ],
  },
  {
    title: "Data & BI",
    description:
      "Tooling for analysis, preprocessing, dashboards, and model experimentation.",
    items: [
      { name: "MySQL", icon: "devicon:mysql" },
      { name: "SQLite", icon: "devicon:sqlite" },
      { name: "Excel", icon: "vscode-icons:file-type-excel" },
      { name: "Power BI", icon: "simple-icons:powerbi" },
      { name: "Tableau", icon: "logos:tableau-icon" },
      { name: "Streamlit", icon: "devicon:streamlit" },
    ],
  },
  {
    title: "Core Strengths",
    description:
      "Analytical thinking paired with shipping-oriented execution.",
    items: [
      { name: "Data Analysis", icon: "carbon:data-analytics" },
      { name: "EDA", icon: "carbon:chart-scatter" },
      { name: "Feature Engineering", icon: "carbon:machine-learning-model" },
      { name: "Model Evaluation", icon: "carbon:chart-evaluation" },
      { name: "Problem Solving", icon: "carbon:idea" },
      { name: "Adaptability", icon: "carbon:flow-stream" },
    ],
  },
];

export const highlights = [
  "MERN platforms",
  "Predictive dashboards",
  "Data storytelling",
  "Role-based systems",
  "Clean UI implementation",
];

export const projects = [
  {
    id: 1,
    title: "Helpify",
    category: "Home Services Platform",
    period: "Jan 2026 - Feb 2026",
    href: "https://github.com/AmriteshJangir",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200",
    description:
      "A MERN-based platform built to connect customers with service providers through a structured booking flow.",
    bullets: [
      "Implemented role-based access for customers, providers, and platform workflows.",
      "Managed the full booking lifecycle including assignment, tracking, completion, and feedback.",
      "Added authentication, notifications, and dashboards to improve visibility and operations.",
    ],
    stack: ["MongoDB", "MySQL", "Express.js", "React.js", "Node.js"],
    accent: "from-[#2947a9] via-[#6170ff] to-[#8ed8c0]",
  },
  {
    id: 2,
    title: "Road Accident Severity Prediction",
    category: "ML + Analytics Project",
    period: "Mar 2025 - Apr 2025",
    href: "https://github.com/AmriteshJangir",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&w=1200",
    description:
      "A classification workflow for predicting accident severity using historical crash data and interactive outputs.",
    bullets: [
      "Built the pipeline around preprocessing, feature selection, and supervised classification.",
      "Applied Random Forest with tuning and evaluation to improve predictive quality.",
      "Deployed Streamlit dashboards for real-time interaction and result interpretation.",
    ],
    stack: ["Python", "Scikit-learn", "Streamlit", "Data Preprocessing"],
    accent: "from-[#121826] via-[#23507a] to-[#4db7b0]",
  },
];

export const learningJourney = [
  {
    title: "Mastering Data Structures and Algorithms",
    org: "Cipher Schools",
    type: "Training Program",
    period: "Jun 2025 - Aug 2025",
    details: [
      "Completed structured training across arrays, linked lists, stacks, queues, trees, graphs, and dynamic programming.",
      "Improved algorithm design, optimization, and problem-solving consistency through guided practice.",
    ],
  },
  {
    title: "Scientific Computing with Python",
    org: "FreeCodeCamp",
    type: "Certificate",
    period: "Sep 2025",
  },
  {
    title: "Cloud Computing",
    org: "NPTEL",
    type: "Certificate",
    period: "Apr 2025",
  },
  {
    title: "Code of Duty Hackathon",
    org: "Hackathon Certificate",
    type: "Certificate",
    period: "Mar 2024",
  },
  {
    title: "Web Development",
    org: "FreeCodeCamp",
    type: "Certificate",
    period: "Oct 2023",
  },
];

export const achievements = [
  "Solved 150+ problems on LeetCode, GeeksforGeeks, and Salesforce.",
  "Attended Oracle India Summit.",
  "Participated in the Bhashini Workshop organized by the Government of India in Jaipur.",
];

export const education = [
  {
    school: "Lovely Professional University",
    place: "Punjab, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    meta: "CGPA: 6.75",
    period: "Aug 2023 - Jul 2027",
  },
  {
    school: "Ceeri Vidya Mandir",
    place: "Pilani, India",
    degree: "Intermediate",
    meta: "Percentage: 60%",
    period: "Apr 2021 - Mar 2023",
  },
  {
    school: "Pilani Public School",
    place: "Pilani, India",
    degree: "Matriculation",
    meta: "Percentage: 64%",
    period: "Jun 2016 - Mar 2021",
  },
];

export const socials = [
  { name: "LinkedIn", href: portfolioData.linkedin },
  { name: "GitHub", href: portfolioData.github },
  { name: "Email", href: `mailto:${portfolioData.email}` },
];
