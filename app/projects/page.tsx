import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "watchpact",
    title: "WATCHPACT",
    category: "SOCIAL_PLATFORM",
    description:
      "Full-stack platform for building and sharing movie and TV watchlists. Angular front end against a .NET 8 API I wrote and run in Docker, with watchlists in MongoDB Atlas and a self-hosted Meilisearch index of 300,000 titles and people so a misspelled query still finds the right film. Google OAuth, share-by-token, separate production and test environments, and an Android build via Capacitor.",
    tech: [
      "Angular 16",
      ".NET 8",
      "C#",
      "MongoDB Atlas",
      "Meilisearch",
      "Docker",
      "TMDB API",
      "Google OAuth",
      "Capacitor",
    ],
    color: "neon-pink",
    featured: true,
    links: {
      live: "https://bbprojet.dev",
      github: "https://github.com/BBProjet/bbprojet",
    },
  },
  {
    id: "project-list",
    title: "PROJECTLIST",
    category: "TASK_TRACKER",
    description:
      "A deliberately minimal Jira. Three-column kanban board with drag-and-drop plus button controls that still work on a phone, per-task flags rendered as the card edge, one-click archiving of finished work, and a separate history page with search and restore. Angular 19 on Express and Mongoose, 25 unit tests.",
    tech: ["Angular 19", "Express 5", "Mongoose 8", "MongoDB Atlas", "TypeScript", "PM2", "Nginx"],
    color: "neon-cyan",
    featured: true,
    links: {
      live: "https://project.bbprojet.dev",
      github: "https://github.com/cafenombre/project-list",
    },
  },
  {
    id: "daily-picking",
    title: "DAILY_PICKING",
    category: "TEAM_MANAGEMENT",
    description:
      "Rotation system deciding who runs the daily stand-up. Fixed order so nobody repeats until everyone has had a turn, with postponement logic that remembers an absent member and schedules them straight after their substitute. Angular 19 on Express and MongoDB, in daily use by a team of 13 with several hundred rotations recorded.",
    tech: ["Angular 19", "Node.js 20", "Express", "MongoDB Atlas", "Mongoose", "PM2", "Nginx", "anime.js"],
    color: "neon-purple",
    featured: true,
    links: {
      live: "https://daily.bbprojet.dev",
      github: "https://github.com/cafenombre/daily-picking",
    },
  },
  {
    id: "caracheck",
    title: "CARACHECK",
    category: "MOBILE_APP",
    description:
      "Cross-platform checklist and task app for iOS, Android and web, built with React Native and Expo. Customisable colour themes, scheduled push-notification reminders, and date-based organisation for routines, work tasks and shopping lists.",
    tech: ["React Native", "Expo", "TypeScript", "Expo Router", "React Navigation", "Push Notifications"],
    color: "neon-blue",
    featured: true,
  },
  {
    id: "glotech",
    title: "GLOTECH",
    category: "PORTFOLIO",
    description:
      "This site. Next.js 16 with client-side PDF resume generation, self-hosted on my own VPS behind nginx rather than pushed to a platform — bound to loopback, TLS from Let's Encrypt, supervised by PM2 and restored automatically on reboot.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS 4", "Radix UI", "jsPDF", "PM2", "Nginx"],
    color: "neon-cyan",
    links: {
      live: "https://glotech.bbprojet.dev",
      github: "https://github.com/cafenombre/glotech",
    },
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 tracking-tight">
                <span className="text-neon-pink neon-text">PROJECTS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-mono">
                Things I have actually built and run. Four of the five are live right now on a server I administer
                myself, so every link below points at something you can open.
              </p>
            </div>

            <div className="grid gap-8">
              {projects.map((project, i) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="group">
                  <div className="p-8 border-2 border-border hover:border-neon-pink transition-all hover:neon-border-subtle bg-card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-neon-pink/20 group-hover:border-neon-pink transition-colors" />

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm font-mono text-muted-foreground mb-2 tracking-wider">
                          {`[${String(i + 1).padStart(2, "0")}]`} {project.category}
                        </div>
                        <h2 className="text-3xl font-bold font-sans text-neon-pink group-hover:neon-text-subtle transition-all tracking-tight">
                          {project.title}
                        </h2>
                      </div>
                      <ArrowRight className="h-6 w-6 text-neon-pink opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed font-mono">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono border-2 border-neon-blue/50 text-neon-blue tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
