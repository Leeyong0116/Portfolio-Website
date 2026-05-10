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

// Edit this file with your real name, bio, skills, projects, links, and outcomes.
export const profile = {
  name: "Your Name",
  role: "Web Developer / Technical Partner",
  tagline: "Build fast. Ship clean.",
  intro:
    "I build sharp, responsive web experiences across content, commerce, and product interfaces, with a focus on clean structure and practical delivery.",
  location: "Your location / Remote",
  email: "hello@example.com",
  availability: "Available for selected projects",
}

export const navItems = [
  { label: "Bio", href: "#bio" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
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
    outcome: "Launch metric",
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
    outcome: "Engagement metric",
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
  "Client-ready websites shaped around speed, clarity, and maintainable content systems.",
  "Commerce and marketing pages designed for scanning, confidence, and action.",
  "Practical tooling mindset for automation, structure, and cleaner development handoffs.",
]
