// Single source of truth for project content.
//
// This used to live as two module-scope constants in two page files:
// `projects` in app/projects/page.tsx and `projectData` in
// app/projects/[id]/page.tsx. They shared title and category byte-for-byte but
// carried independently written descriptions and tech lists for the same
// project, so the list page and the detail page disagreed about what each
// project was. Adding a second language to that would have produced four
// diverging copies.
//
// The split here is deliberate: `projectMeta` holds what does not change
// between languages (ids, brand names, tech, links), `ProjectContent` holds
// what does. Only the latter gets translated.

import type { Locale } from "@/i18n/config"

// Display order on the list page. Also drives generateStaticParams, so a
// project is added or removed here and nowhere else.
export const projectOrder = ["watchpact", "project-list", "daily-picking", "caracheck", "glotech"] as const
export type ProjectId = (typeof projectOrder)[number]

export type ProjectMeta = {
  /** Brand name - identical in every language. */
  title: string
  color: string
  featured?: boolean
  /** Short stack shown on the list page. */
  techBrief: string[]
  /** Full stack shown on the detail page. */
  techFull: string[]
  links?: { live?: string; github?: string }
}

export type ProjectContent = {
  category: string
  /** Long blurb on the list page. */
  summary: string
  /** One-line tagline under the title on the detail page. */
  tagline: string
  longDescription: string
  features: string[]
  /** Was a plain object, whose keys were rendered as the visible label -
   *  which made the labels untranslatable. Now an explicit pair. */
  metrics: { label: string; value: string }[]
}

