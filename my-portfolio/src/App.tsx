import { useEffect, useMemo, useRef } from "react"
import type { ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Layers3,
  type LucideIcon,
  Menu,
  MoveRight,
  Sparkles,
} from "lucide-react"

import {
  bioHighlights,
  experience,
  navItems,
  profile,
  projects,
  skills,
  type SkillCategory,
} from "@/data/portfolio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillTabs: { value: "all" | SkillCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "cms", label: "CMS" },
  { value: "frontend", label: "Frontend" },
  { value: "programming", label: "Code" },
]

function App() {
  const rootRef = useRef<HTMLElement | null>(null)

  usePortfolioMotion(rootRef)

  return (
    <main
      ref={rootRef}
      className="min-h-screen overflow-hidden bg-background text-foreground"
    >
      <div className="site-cursor" aria-hidden="true">
        <span className="site-cursor-ring" />
        <span className="site-cursor-dot" />
      </div>
      <Header />
      <Hero />
      <Bio />
      <ProjectShowcase />
      <ExperienceLog />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <Container className="app-header flex h-16 items-center justify-between gap-6">
        <a href="#" className="group flex items-center gap-3" aria-label="Home">
          <span className="flex size-9 items-center justify-center border border-border bg-card text-sm font-black text-primary transition group-hover:border-primary">
            {profile.initials}
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-semibold uppercase tracking-[0.18em]">
              {profile.name}
            </span>
            <span className="text-xs text-muted-foreground">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="lg" className="btn-wire">
            <a href="#projects">
              View Work
              <MoveRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild size="lg" className="btn-red">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant="outline" size="icon-lg">
              <Menu data-icon="inline-start" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-border bg-background">
            <SheetHeader>
              <SheetTitle>{profile.name}</SheetTitle>
              <SheetDescription className="sr-only">
                Primary navigation links
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Mobile">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="mobile-nav-link">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}

function Hero() {
  const [firstWord, ...rest] = profile.tagline.replaceAll(".", "").split(" ")
  const remainingWords = rest.join(" ")

  return (
    <section className="surface-hero relative border-b border-border/70">
      <div className="grid-field absolute inset-0" />
      <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="hero-copy flex flex-col gap-8">
          <div className="flex max-w-6xl flex-col gap-6">
            <span className="section-kicker">
              <Sparkles />
              Building web systems that ship
            </span>
            <h1 className="mega-title">
              <span>{firstWord || "Build"}</span>
              <span className="text-primary">{remainingWords || "Fast"}</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="btn-red h-11">
              <a href="#projects">
                View Projects
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-wire h-11">
              <a href="#experience">Experience Log</a>
            </Button>
          </div>
        </div>

        <Card className="hero-panel column-card min-h-[520px] border-border bg-card/80">
          <CardHeader className="gap-5 p-6">
            <div className="flex items-center justify-between gap-4">
              <Badge variant="secondary" className="badge-red">
                {profile.availability}
              </Badge>
              <Button asChild variant="ghost" size="icon-sm">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight data-icon="inline-start" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <CardTitle className="text-3xl font-black uppercase leading-none md:text-4xl">
                Portfolio Index
              </CardTitle>
              <CardDescription className="max-w-md text-base leading-7">
                Fast access to featured work, technical tools, and collaboration
                details for {profile.name}.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-px p-0">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-border bg-background/70 p-5 transition hover:bg-secondary"
                data-animate="item"
              >
                <span className="text-xs font-mono text-primary">
                  0{index + 1}
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="truncate text-base font-semibold">
                    {project.title}
                  </span>
                  <span className="truncate text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {project.type}
                  </span>
                </span>
                <ArrowUpRight className="text-muted-foreground transition group-hover:text-primary" />
              </a>
            ))}
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}

