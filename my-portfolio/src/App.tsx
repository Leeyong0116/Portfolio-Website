import { useEffect, useMemo, useRef, useState } from "react"
import type { ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowUpRight,
  Code2,
  Layers3,
  type LucideIcon,
  Mail,
  Menu,
  MoveRight,
  Sparkles,
} from "lucide-react"

import {
  bioHighlights,
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
      <TechStack />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <Container className="app-header flex h-16 items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3" aria-label="Home">
          <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-sm font-semibold">
            YN
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-semibold">{profile.name}</span>
            <span className="text-xs text-muted-foreground">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="lg">
            <a href="#projects">
              View Projects
              <MoveRight data-icon="inline-end" />
            </a>
          </Button>
          <Button asChild size="lg">
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
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
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
  return (
    <section className="surface-hero relative border-b border-border/70">
      <div className="grid-field absolute inset-0" />
      <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="hero-copy flex flex-col gap-8">
          <div className="flex max-w-5xl flex-col gap-6">
            <h1 className="text-5xl font-semibold leading-[0.98] text-balance md:text-7xl lg:text-8xl">
              {profile.tagline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              A focused digital portfolio for web, commerce, and product work,
              built to present your stack, story, and selected projects clearly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-11">
              <a href="#projects">
                View Projects
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11">
              <a href="#bio">Read Bio</a>
            </Button>
          </div>

          <div className="grid gap-4 border-l border-border pl-5 sm:grid-cols-3">
            {[
              ["10+", "skills ready"],
              ["03", "featured works"],
              ["100%", "clean delivery"],
            ].map(([value, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold">{value}</span>
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="hero-panel interactive-card overflow-hidden border-border bg-card/80 shadow-2xl shadow-black/30">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="spline-orbit spline-orbit-one" />
            <div className="spline-orbit spline-orbit-two" />
            <div className="spline-node spline-node-one" />
            <div className="spline-node spline-node-two" />
          </div>
          <CardHeader className="gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">
                  {profile.availability}
                </span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild variant="ghost" size="icon-sm">
                    <a href={`mailto:${profile.email}`}>
                      <Mail data-icon="inline-start" />
                      <span className="sr-only">Email</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Email template owner</TooltipContent>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-3xl">Portfolio Framework</CardTitle>
              <CardDescription className="text-base leading-7">
                A concise view of your bio, selected work, and strongest
                technical tools.
              </CardDescription>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative rounded-lg border border-border bg-background/65 p-4 transition hover:border-primary/40 hover:bg-muted/40"
                data-animate="item"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={project.image}
                      alt=""
                      className="size-12 rounded-md border border-border object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground">
                        Slot 0{index + 1}
                      </span>
                      <span className="font-medium">{project.title}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="mt-1 text-muted-foreground transition group-hover:text-primary" />
                </div>
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
    <section id="bio" className="surface-section border-b border-border/70 py-20 md:py-28" data-animate="section">
      <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionLabel icon={Sparkles} title="Bio" />
        <div className="flex flex-col gap-8">
          <p
            className="max-w-4xl text-3xl font-medium leading-tight text-balance md:text-5xl"
            data-animate="copy"
          >
            {profile.intro}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {bioHighlights.map((item) => (
              <Card key={item} className="interactive-card border-border bg-card" data-animate="item">
                <CardContent className="p-5 text-sm leading-6 text-muted-foreground">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
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
    <section id="stack" className="surface-section-alt border-b border-border/70 py-20 md:py-28" data-animate="section">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionLabel icon={Layers3} title="Tech Stack" />
          <div className="flex max-w-3xl flex-col gap-4">
            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              data-animate="copy"
            >
              Skills arranged for quick scanning.
            </h2>
            <p
              className="text-lg leading-8 text-muted-foreground"
              data-animate="copy"
            >
              A balanced mix of CMS, commerce, frontend, and programming tools
              for building practical web experiences.
            </p>
          </div>
        </div>

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
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {groupedSkills[tab.value].map((skill) => (
                  <Card
                    key={skill.name}
                    className="interactive-card group border-border bg-card transition hover:border-primary/40"
                    data-animate="item"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-foreground">
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

function ProjectShowcase() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateSelected = () => setSelected(api.selectedScrollSnap())
    updateSelected()
    api.on("select", updateSelected)

    return () => {
      api.off("select", updateSelected)
    }
  }, [api])

  return (
    <section id="projects" className="surface-section border-b border-border/70 py-20 md:py-28" data-animate="section">
      <Container className="flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionLabel icon={Code2} title="Projects" />
          <div className="flex max-w-4xl flex-col gap-4">
            <h2
              className="text-4xl font-semibold leading-tight md:text-6xl"
              data-animate="copy"
            >
              Case study slots with a real carousel.
            </h2>
            <p
              className="text-lg leading-8 text-muted-foreground"
              data-animate="copy"
            >
              Use this section for stores, websites, apps, dashboards,
              automations, and case studies that show the kind of work you want.
            </p>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={project.title}
                className="md:basis-1/2"
                data-animate="item"
              >
                <Card className="interactive-card min-h-[560px] border-border bg-card">
                  <div className="px-4 pt-4">
                    <div className="aspect-[16/9] overflow-hidden rounded-lg border border-border bg-background">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="size-full object-cover transition duration-500 group-hover/card:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <CardHeader className="gap-5">
                    <div className="flex items-center justify-between gap-4">
                      <Badge variant="secondary">Project 0{index + 1}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {project.type}
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <CardTitle className="text-3xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-7">
                        {project.summary}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                    <div className="rounded-lg border border-border bg-background p-5">
                      <span className="text-sm text-muted-foreground">
                        Outcome
                      </span>
                      <p className="mt-2 text-2xl font-semibold">
                        {project.outcome}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" size="lg">
                      <a href={project.href}>
                        Open Case Study
                        <ArrowUpRight data-icon="inline-end" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Slide {selected + 1} of {projects.length}
            </div>
            <div className="relative flex items-center gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </Container>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="surface-section-alt py-20 md:py-28" data-animate="section">
      <Container>
        <Card className="interactive-card border-border bg-card">
          <CardContent className="grid gap-10 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-5">
              <h2
                className="text-4xl font-semibold leading-tight md:text-6xl"
                data-animate="copy"
              >
                Ready for your next project.
              </h2>
              <p
                className="max-w-2xl text-lg leading-8 text-muted-foreground"
                data-animate="copy"
              >
                For collaborations, builds, redesigns, and technical support,
                start with a short note about the goal and timeline.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-4">
              <Button asChild size="lg" className="h-11 justify-between">
                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                  <Mail data-icon="inline-end" />
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
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

function SectionLabel({
  icon: Icon,
  title,
}: {
  icon: LucideIcon
  title: string
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
      <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground">
        <Icon />
      </span>
      <span>{title}</span>
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
      gsap.set(root.querySelectorAll("[data-animate], .hero-copy > *, .hero-panel"), {
        clearProps: "all",
      })
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
          "a, button, input, textarea, select, [role='button'], [tabindex]:not([tabindex='-1']), .interactive-card"

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
        rotateX: -8,
        rotateY: 10,
        autoAlpha: 0,
        transformPerspective: 1000,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.to(".spline-orbit-one", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".spline-orbit-two", {
        rotate: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".spline-node", {
        y: -14,
        scale: 1.08,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
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

      gsap.utils.toArray<HTMLElement>(".interactive-card").forEach((card) => {
        const xTo = gsap.quickTo(card, "rotationY", {
          duration: 0.45,
          ease: "power3.out",
        })
        const yTo = gsap.quickTo(card, "rotationX", {
          duration: 0.45,
          ease: "power3.out",
        })
        const liftTo = gsap.quickTo(card, "y", {
          duration: 0.35,
          ease: "power3.out",
        })

        const handleMouseMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect()
          const relX = (event.clientX - rect.left) / rect.width - 0.5
          const relY = (event.clientY - rect.top) / rect.height - 0.5

          card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`)
          card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`)
          xTo(relX * 7)
          yTo(relY * -7)
          liftTo(-4)
        }

        const handleMouseLeave = () => {
          xTo(0)
          yTo(0)
          liftTo(0)
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", handleMouseLeave)
        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMouseMove)
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