export const projectMeta: Record<ProjectId, ProjectMeta> = {
  watchpact: {
    title: "WATCHPACT",
    color: "neon-pink",
    featured: true,
    techBrief: [
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
    techFull: [
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
    links: {
      live: "https://bbprojet.dev",
      github: "https://github.com/BBProjet/bbprojet",
    },
  },
  "project-list": {
    title: "PROJECTLIST",
    color: "neon-cyan",
    featured: true,
    techBrief: ["Angular 19", "Express 5", "Mongoose 8", "MongoDB Atlas", "TypeScript", "PM2", "Nginx"],
    techFull: [
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
    links: {
      live: "https://project.bbprojet.dev",
      github: "https://github.com/cafenombre/project-list",
    },
  },
  "daily-picking": {
    title: "DAILY_PICKING",
    color: "neon-purple",
    featured: true,
    techBrief: ["Angular 19", "Node.js 20", "Express", "MongoDB Atlas", "Mongoose", "PM2", "Nginx", "anime.js"],
    techFull: [
      "Angular 19",
      "TypeScript 5.6",
      "Node.js 20",
      "Express 4",
      "MongoDB Atlas",
      "Mongoose",
      "PM2 6",
      "Nginx",
      "anime.js",
      "RxJS 7",
      "Let's Encrypt SSL",
    ],
    links: {
      live: "https://daily.bbprojet.dev",
      // The list page had this and the detail page silently dropped it, so the
      // detail page rendered no "view code" button.
      github: "https://github.com/cafenombre/daily-picking",
    },
  },
  caracheck: {
    title: "CARACHECK",
    color: "neon-blue",
    featured: true,
    techBrief: ["React Native", "Expo", "TypeScript", "Expo Router", "React Navigation", "Push Notifications"],
    techFull: [
      "React Native 0.76",
      "Expo 52",
      "TypeScript 5.3",
      "Expo Router 4",
      "React Navigation 7",
      "Expo Notifications",
      "DateTimePicker",
    ],
    // No links: the app is not deployed to a public URL and has no public
    // repository. Both buttons are conditional, so the section renders empty.
  },
  glotech: {
    title: "GLOTECH",
    color: "neon-cyan",
    techBrief: ["Next.js 16", "React 19", "Tailwind CSS 4", "Radix UI", "jsPDF", "PM2", "Nginx"],
    techFull: [
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
    links: {
      live: "https://glotech.bbprojet.dev",
      github: "https://github.com/cafenombre/glotech",
    },
  },
}

const en: Record<ProjectId, ProjectContent> = {
  watchpact: {
    category: "SOCIAL_PLATFORM",
    summary:
      "Full-stack platform for building and sharing movie and TV watchlists. Angular front end against a .NET 8 API I wrote and run in Docker, with watchlists in MongoDB Atlas and a self-hosted Meilisearch index of 300,000 titles and people so a misspelled query still finds the right film. Google OAuth, share-by-token, separate production and test environments, and an Android build via Capacitor.",
    tagline:
      "Modern, responsive web application for creating, managing, and sharing movie and TV show watchlists with friends and family",
    longDescription:
      "WatchPact is a full-stack social platform for building and sharing movie and TV watchlists. An Angular 16 frontend talks to a .NET 8 ASP.NET Core API that I wrote and run in Docker, which proxies The Movie Database for catalogue data and persists watchlists in MongoDB Atlas. Search is not a naive substring match: a self-hosted Meilisearch instance holds a 300,000-document catalogue of films, series and people, rebuilt nightly from the TMDB export by a Node indexer on a systemd timer, which is what makes a misspelled query still find the right title. Sign-in is Google OAuth against a cookie-backed scheme, sharing works through per-watchlist tokens, and ownership is enforced server-side so only an owner can delete. It runs as two independent environments - production and test, each with its own database and TLS certificate - with a sync service that copies production into test behind a guard that refuses to write anywhere else. A Capacitor 7 wrapper packages the same frontend as an Android app.",
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
    metrics: [
      { label: "Search Index", value: "300k documents" },
      { label: "Environments", value: "prod + test" },
      { label: "Platforms", value: "web + Android" },
    ],
  },
  "project-list": {
    category: "TASK_TRACKER",
    summary:
      "A deliberately minimal Jira. Three-column kanban board with drag-and-drop plus button controls that still work on a phone, per-task flags rendered as the card edge, one-click archiving of finished work, and a separate history page with search and restore. Angular 19 on Express and Mongoose, 25 unit tests.",
    tagline: "A deliberately minimal Jira: projects, a three-column board, and nothing you did not ask for",
    longDescription:
      "ProjectList is a task tracker built against a strict constraint - stay small. Tasks move across To Do, In Progress and Done on a kanban board, by drag-and-drop or by arrow buttons, because HTML5 drag events are unreliable on touch screens and a board you cannot use on a phone is not finished. Each task carries at most one flag - minor, important or blocked - rendered as the card's left edge so a board reads at a glance. Finished work is archived off the board in one click and kept on a separate history page with filters, search and restore. Two design choices are deliberate departures from the sibling project: tasks are keyed by MongoDB's native ObjectId rather than a hand-rolled counter, avoiding a read-then-write race on insert, and updates are PATCH with explicit undefined checks rather than a document replace, because replacing a document against a non-nullable boolean is how a silent data-loss bug gets written.",
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
    metrics: [
      { label: "Unit Tests", value: "25 passing" },
      { label: "Collections", value: "projects + tasks" },
      { label: "Binding", value: "loopback only" },
    ],
  },
  "daily-picking": {
    category: "TEAM_MANAGEMENT",
    summary:
      "Rotation system deciding who runs the daily stand-up. Fixed order so nobody repeats until everyone has had a turn, with postponement logic that remembers an absent member and schedules them straight after their substitute. Angular 19 on Express and MongoDB, in daily use by a team of 13 with several hundred rotations recorded.",
    tagline: "Daily meeting animator rotation system with smart absence handling and celebration animations",
    longDescription:
      "Daily Picking is an intelligent team rotation management system designed to fairly distribute daily meeting animation responsibilities. Built with Angular 19 and a Node.js backend, the application ensures every team member gets their turn before anyone repeats, while gracefully handling absences through a smart postponement system. When someone is absent, the system automatically moves to the next person while keeping track of the postponed member, ensuring they animate immediately after the substitute confirms. The application features engaging celebration animations with 100 confetti particles using anime.js to appreciate each participant's contribution. With MongoDB Atlas for data persistence, PM2 for process management, and Nginx with SSL, the application is production-ready and deployed at daily.bbprojet.dev.",
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
    metrics: [
      { label: "Framework", value: "Angular 19" },
      { label: "Deployment", value: "Production (VPS)" },
      { label: "Database", value: "MongoDB Atlas" },
    ],
  },
  caracheck: {
    category: "MOBILE_APP",
    summary:
      "Cross-platform checklist and task app for iOS, Android and web, built with React Native and Expo. Customisable colour themes, scheduled push-notification reminders, and date-based organisation for routines, work tasks and shopping lists.",
    tagline: "Beautiful cross-platform mobile checklist and task management application built with React Native and Expo",
    longDescription:
      "CaraCheck is a modern, elegant task management application designed for iOS, Android, and web platforms using React Native and Expo. The app provides a beautiful, intuitive interface for organizing daily routines, work tasks, shopping lists, and personal projects. With customizable color schemes featuring soft gradients, users can personalize their checklists for visual organization. The app includes advanced features like push notifications for task reminders, date-based organization to plan ahead, and a smooth, responsive UI built with React Navigation and Expo Router. CaraCheck supports haptic feedback for enhanced user interaction and leverages Expo's powerful ecosystem for seamless cross-platform development and deployment.",
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
    metrics: [
      { label: "Platform", value: "iOS, Android, Web" },
      { label: "Framework", value: "React Native" },
      { label: "Build System", value: "Expo" },
    ],
  },
  glotech: {
    category: "PORTFOLIO",
    summary:
      "This site. Next.js 16 with client-side PDF resume generation, self-hosted on my own VPS behind nginx rather than pushed to a platform — bound to loopback, TLS from Let's Encrypt, supervised by PM2 and restored automatically on reboot.",
    tagline: "This site. A self-hosted portfolio on Next.js 16, built and deployed on my own infrastructure",
    longDescription:
      "GloTech is the site you are reading, and it is self-hosted rather than pushed to a platform - it runs as a Node process bound to loopback on my own VPS, behind nginx with a Let's Encrypt certificate, supervised by PM2 and restored automatically on reboot. The resume page generates a PDF client-side with jsPDF, so there is no server round trip and no document to keep in sync. The interface is built from Radix primitives styled with Tailwind 4, which keeps the neon treatment consistent without hand-rolling accessibility behaviour for every menu and dialog.",
    features: [
      "App Router with statically pre-rendered pages and a dynamic route per project",
      "Client-side PDF resume generation with jsPDF, no server round trip",
      "Accessible menus, dialogs and navigation built on Radix primitives",
      "Neon design system in Tailwind 4 using CSS custom properties",
      "Self-hosted behind nginx on loopback, so the reverse proxy is the only route in",
      "Supervised by PM2 with a systemd unit, so it comes back on its own after a reboot",
    ],
    metrics: [
      { label: "Framework", value: "Next.js 16" },
      { label: "Hosting", value: "self-hosted VPS" },
      { label: "Advisories", value: "0" },
    ],
  },
}

const fr: Record<ProjectId, ProjectContent> = {
  watchpact: {
    category: "PLATEFORME_SOCIALE",
    summary:
      "Plateforme full-stack pour créer et partager des listes de films et de séries à voir. Un front Angular qui interroge une API .NET 8 que j'ai écrite et que je fais tourner dans Docker, avec les listes dans MongoDB Atlas et un index Meilisearch auto-hébergé de 300 000 titres et personnalités : une requête mal orthographiée retrouve quand même le bon film. Connexion Google OAuth, partage par token, environnements de production et de test séparés, et une version Android via Capacitor.",
    tagline:
      "Application web moderne et responsive pour créer, gérer et partager ses listes de films et de séries avec ses proches",
    longDescription:
      "WatchPact est une plateforme sociale full-stack pour créer et partager des listes de films et de séries. Un frontend Angular 16 dialogue avec une API .NET 8 ASP.NET Core que j'ai écrite et que je fais tourner dans Docker ; elle relaie The Movie Database pour les données du catalogue et conserve les listes dans MongoDB Atlas. La recherche n'est pas une simple correspondance de sous-chaîne : une instance Meilisearch auto-hébergée contient un catalogue de 300 000 documents (films, séries et personnalités), reconstruit chaque nuit à partir de l'export TMDB par un indexeur Node déclenché par un timer systemd — c'est ce qui permet à une requête mal orthographiée de trouver quand même le bon titre. L'authentification passe par Google OAuth avec un schéma à base de cookies, le partage fonctionne par token propre à chaque liste, et la propriété est vérifiée côté serveur pour que seul le propriétaire puisse supprimer. Le tout tourne en deux environnements indépendants — production et test, chacun avec sa base et son certificat TLS — avec un service de synchronisation qui copie la production vers le test derrière un garde-fou qui refuse d'écrire ailleurs. Un wrapper Capacitor 7 empaquette le même frontend en application Android.",
    features: [
      "Recherche et découverte complètes via l'API TMDB, avec filtrage avancé par genre, année et note",
      "Création de plusieurs listes aux noms personnalisables et liens partageables pour regarder à plusieurs",
      "Fiches détaillées avec casting, équipe technique, bandes-annonces, notes et plateformes de streaming",
      "Authentification Google OAuth avec profils et préférences personnalisés",
      "Bascule entre thème clair et sombre, avec transitions fluides et mémorisation du choix",
      "Fonctionnalités de Progressive Web App avec support hors ligne et expérience proche du natif",
      "Collaboration en temps réel sur les listes partagées entre plusieurs utilisateurs",
      "Fiches personnalités permettant d'explorer la filmographie complète des acteurs et des réalisateurs",
      "Design responsive optimisé pour ordinateur, tablette et mobile",
      "Catégorisation intelligente avec tri automatique par type de média",
    ],
    metrics: [
      { label: "Index de recherche", value: "300k documents" },
      { label: "Environnements", value: "prod + test" },
      { label: "Plateformes", value: "web + Android" },
    ],
  },
  "project-list": {
    category: "SUIVI_DE_TACHES",
    summary:
      "Un Jira volontairement minimal. Tableau kanban à trois colonnes avec glisser-déposer et des boutons qui fonctionnent aussi sur téléphone, drapeaux par tâche affichés sur le bord de la carte, archivage en un clic du travail terminé, et une page d'historique séparée avec recherche et restauration. Angular 19 sur Express et Mongoose, 25 tests unitaires.",
    tagline: "Un Jira volontairement minimal : des projets, un tableau à trois colonnes, et rien de plus",
    longDescription:
      "ProjectList est un gestionnaire de tâches construit sous une contrainte stricte : rester petit. Les tâches se déplacent entre À faire, En cours et Terminé sur un tableau kanban, par glisser-déposer ou par boutons fléchés, parce que les événements de drag HTML5 sont peu fiables sur écran tactile et qu'un tableau inutilisable sur téléphone n'est pas fini. Chaque tâche porte au plus un drapeau — mineur, important ou bloqué — rendu sur le bord gauche de la carte pour que le tableau se lise d'un coup d'œil. Le travail terminé est archivé hors du tableau en un clic et conservé sur une page d'historique séparée avec filtres, recherche et restauration. Deux choix de conception s'écartent délibérément du projet voisin : les tâches sont identifiées par l'ObjectId natif de MongoDB plutôt que par un compteur fait main, ce qui évite une course entre lecture et écriture à l'insertion, et les mises à jour passent par PATCH avec des vérifications explicites de undefined plutôt que par un remplacement de document — parce que remplacer un document face à un booléen non nullable est exactement la façon dont on écrit une perte de données silencieuse.",
    features: [
      "Tableau kanban à trois colonnes avec glisser-déposer et boutons fléchés en secours, qui reste utilisable sur écran tactile",
      "Drapeaux par tâche (mineur, important, bloqué) affichés comme bord coloré de la carte et comme badge",
      "Projets traités comme des enregistrements à part entière : un projet vide peut exister avant d'avoir la moindre tâche",
      "Archivage groupé en un clic de la colonne Terminé, qui écarte le travail fini sans le supprimer",
      "Page d'historique séparée couvrant toutes les tâches jamais créées, avec filtres, recherche, restauration et suppression définitive",
      "État du tableau conservé dans les paramètres d'URL : une vue filtrée est partageable et survit à un rafraîchissement",
      "Mises à jour optimistes qui reviennent en arrière et affichent une erreur en ligne lorsqu'une requête échoue",
      "Confirmation en deux étapes avant toute action destructrice, indiquant combien de tâches la suppression d'un projet emporterait",
      "Script de migration de schéma convertissant le booléen d'origine en statut à trois états, idempotent et doté d'un mode dry-run",
      "25 tests unitaires couvrant les transitions de statut, les retours en arrière optimistes, les drapeaux, le glisser-déposer et le flux d'archivage",
    ],
    metrics: [
      { label: "Tests unitaires", value: "25 au vert" },
      { label: "Collections", value: "projects + tasks" },
      { label: "Écoute", value: "loopback uniquement" },
    ],
  },
  "daily-picking": {
    category: "GESTION_D_EQUIPE",
    summary:
      "Système de rotation qui décide qui anime le daily. Ordre fixe pour que personne ne repasse avant que tout le monde y soit passé, avec une logique de report qui retient un absent et le programme juste après son remplaçant. Angular 19 sur Express et MongoDB, utilisé quotidiennement par une équipe de 13 personnes avec plusieurs centaines de rotations enregistrées.",
    tagline:
      "Système de rotation des animateurs de daily, avec gestion intelligente des absences et animations de célébration",
    longDescription:
      "Daily Picking est un système de gestion de rotation d'équipe conçu pour répartir équitablement l'animation du point quotidien. Construit avec Angular 19 et un backend Node.js, il garantit que chaque membre passe avant que quiconque repasse, tout en gérant les absences grâce à un système de report intelligent. Quand quelqu'un est absent, le système passe automatiquement à la personne suivante tout en gardant l'absent en mémoire, de sorte qu'il anime immédiatement après la confirmation de son remplaçant. L'application propose des animations de célébration avec 100 particules de confettis via anime.js pour saluer la participation de chacun. Avec MongoDB Atlas pour la persistance des données, PM2 pour la gestion des processus et Nginx avec SSL, l'application est prête pour la production et déployée sur daily.bbprojet.dev.",
    features: [
      "Algorithme de rotation à ordre fixe garantissant une répartition équitable et empêchant les répétitions tant que tout le monde n'est pas passé",
      "Logique de report intelligente qui mémorise les absents et les programme juste après leur remplaçant",
      "Animations de célébration avec 100 particules de confettis pour saluer la participation",
      "Intégration MongoDB Atlas en temps réel pour un état persistant d'une session à l'autre",
      "Gestion complète des participants : ajout, suppression, activation et désactivation",
      "Statistiques détaillées par membre indiquant le nombre total de passages, de présences et d'absences",
      "Interface en dégradés avec accents violets et animations fluides",
      "Déploiement en production avec PM2 pour les redémarrages automatiques et la supervision",
      "HTTPS sécurisé avec certificats Let's Encrypt et reverse proxy Nginx",
      "Design responsive optimisé pour ordinateur et mobile",
    ],
    metrics: [
      { label: "Framework", value: "Angular 19" },
      { label: "Déploiement", value: "Production (VPS)" },
      { label: "Base de données", value: "MongoDB Atlas" },
    ],
  },
  caracheck: {
    category: "APPLICATION_MOBILE",
    summary:
      "Application multiplateforme de checklists et de tâches pour iOS, Android et le web, construite avec React Native et Expo. Thèmes de couleurs personnalisables, rappels par notification push programmés, et organisation par date pour les routines, les tâches de travail et les listes de courses.",
    tagline:
      "Application mobile multiplateforme de checklists et de gestion de tâches, construite avec React Native et Expo",
    longDescription:
      "CaraCheck est une application de gestion de tâches moderne et soignée, conçue pour iOS, Android et le web avec React Native et Expo. Elle offre une interface claire et intuitive pour organiser les routines quotidiennes, les tâches professionnelles, les listes de courses et les projets personnels. Grâce à des palettes de couleurs personnalisables en dégradés doux, chacun peut adapter ses listes pour s'y retrouver visuellement. L'application inclut des fonctionnalités avancées comme les notifications push pour les rappels de tâches, l'organisation par date pour anticiper, et une interface fluide construite avec React Navigation et Expo Router. CaraCheck prend en charge le retour haptique pour une interaction plus agréable et s'appuie sur l'écosystème Expo pour un développement et un déploiement multiplateformes sans friction.",
    features: [
      "Support multiplateforme iOS, Android et web avec une expérience utilisateur cohérente",
      "Palettes de couleurs en dégradés avec 6 thèmes personnalisables pour l'organisation visuelle",
      "Système de notifications push avec rappels programmés pour les tâches et les échéances",
      "Organisation des checklists par date pour planifier à la journée, à la semaine et au-delà",
      "Gestion intuitive des tâches avec gestes de balayage et retour haptique",
      "Plusieurs catégories de listes : routines du matin, tâches de travail, courses et projets du week-end",
      "Suivi de l'avancement en temps réel avec indicateurs visuels de progression",
      "Animations et transitions fluides avec React Native Reanimated",
      "Gestion des safe areas pour les écrans modernes et les encoches",
      "Routage par fichiers avec Expo Router pour une architecture de navigation qui passe à l'échelle",
    ],
    metrics: [
      { label: "Plateformes", value: "iOS, Android, Web" },
      { label: "Framework", value: "React Native" },
      { label: "Build", value: "Expo" },
    ],
  },
  glotech: {
    category: "PORTFOLIO",
    summary:
      "Ce site. Next.js 16 avec génération du CV en PDF côté client, auto-hébergé sur mon propre VPS derrière nginx plutôt que poussé sur une plateforme — à l'écoute sur la loopback, TLS Let's Encrypt, supervisé par PM2 et relancé automatiquement au redémarrage.",
    tagline: "Ce site. Un portfolio auto-hébergé sous Next.js 16, construit et déployé sur ma propre infrastructure",
    longDescription:
      "GloTech est le site que vous êtes en train de lire, et il est auto-hébergé plutôt que poussé sur une plateforme : il tourne comme un processus Node à l'écoute sur la loopback de mon propre VPS, derrière nginx avec un certificat Let's Encrypt, supervisé par PM2 et relancé automatiquement au redémarrage. La page CV génère un PDF côté client avec jsPDF, donc sans aller-retour serveur et sans document à maintenir en cohérence. L'interface est construite à partir de primitives Radix stylées avec Tailwind 4, ce qui garde le traitement néon cohérent sans réécrire à la main le comportement d'accessibilité de chaque menu et de chaque dialogue.",
    features: [
      "App Router avec pages pré-rendues statiquement et une route dynamique par projet",
      "Génération du CV en PDF côté client avec jsPDF, sans aller-retour serveur",
      "Menus, dialogues et navigation accessibles construits sur des primitives Radix",
      "Design system néon en Tailwind 4 basé sur des propriétés CSS personnalisées",
      "Auto-hébergé derrière nginx sur la loopback : le reverse proxy est la seule porte d'entrée",
      "Supervisé par PM2 avec une unité systemd, pour revenir tout seul après un redémarrage",
    ],
    metrics: [
      { label: "Framework", value: "Next.js 16" },
      { label: "Hébergement", value: "VPS auto-hébergé" },
      { label: "Vulnérabilités", value: "0" },
    ],
  },
}

const byLocale: Partial<Record<Locale, Record<ProjectId, ProjectContent>>> = { en, fr }

/** Falls back to English while a locale is still untranslated. */
export function getProjectContent(locale: Locale): Record<ProjectId, ProjectContent> {
  return byLocale[locale] ?? en
}