function Bio() {
  return (
    <section
      id="bio"
      className="surface-section border-b border-border/70 py-20 md:py-28"
      data-animate="section"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading
          icon={Sparkles}
          kicker="Subject profile"
          title="About"
          outline="Signal"
        >
          {profile.intro}
        </SectionHeading>
        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {bioHighlights.map((item, index) => (
            <Card
              key={item}
              className="column-card min-h-52 rounded-none border-0 bg-card"
              data-animate="item"
            >
              <CardHeader>
                <span className="text-xs font-mono text-primary">
                  0{index + 1}
                </span>
              </CardHeader>
              <CardContent className="text-base leading-7 text-muted-foreground">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="surface-section-alt border-b border-border/70 py-20 md:py-28"
      data-animate="section"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading
          icon={Code2}
          kicker="Project database"
          title="Work"
          outline="Index"
        >
          Case study slots for stores, websites, apps, dashboards, automations,
          and the kind of builds you want more of.
        </SectionHeading>

        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="column-card rounded-none border-0 bg-card"
              data-animate="item"
            >
              <div className="border-b border-border p-4">
                <div className="aspect-[16/9] overflow-hidden border border-border bg-background">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="size-full object-cover transition duration-500 group-hover/card:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>
              <CardHeader className="gap-5 p-5">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary" className="badge-red">
                    Project 0{index + 1}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {project.type}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <CardTitle className="text-3xl font-black uppercase leading-none">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7">
                    {project.summary}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-6 px-5">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="border border-border bg-background p-5">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Outcome
                  </span>
                  <p className="mt-2 text-2xl font-black uppercase">
                    {project.outcome}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="mt-auto rounded-none border-t border-border bg-transparent p-5">
                <Button asChild variant="outline" size="lg" className="btn-wire">
                  <a href={project.href}>
                    Open Case Study
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ExperienceLog() {
  return (
    <section
      id="experience"
      className="surface-section border-b border-border/70 py-20 md:py-28"
      data-animate="section"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading
          icon={BriefcaseBusiness}
          kicker="Career history"
          title="Experience"
          outline="Log"
        >
          A clear column view of roles, project focus, and the tools used across
          each phase.
        </SectionHeading>
        <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
          {experience.map((item) => (
            <Card
              key={`${item.role}-${item.period}`}
              className="column-card min-h-[340px] rounded-none border-0 bg-card"
              data-animate="item"
            >
              <CardHeader className="gap-5 p-5">
                <Badge variant="secondary" className="badge-red w-fit">
                  {item.period}
                </Badge>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-3xl font-black uppercase leading-none">
                    {item.role}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.company}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-8 px-5 pb-5">
                <p className="text-base leading-7 text-muted-foreground">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

function TechStack() {
  const groupedSkills = useMemo(
    () =>
      skillTabs.reduce(
        (groups, tab) => ({
          ...groups,
          [tab.value]:
            tab.value === "all"
              ? skills
              : skills.filter((skill) => skill.category === tab.value),
        }),
        {} as Record<(typeof skillTabs)[number]["value"], typeof skills>
      ),
    []
  )

  return (
    <section
      id="stack"
      className="surface-section-alt border-b border-border/70 py-20 md:py-28"
      data-animate="section"
    >
      <Container className="flex flex-col gap-10">
        <SectionHeading
          icon={Layers3}
          kicker="Operational capacity"
          title="Tech"
          outline="Arsenal"
        >
          A balanced mix of CMS, commerce, frontend, and programming tools for
          building practical web experiences.
        </SectionHeading>

        <Tabs defaultValue="all" className="gap-8">
          <TabsList variant="line" className="flex-wrap justify-start">
            {skillTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
                {groupedSkills[tab.value].map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="column-card min-h-36 rounded-none border-0 bg-card"
                    data-animate="item"
                  >
                    <CardHeader className="gap-4 p-5">
                      <span className="text-xs font-mono text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <CardTitle className="flex items-center gap-3 text-xl font-black uppercase">
                        <span className="flex size-10 items-center justify-center border border-border bg-background">
                          <img
                            src={skill.icon}
                            alt=""
                            className="size-6 object-contain"
                            loading="lazy"
                          />
                        </span>
                        <span>{skill.name}</span>
                      </CardTitle>
                      <CardDescription>{skill.focus}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="surface-section py-20 md:py-28"
      data-animate="section"
    >
      <Container>
        <Card className="column-card border-border bg-card">
          <CardContent className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-5">
              <Badge variant="secondary" className="badge-red w-fit">
                Status: open for work
              </Badge>
              <h2 className="mega-title text-[clamp(4rem,13vw,9rem)]">
                <span>Let&apos;s</span>
                <span className="outline-text">Collab</span>
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                For collaborations, builds, redesigns, and technical support,
                start with a short note about the goal and timeline.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <Button asChild size="lg" className="btn-red h-11 justify-between">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                  <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <div className="text-sm leading-6 text-muted-foreground">
                {profile.location}
                <br />
                {profile.availability}
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/70 py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>{profile.name} portfolio template.</span>
        <div className="flex flex-wrap items-center gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

function SectionHeading({
  icon: Icon,
  kicker,
  title,
  outline,
  children,
}: {
  icon: LucideIcon
  kicker: string
  title: string
  outline: string
  children: ReactNode
}) {
  return (
    <div className="section-heading" data-animate="copy">
      <span className="section-kicker">
        <Icon />
        {kicker}
      </span>
      <h2 className="section-title">
        <span>{title}</span>
        <span className="outline-text">{outline}</span>
      </h2>
      <p>{children}</p>
    </div>
  )
}

function Container({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default App

function usePortfolioMotion(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const root = rootRef.current
    if (!root) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches

    if (reduceMotion) {
      gsap.set(
        root.querySelectorAll("[data-animate], .hero-copy > *, .hero-panel"),
        {
          clearProps: "all",
        }
      )
      return
    }

    const cleanups: Array<() => void> = []

    const ctx = gsap.context(() => {
      const cursor = root.querySelector<HTMLElement>(".site-cursor")
      const finePointer = window.matchMedia("(pointer: fine)")

      if (cursor && finePointer.matches) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 })

        const xTo = gsap.quickTo(cursor, "x", {
          duration: 0.16,
          ease: "power3.out",
        })
        const yTo = gsap.quickTo(cursor, "y", {
          duration: 0.16,
          ease: "power3.out",
        })
        const interactiveSelector =
          "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1']), .column-card"

        const handlePointerMove = (event: PointerEvent) => {
          const target = event.target instanceof Element ? event.target : null

          root.classList.add("has-site-cursor")
          cursor.classList.add("is-visible")
          cursor.classList.toggle(
            "is-hovering",
            Boolean(target?.closest(interactiveSelector))
          )
          xTo(event.clientX)
          yTo(event.clientY)
        }

        const handlePointerLeave = () => {
          cursor.classList.remove("is-visible", "is-hovering")
        }

        root.addEventListener("pointermove", handlePointerMove)
        root.addEventListener("pointerleave", handlePointerLeave)
        cleanups.push(() => {
          root.classList.remove("has-site-cursor")
          root.removeEventListener("pointermove", handlePointerMove)
          root.removeEventListener("pointerleave", handlePointerLeave)
        })
      }

      gsap.from(".app-header", {
        y: -18,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
      })

      gsap.from(".hero-copy > *", {
        y: 42,
        autoAlpha: 0,
        duration: 0.95,
        ease: "power3.out",
        stagger: 0.12,
      })

      gsap.from(".hero-panel", {
        y: 36,
        autoAlpha: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.utils.toArray<HTMLElement>("[data-animate='section']").forEach((section) => {
        const items = section.querySelectorAll(
          "[data-animate='item'], [data-animate='copy']"
        )

        gsap.from(items, {
          y: 34,
          autoAlpha: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>(".column-card").forEach((card) => {
        const liftTo = gsap.quickTo(card, "y", {
          duration: 0.35,
          ease: "power3.out",
        })

        const handleMouseEnter = () => liftTo(-4)
        const handleMouseLeave = () => liftTo(0)

        card.addEventListener("mouseenter", handleMouseEnter)
        card.addEventListener("mouseleave", handleMouseLeave)
        cleanups.push(() => {
          card.removeEventListener("mouseenter", handleMouseEnter)
          card.removeEventListener("mouseleave", handleMouseLeave)
        })
      })
    }, root)

    return () => {
      cleanups.forEach((cleanup) => cleanup())
      ctx.revert()
    }
  }, [rootRef])
}
