import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Pre-render a page per project at build time instead of rendering on demand.
export function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({ id }))
}

// Only the ids above exist. Without this, Next still renders unknown ids on
// demand and notFound() produces a soft 404 - the not-found shell served with
// HTTP 200, which search engines treat as a real page. dynamicParams: false
// makes an unknown project a genuine 404.
export const dynamicParams = false

const projectData: Record<string, any> = {
  watchpact: {
    title: "WATCHPACT",
    category: "SOCIAL_PLATFORM",
    description: "Modern, responsive web application for creating, managing, and sharing movie and TV show watchlists with friends and family",
    longDescription:
      "WatchPact is a full-stack social platform for building and sharing movie and TV watchlists. An Angular 16 frontend talks to a .NET 8 ASP.NET Core API that I wrote and run in Docker, which proxies The Movie Database for catalogue data and persists watchlists in MongoDB Atlas. Search is not a naive substring match: a self-hosted Meilisearch instance holds a 300,000-document catalogue of films, series and people, rebuilt nightly from the TMDB export by a Node indexer on a systemd timer, which is what makes a misspelled query still find the right title. Sign-in is Google OAuth against a cookie-backed scheme, sharing works through per-watchlist tokens, and ownership is enforced server-side so only an owner can delete. It runs as two independent environments - production and test, each with its own database and TLS certificate - with a sync service that copies production into test behind a guard that refuses to write anywhere else. A Capacitor 7 wrapper packages the same frontend as an Android app.",
    tech: [
      "Angular 16",
      "TypeScript 5.1",
      ".NET 8 / ASP.NET Core",
      "C#",
      "MongoDB Atlas",
      "Meilisearch",
      "TMDB API",
      "Docker",
      "Google OAuth",
      "Capacitor 7 (Android)",
      "Bootstrap 5",
      "RxJS",
      "Elf State Management",
    ],
    features: [
      "Comprehensive search and discovery using TMDB API with advanced filtering by genre, year, and rating",
      "Multiple watchlist creation with customizable names and shareable links for collaborative viewing",
      "Detailed media pages with cast, crew, trailers, ratings, and streaming provider information",
      "Google OAuth authentication with personalized user profiles and preferences",
      "Dark/light theme toggle with smooth transitions and user preference persistence",
      "Progressive Web App capabilities with offline support and app-like experience",
      "Real-time collaboration features for shared watchlists with multiple users",
      "Person profiles exploring complete filmographies of actors and directors",
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Smart categorization and organization with auto-sorting by media type",
    ],
    metrics: {
      "Search Index": "300k documents",
      Environments: "prod + test",
      Platforms: "web + Android",
    },
    links: {
      live: "https://bbprojet.dev",
      github: "https://github.com/BBProjet/bbprojet",
    },
  },
  caracheck: {
    title: "CARACHECK",
    category: "MOBILE_APP",
    description: "Beautiful cross-platform mobile checklist and task management application built with React Native and Expo",
    longDescription:
      "CaraCheck is a modern, elegant task management application designed for iOS, Android, and web platforms using React Native and Expo. The app provides a beautiful, intuitive interface for organizing daily routines, work tasks, shopping lists, and personal projects. With customizable color schemes featuring soft gradients, users can personalize their checklists for visual organization. The app includes advanced features like push notifications for task reminders, date-based organization to plan ahead, and a smooth, responsive UI built with React Navigation and Expo Router. CaraCheck supports haptic feedback for enhanced user interaction and leverages Expo's powerful ecosystem for seamless cross-platform development and deployment.",
    tech: ["React Native 0.76", "Expo 52", "TypeScript 5.3", "Expo Router 4", "React Navigation 7", "Expo Notifications", "DateTimePicker"],
    features: [
      "Cross-platform support for iOS, Android, and web with consistent user experience",
      "Beautiful gradient color schemes with 6 customizable themes for visual organization",
      "Push notification system with scheduled reminders for tasks and deadlines",
      "Date-based checklist organization for planning daily, weekly, and future tasks",
      "Intuitive task management with swipe gestures and haptic feedback",
      "Multiple checklist categories including morning routines, work tasks, shopping lists, and weekend projects",
      "Real-time task completion tracking with visual progress indicators",
      "Smooth animations and transitions using React Native Reanimated",
      "Safe area context handling for modern device screens and notches",
      "File-based routing with Expo Router for scalable navigation architecture",
    ],
    metrics: {
      "Platform": "iOS, Android, Web",
      "Framework": "React Native",
      "Build System": "Expo",
    },
  },
  "daily-picking": {
    title: "DAILY_PICKING",
    category: "TEAM_MANAGEMENT",
    description: "Daily meeting animator rotation system with smart absence handling and celebration animations",
    longDescription:
      "Daily Picking is an intelligent team rotation management system designed to fairly distribute daily meeting animation responsibilities. Built with Angular 19 and a Node.js backend, the application ensures every team member gets their turn before anyone repeats, while gracefully handling absences through a smart postponement system. When someone is absent, the system automatically moves to the next person while keeping track of the postponed member, ensuring they animate immediately after the substitute confirms. The application features engaging celebration animations with 100 confetti particles using anime.js to appreciate each participant's contribution. With MongoDB Atlas for data persistence, PM2 for process management, and Nginx with SSL, the application is production-ready and deployed at daily.bbprojet.dev.",
    tech: ["Angular 19", "TypeScript 5.6", "Node.js 20", "Express 4", "MongoDB Atlas", "Mongoose", "PM2 6", "Nginx", "anime.js", "RxJS 7", "Let's Encrypt SSL"],
    features: [
      "Fixed-order rotation algorithm ensuring fair distribution and preventing repeats until everyone has participated",
      "Smart postponement logic that remembers absent members and schedules them right after their substitute",
      "Engaging celebration animations with 100 animated confetti particles to appreciate participation",
      "Real-time MongoDB Atlas integration for persistent state management across sessions",
      "Complete participant management with add, delete, activate/deactivate functionality",
      "Comprehensive statistics tracking for each team member showing total, present, and absent counts",
      "Beautiful gradient UI with purple accents and smooth animations throughout",
      "Production deployment with PM2 process manager for automatic restarts and monitoring",
      "Secure HTTPS with Let's Encrypt SSL certificates and Nginx reverse proxy",
      "Responsive design optimized for desktop and mobile devices",
    ],
    metrics: {
      "Framework": "Angular 19",
      "Deployment": "Production (VPS)",
      "Database": "MongoDB Atlas",
    },
    links: {
      live: "https://daily.bbprojet.dev",
    },
  },
  "project-list": {
    title: "PROJECTLIST",
    category: "TASK_TRACKER",
    description: "A deliberately minimal Jira: projects, a three-column board, and nothing you did not ask for",
    longDescription:
      "ProjectList is a task tracker built against a strict constraint - stay small. Tasks move across To Do, In Progress and Done on a kanban board, by drag-and-drop or by arrow buttons, because HTML5 drag events are unreliable on touch screens and a board you cannot use on a phone is not finished. Each task carries at most one flag - minor, important or blocked - rendered as the card's left edge so a board reads at a glance. Finished work is archived off the board in one click and kept on a separate history page with filters, search and restore. Two design choices are deliberate departures from the sibling project: tasks are keyed by MongoDB's native ObjectId rather than a hand-rolled counter, avoiding a read-then-write race on insert, and updates are PATCH with explicit undefined checks rather than a document replace, because replacing a document against a non-nullable boolean is how a silent data-loss bug gets written.",
    tech: [
      "Angular 19",
      "TypeScript 5.7",
      "Express 5",
      "Mongoose 8",
      "MongoDB Atlas",
      "Node.js 20",
      "PM2",
      "Nginx",
      "Let's Encrypt",
    ],
    features: [
      "Three-column kanban board with drag-and-drop plus arrow-button fallback that stays usable on touch screens",
      "Per-task flags (minor, important, blocked) shown as a coloured card edge and badge",
      "Projects as first-class records, so an empty project can exist before it has any tasks",
      "One-click bulk archive of the Done column, keeping finished work out of the way but not deleted",
      "Separate history page covering every task ever created, with filters, search, restore and permanent delete",
      "Board state held in URL query parameters, so a filtered view is shareable and survives a refresh",
      "Optimistic updates that revert and surface an inline error when a request fails",
      "Two-step confirmation before any destructive action, showing how many tasks a project delete would take",
      "Schema migration script converting the original boolean field to a three-state status, idempotent and with a dry-run mode",
      "25 unit tests covering status transitions, optimistic reverts, flags, drag-drop and the archive flow",
    ],
    metrics: {
      "Unit Tests": "25 passing",
      Collections: "projects + tasks",
      Binding: "loopback only",
    },
    links: {
      live: "https://project.bbprojet.dev",
      github: "https://github.com/cafenombre/project-list",
    },
  },
  glotech: {
    title: "GLOTECH",
    category: "PORTFOLIO",
    description: "This site. A self-hosted portfolio on Next.js 16, built and deployed on my own infrastructure",
    longDescription:
      "GloTech is the site you are reading, and it is self-hosted rather than pushed to a platform - it runs as a Node process bound to loopback on my own VPS, behind nginx with a Let's Encrypt certificate, supervised by PM2 and restored automatically on reboot. The resume page generates a PDF client-side with jsPDF, so there is no server round trip and no document to keep in sync. The interface is built from Radix primitives styled with Tailwind 4, which keeps the neon treatment consistent without hand-rolling accessibility behaviour for every menu and dialog.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Radix UI",
      "jsPDF",
      "Node.js 20",
      "PM2",
      "Nginx",
      "Let's Encrypt",
    ],
    features: [
      "App Router with statically pre-rendered pages and a dynamic route per project",
      "Client-side PDF resume generation with jsPDF, no server round trip",
      "Accessible menus, dialogs and navigation built on Radix primitives",
      "Neon design system in Tailwind 4 using CSS custom properties",
      "Self-hosted behind nginx on loopback, so the reverse proxy is the only route in",
      "Supervised by PM2 with a systemd unit, so it comes back on its own after a reboot",
    ],
    metrics: {
      Framework: "Next.js 16",
      Hosting: "self-hosted VPS",
      Advisories: "0",
    },
    links: {
      live: "https://glotech.bbprojet.dev",
      github: "https://github.com/cafenombre/glotech",
    },
  },
}

