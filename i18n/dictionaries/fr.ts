import type { Dictionary } from "./en"

// French UI strings.
//
// Two conventions, both deliberate:
//   - the terminal-style UPPER_SNAKE labels keep that style and drop accents
//     (SYSTEMES_CLES, not SYSTÈMES_CLÉS), which is normal for French display
//     capitals and keeps the labels looking like the identifiers they imitate
//   - words that French developers say in English stay in English: frontend,
//     backend, API, stack, full-stack, token

export const fr: Dictionary = {
  meta: {
    title: "GloTech - Tristan Glotin",
    description:
      "Développeur full-stack. Angular, .NET et MongoDB, auto-hébergés sur ma propre infrastructure.",
  },
  nav: {
    home: "ACCUEIL",
    projects: "PROJETS",
    resume: "CV",
    switchLanguage: "Changer de langue",
  },
  home: {
    eyebrow: "DEVELOPPEMENT NOUVELLE GENERATION",
    titleLine1: "CONSTRUIRE",
    titleLine2: "L'AVENIR",
    intro:
      "Développeur full-stack. Angular et .NET côté front et back, MongoDB en dessous, et tout déployé sur une machine Linux que j'administre moi-même : Docker, nginx, TLS et le reste.",
    viewProjects: "VOIR LES PROJETS",
    resume: "CV",
    coreSystems: "SYSTEMES_CLES",
    services: {
      frontend: {
        title: "FRONTEND",
        desc: "Angular 16 à 19, React 19 et Next.js 16 en TypeScript. Composants standalone, RxJS, Tailwind.",
      },
      backend: {
        title: "BACKEND_APIS",
        desc: ".NET 8 en C# et Node avec Express. API REST, Google OAuth, partage par token, autorisation côté serveur.",
      },
      data: {
        title: "DONNEES_ET_RECHERCHE",
        desc: "MongoDB avec Mongoose et le driver .NET, un utilisateur de base dédié par application, et Meilisearch auto-hébergé pour une recherche tolérante aux fautes de frappe.",
      },
      ops: {
        title: "DEPLOIEMENT_ET_OPS",
        desc: "Mon propre VPS Debian : Docker Compose, nginx, Let's Encrypt, PM2, timers systemd et sauvegardes quotidiennes de la base.",
      },
    },
    stats: {
      apps: "APPS_EN_PRODUCTION",
      domains: "DOMAINES_EN_HTTPS",
      vps: "VPS_QUE_J_ADMINISTRE",
    },
    ctaHeading: "ON TRAVAILLE ENSEMBLE ?",
    ctaText: "Construisons quelque chose d'ambitieux. Écrivez-moi pour parler de votre prochain projet.",
    ctaButton: "PRENDRE_CONTACT",
  },
  projects: {
    heading: "PROJETS",
    intro:
      "Des projets que j'ai réellement construits et que je fais tourner. Quatre des cinq sont en ligne en ce moment sur un serveur que j'administre moi-même : chaque lien ci-dessous pointe vers quelque chose que vous pouvez ouvrir.",
    back: "RETOUR_AUX_PROJETS",
    preview: "APERCU_DU_PROJET",
    overview: "PRESENTATION",
    techStack: "STACK_TECHNIQUE",
    keyFeatures: "FONCTIONNALITES_CLES",
    metrics: "METRIQUES",
    liveDemo: "VOIR_EN_LIGNE",
    viewCode: "VOIR_LE_CODE",
  },
  notFound: {
    code: "404",
    heading: "PAGE_INTROUVABLE",
    text: "Cette page n'existe pas. Elle a peut-être été renommée, ou le lien qui vous a amené ici n'est plus à jour.",
    back: "RETOUR_A_L_ACCUEIL",
  },
}
