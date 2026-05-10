export type SkillCategory = "cms" | "frontend" | "programming"

export type Skill = {
  name: string
  category: SkillCategory
  focus: string
  icon: string
}

export type Project = {
  title: string
  type: string
  summary: string
  stack: string[]
  outcome: string
  href: string
  image: string
  imageAlt: string
}

export type Experience = {
  period: string
  role: string
  company: string
  summary: string
  stack: string[]
}

// Edit this file with your real name, bio, skills, projects, links, and outcomes.
export const profile = {
  name: "Lee Cheng Yong",
  initials: "LCY",
  role: "Web Developer",
  tagline: "Build web systems.",
  intro:
    "I build practical web experiences for business sites, commerce pages, and front-end interfaces, with a focus on clean delivery, maintainable structure, and client-ready execution.",
  location: "Malaysia / Remote",
  linkedinUrl: "https://www.linkedin.com/in/lee-cheng-yong-793620244/",
  availability: "Open to selected web projects",
}

export const navItems = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export const skills: Skill[] = [
  {
    name: "WordPress",
    category: "cms",
    focus: "CMS builds",
    icon: "/icons/wordpress.svg",
  },
  {
    name: "Elementor",
    category: "cms",
    focus: "Visual page systems",
    icon: "/icons/elementor.svg",
  },
  {
    name: "WooCommerce",
    category: "cms",
    focus: "E-commerce flows",
    icon: "/icons/woocommerce.svg",
  },
  {
    name: "CSS",
    category: "frontend",
    focus: "Responsive UI",
    icon: "/icons/css.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    focus: "Interactive behavior",
    icon: "/icons/javascript.svg",
  },
  {
    name: "HTML",
    category: "frontend",
    focus: "Semantic structure",
    icon: "/icons/html5.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    focus: "Typed React apps",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React",
    category: "frontend",
    focus: "Component systems",
    icon: "/icons/react.svg",
  },
  {
    name: "Python",
    category: "programming",
    focus: "Automation and tooling",
    icon: "/icons/python.svg",
  },
  {
    name: "C++",
    category: "programming",
    focus: "Programming foundations",
    icon: "/icons/cplusplus.svg",
  },
]

export const projects: Project[] = [
  {
    title: "Commerce Landing System",
    type: "WooCommerce / WordPress",
    summary:
      "A focused storefront experience built around clear product discovery, fast content updates, and a cleaner path from browsing to checkout.",
    stack: ["WordPress", "WooCommerce", "Elementor", "CSS"],
    outcome: "Storefront-ready pages",
    href: "#contact",
    image: "/projects/commerce-landing.svg",
    imageAlt: "Dark commerce landing page preview",
  },
  {
    title: "React Portfolio Experience",
    type: "React / TypeScript",
    summary:
      "A polished interface system for presenting services, selected work, and technical credibility through reusable React components.",
    stack: ["React", "TypeScript", "CSS", "JavaScript"],
    outcome: "Reusable UI system",
    href: "#contact",
    image: "/projects/react-portfolio.svg",
    imageAlt: "Dark React portfolio interface preview",
  },
  {
    title: "Automation Toolkit",
    type: "Python / Workflow",
    summary:
      "A workflow helper for reducing repeated manual steps, organizing data, and making everyday technical operations easier to maintain.",
    stack: ["Python", "JavaScript", "HTML"],
    outcome: "Time saved",
    href: "#contact",
    image: "/projects/automation-toolkit.svg",
    imageAlt: "Dark automation toolkit dashboard preview",
  },
]

export const bioHighlights = [
  "Web developer profile shaped around business websites, content structure, and clean implementation.",
  "Comfortable with WordPress, Elementor, WooCommerce, React, JavaScript, and responsive interface work.",
  "Practical delivery mindset for client-facing pages, maintainable sections, and smoother handoffs.",
]

export const experience: Experience[] = [
  {
    period: "Current role",
    role: "Web Developer",
    company: "Imagint",
    summary:
      "Working on web-based solutions for business sites, e-commerce experiences, and custom digital systems.",
    stack: ["WordPress", "Elementor", "WooCommerce", "JavaScript"],
  },
  {
    period: "Project focus",
    role: "Frontend & CMS Development",
    company: "Web Design / Custom Systems",
    summary:
      "Building responsive layouts, content-managed pages, and practical interfaces that are easy to scan and maintain.",
    stack: ["React", "CSS", "HTML", "TypeScript"],
  },
  {
    period: "Technical base",
    role: "Programming & Workflow",
    company: "Automation / Tooling",
    summary:
      "Using programming fundamentals to organize repeated steps, structure data, and support cleaner development workflows.",
    stack: ["Python", "TypeScript", "HTML"],
  },
]
