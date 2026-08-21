import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "watchpact",
    title: "WATCHPACT",
    category: "SOCIAL_PLATFORM",
    description: "Modern, responsive web application for creating, managing, and sharing movie and TV show watchlists with friends and family. Features comprehensive TMDB API integration, collaborative lists, Google OAuth authentication, and a beautiful dark/light theme system.",
    tech: ["Angular 16", "TypeScript", "Firebase", "TMDB API", "Bootstrap 5", "RxJS", "Elf State Management"],
    color: "neon-pink",
    featured: true,
    links: {
      live: "https://bbprojet.dev",
      github: "https://github.com/cafenombre/bbprojet",
    },
  },
  {
    id: "caracheck",
    title: "CARACHECK",
    category: "MOBILE_APP",
    description: "Beautiful cross-platform mobile checklist and task management application built with React Native and Expo. Features customizable color schemes, push notifications, date-based organization, and an elegant gradient UI for managing daily routines, work tasks, and shopping lists.",
    tech: ["React Native", "Expo", "TypeScript", "Push Notifications", "React Navigation", "Expo Router"],
    color: "neon-blue",
    featured: true,
  },
  {
    id: "daily-picking",
    title: "DAILY_PICKING",
    category: "TEAM_MANAGEMENT",
    description: "Daily meeting animator rotation system with smart absence handling and celebration animations. Features fixed-order rotation ensuring fair distribution, postponement logic for absent members, MongoDB persistence, and engaging confetti animations to celebrate participation.",
    tech: ["Angular 19", "Node.js", "Express", "MongoDB Atlas", "PM2", "Nginx", "anime.js", "RxJS"],
    color: "neon-purple",
    featured: true,
    links: {
      live: "https://daily.bbprojet.dev",
    },
  },
  {
    id: "neural-commerce",
    title: "NEURAL_COMMERCE",
    category: "E-COMMERCE",
    description: "AI-powered shopping platform with predictive analytics and personalized recommendations",
    tech: ["Next.js", "TensorFlow", "PostgreSQL"],
    color: "neon-cyan",
  },
  {
    id: "quantum-dashboard",
    title: "QUANTUM_DASHBOARD",
    category: "DATA_VISUALIZATION",
    description: "Real-time analytics dashboard with quantum-inspired data processing algorithms",
    tech: ["React", "D3.js", "WebGL"],
    color: "neon-cyan",
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
                A collection of cutting-edge applications showcasing advanced development techniques and innovative
                solutions.
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