// Next.js 16 makes route params async. Reading params.id synchronously silently
// yields undefined, so every project fell through to the not-found branch while
// still returning HTTP 200 - broken in a way a status-code check cannot see.
export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projectData[id]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center text-neon-blue hover:text-neon-pink transition-colors mb-8 font-mono group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              BACK_TO_PROJECTS
            </Link>

            <div className="mb-12">
              <div className="text-sm font-orbitron text-neon-cyan mb-4 tracking-wider">{project.category}</div>
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 text-neon-pink neon-text-strong">
                {project.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            <div className="mb-12 aspect-video bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 border-2 border-neon-pink/50 neon-border-strong flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="absolute inset-0 scanlines"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl font-orbitron text-neon-pink neon-text-strong mb-2 group-hover:scale-110 transition-transform">
                  {project.title.split("_")[0]}
                </div>
                <div className="text-gray-500 font-mono tracking-widest">PROJECT_PREVIEW</div>
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan"></div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">OVERVIEW</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">TECH_STACK</h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 font-mono border-2 border-neon-pink/70 text-neon-pink bg-neon-pink/10 neon-border hover:bg-neon-pink/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">KEY_FEATURES</h2>
              <div className="space-y-4">
                {project.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="text-neon-pink font-mono mt-1 font-bold group-hover:text-neon-cyan transition-colors">
                      [{String(i + 1).padStart(2, "0")}]
                    </div>
                    <div className="text-gray-400 leading-relaxed">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">PERFORMANCE_METRICS</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-6 border-2 border-neon-pink/50 bg-black/50 neon-border relative overflow-hidden group hover:border-neon-cyan/70 transition-all"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold font-orbitron text-neon-pink neon-text-strong mb-2 group-hover:scale-110 transition-transform">
                        {value as string}
                      </div>
                      <div className="text-sm text-gray-500 font-mono tracking-wider">{key}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.links?.live && (
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neon-pink hover:bg-neon-pink/80 text-black font-mono font-bold neon-border-strong border-2 border-neon-pink hover:scale-105 transition-transform">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    LIVE_DEMO
                  </Button>
                </Link>
              )}
              {project.links?.github && (
                <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/20 font-mono bg-black neon-border hover:scale-105 transition-transform font-bold"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    VIEW_CODE
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
