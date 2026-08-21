// English UI strings. This object also defines the shape: fr.ts is typed as
// `Dictionary`, so a key added here and forgotten there is a build error rather
// than an English word showing up on the French site.
//
// No `as const` here on purpose. It would make every value its own literal
// type, and `Dictionary` would then demand the exact English string - so every
// French translation would fail to type check.

export const en = {
  meta: {
    title: "GloTech - Tristan Glotin",
    description: "Full-stack developer. Angular, .NET and MongoDB, self-hosted on my own infrastructure.",
  },
  nav: {
    home: "HOME",
    projects: "PROJECTS",
    resume: "RESUME",
    /** aria-label on the language switcher */
    switchLanguage: "Change language",
  },
  home: {
    eyebrow: "NEXT-GEN DEVELOPMENT",
    titleLine1: "BUILDING",
    titleLine2: "THE FUTURE",
    intro:
      "Full-stack developer. Angular and .NET on the front and back, MongoDB underneath, and everything shipped to a Linux box I run myself: Docker, nginx, TLS and all.",
    viewProjects: "VIEW PROJECTS",
    resume: "RESUME",
    coreSystems: "CORE_SYSTEMS",
    services: {
      frontend: {
        title: "FRONTEND",
        desc: "Angular 16 to 19, React 19 and Next.js 16 in TypeScript. Standalone components, RxJS, Tailwind.",
      },
      backend: {
        title: "BACKEND_APIS",
        desc: ".NET 8 in C# and Node with Express. REST APIs, Google OAuth, token-based sharing, server-side authorisation.",
      },
      data: {
        title: "DATA_AND_SEARCH",
        desc: "MongoDB with Mongoose and the .NET driver, scoped per-app database users, and self-hosted Meilisearch for typo-tolerant search.",
      },
      ops: {
        title: "DEPLOY_AND_OPS",
        desc: "My own Debian VPS: Docker Compose, nginx, Let's Encrypt, PM2, systemd timers and nightly database backups.",
      },
    },
    stats: {
      apps: "APPS_IN_PRODUCTION",
      domains: "DOMAINS_OVER_HTTPS",
      vps: "VPS_I_RUN_MYSELF",
    },
    ctaHeading: "READY TO CONNECT?",
    ctaText: "Let's build something extraordinary together. Reach out to discuss your next project.",
    ctaButton: "INITIATE_CONTACT",
  },
  projects: {
    heading: "PROJECTS",
    intro:
      "Things I have actually built and run. Four of the five are live right now on a server I administer myself, so every link below points at something you can open.",
    back: "BACK_TO_PROJECTS",
    preview: "PROJECT_PREVIEW",
    overview: "OVERVIEW",
    techStack: "TECH_STACK",
    keyFeatures: "KEY_FEATURES",
    metrics: "PERFORMANCE_METRICS",
    liveDemo: "LIVE_DEMO",
    viewCode: "VIEW_CODE",
  },
  notFound: {
    code: "404",
    heading: "PAGE_NOT_FOUND",
    text: "This route does not exist. It may have been renamed, or the link that brought you here is out of date.",
    back: "RETURN_HOME",
  },
}

export type Dictionary = typeof en
