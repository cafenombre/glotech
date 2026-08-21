import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projectData: Record<string, any> = {
  watchpact: {
    title: "WATCHPACT",
    category: "SOCIAL_PLATFORM",
    description: "Modern, responsive web application for creating, managing, and sharing movie and TV show watchlists with friends and family",
    longDescription:
      "WatchPact is a comprehensive social platform built with Angular 16 that revolutionizes how people discover, organize, and share their entertainment preferences. Leveraging The Movie Database (TMDB) API, it provides access to millions of movies and TV shows with detailed information, trailers, and streaming availability. The platform features a sophisticated watchlist system that allows users to create multiple curated lists, share them with friends, and collaborate on viewing plans. Built with modern web technologies including TypeScript, Firebase, and RxJS, WatchPact offers a seamless, responsive experience across all devices with offline capabilities through Progressive Web App features.",
    tech: ["Angular 16", "TypeScript 5.1", "Firebase", "TMDB API", "Bootstrap 5", "RxJS", "Elf State Management", "Google OAuth"],
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
      "Tech Stack": "Angular 16",
      "API Integration": "TMDB",
      "Authentication": "Google OAuth",
    },
    links: {
      live: "https://bbprojet.dev",
      github: "https://github.com/cafenombre/bbprojet",
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
  "neural-commerce": {
    title: "NEURAL_COMMERCE",
    category: "E-COMMERCE",
    description: "AI-powered shopping platform with predictive analytics and personalized recommendations",
    longDescription:
      "Neural Commerce represents the future of online shopping, leveraging advanced machine learning algorithms to predict user preferences and deliver hyper-personalized shopping experiences. The platform processes millions of data points in real-time to optimize product recommendations, pricing strategies, and inventory management.",
    tech: ["Next.js", "TensorFlow", "PostgreSQL", "Redis", "Stripe"],
    features: [
      "Real-time product recommendations using neural networks",
      "Dynamic pricing optimization based on market trends",
      "Predictive inventory management system",
      "Seamless checkout with multiple payment gateways",
      "Advanced analytics dashboard for merchants",
    ],
    metrics: {
      "Conversion Rate": "+45%",
      "Load Time": "< 1s",
      "User Satisfaction": "98%",
    },
  },
  "quantum-dashboard": {
    title: "QUANTUM_DASHBOARD",
    category: "DATA_VISUALIZATION",
    description: "Real-time analytics dashboard with quantum-inspired data processing algorithms",
    longDescription:
      "Quantum Dashboard transforms complex data streams into actionable insights through cutting-edge visualization techniques. Built with performance in mind, it handles massive datasets with ease, providing real-time updates and interactive exploration capabilities.",
    tech: ["React", "D3.js", "WebGL", "WebSocket", "Python"],
    features: [
      "Real-time data streaming and visualization",
      "Interactive 3D data representations",
      "Custom query builder with natural language processing",
      "Automated anomaly detection and alerts",
      "Export capabilities in multiple formats",
    ],
    metrics: {
      "Data Points/sec": "1M+",
      "Response Time": "< 100ms",
      Uptime: "99.99%",
    },
  },
  "cyber-auth": {
    title: "CYBER_AUTH",
    category: "SECURITY",
    description: "Next-generation authentication system with biometric integration and zero-trust architecture",
    longDescription:
      "Cyber Auth redefines security standards with a comprehensive authentication solution that combines biometric verification, multi-factor authentication, and zero-trust principles. Designed for enterprise-scale deployments, it provides uncompromising security without sacrificing user experience.",
    tech: ["Node.js", "Redis", "WebAuthn", "PostgreSQL", "Docker"],
    features: [
      "Biometric authentication (fingerprint, face recognition)",
      "Hardware security key support",
      "Adaptive risk-based authentication",
      "Session management with automatic threat detection",
      "Comprehensive audit logging and compliance reporting",
    ],
    metrics: {
      "Auth Speed": "< 500ms",
      "Security Score": "A+",
      "Failed Attacks": "0",
    },
  },
  "synth-api": {
    title: "SYNTH_API",
    category: "BACKEND",
    description: "High-performance API gateway with intelligent routing and auto-scaling capabilities",
    longDescription:
      "Synth API is a next-generation API gateway built for extreme performance and reliability. It intelligently routes requests, automatically scales based on demand, and provides comprehensive monitoring and analytics. Perfect for microservices architectures and high-traffic applications.",
    tech: ["Go", "Kubernetes", "gRPC", "Prometheus", "Grafana"],
    features: [
      "Intelligent request routing with load balancing",
      "Automatic horizontal scaling based on metrics",
      "Built-in rate limiting and DDoS protection",
      "Real-time monitoring and alerting",
      "API versioning and backward compatibility",
    ],
    metrics: {
      "Requests/sec": "100K+",
      Latency: "< 10ms",
      Availability: "99.99%",
    },
  },
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectData[params.id]

  if (!project) {
    return <div>Project not found</div>
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
