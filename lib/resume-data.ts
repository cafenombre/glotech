// Single source of truth for the CV.
//
// The resume page and the PDF generator each held their own copy of every
// string, and they had already drifted apart: different heading spelling,
// emoji present in one and absent from the other, LinkedIn shown as a label in
// one and as a full URL in the other. Adding a language to that would have
// meant four copies.
//
// Where the two renderings genuinely differ, the difference is now explicit in
// the data rather than an accident:
//   - headings carry the page's underscore styling; the PDF strips it
//   - interests keep emoji and label apart, because jsPDF's built-in helvetica
//     is WinAnsi-encoded and cannot render emoji at all
//   - contact entries carry both a short label and the full value for print

import type { Locale } from "@/i18n/config"

export type Experience = {
  title: string
  company: string
  period: string
  tasks: string[]
}

export type ResumeData = {
  /** Filename used by doc.save(). */
  pdfFilename: string
  name: string
  jobTitle: string
  downloadLabel: string
  contact: {
    location: string
    email: string
    phone: string
    github: string
    /** Shown on the page. */
    linkedinLabel: string
    /** Printed in the PDF, where a bare "LinkedIn" would be useless. */
    linkedin: string
    website: string
  }
  headings: {
    profile: string
    skills: string
    technologies: string
    tools: string
    languages: string
    experience: string
    projects: string
    education: string
    interests: string
  }
  profile: string
  technologies: string[]
  tools: string[]
  languages: { name: string; level: string }[]
  experiences: Experience[]
  projects: { name: string; url: string; description: string; tech: string[] }[]
  education: { degree: string; school: string; period: string }[]
  /** Emoji kept separate: the PDF cannot render it. */
  interests: { emoji: string; label: string }[]
  /** PDF-only label prefixing a project's stack. */
  pdfTechLabel: string
}

const fr: ResumeData = {
  pdfFilename: "Tristan_Glotin_CV.pdf",
  name: "TRISTAN GLOTIN",
  jobTitle: "Développeur C# .NET",
  downloadLabel: "TÉLÉCHARGER_PDF",
  contact: {
    location: "Toulouse, France",
    email: "tristan.glotin@gmail.com",
    phone: "0662832451",
    github: "github.com/cafenombre",
    linkedinLabel: "LinkedIn",
    linkedin: "linkedin.com/in/tristan-glotin-248296108",
    website: "bbprojet.dev",
  },
  headings: {
    profile: "PROFIL",
    skills: "COMPÉTENCES",
    technologies: "TECHNOLOGIES",
    tools: "OUTILS & MÉTHODES",
    languages: "LANGUES",
    experience: "EXPÉRIENCES_PROFESSIONNELLES",
    projects: "PROJETS",
    education: "FORMATION",
    interests: "CENTRES_D'INTÉRÊT",
  },
  profile:
    "Développeur .NET bilingue français–anglais, passionné et polyvalent, avec une forte expertise dans le développement backend et la création d'outils métiers sur mesure. Curieux et toujours en veille technologique, j'aime concevoir des solutions fiables, élégantes et pérennes — en équipe comme en autonomie.",
  technologies: ["C#", "VB.NET", "TypeScript", ".NET (4-8)", "Angular", "Node.js"],
  tools: ["SQL", "MongoDB", "Revit API", "Git", "Azure DevOps", "Clean Architecture"],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Bilingue" },
  ],
  experiences: [
    {
      title: "Développeur .NET",
      company: "Stonal · Toulouse",
      period: "FÉV. 2024 – PRÉSENT",
      tasks: [
        "Conception et développement d'add-ins Revit en C# (.NET 8) pour la numérisation et le contrôle qualité de maquettes BIM",
        "Recueil des besoins, définition d'architectures logicielles et mise en production",
        "Collaboration avec des équipes internationales (anglais quotidien)",
        "Mise en place de bonnes pratiques de code et documentation technique",
      ],
    },
    {
      title: "Lead Développeur .NET",
      company: "Techform · Toulouse",
      period: "FÉV. 2020 – MARS 2024",
      tasks: [
        "Création d'API de modélisation 2D pour configurateurs sur mesure",
        "Développement et maintenance de configurateurs métiers (fenêtres, portails, garde-corps…)",
        "Intégration ERP via Web Services (API REST)",
        "Structuration d'architectures de données et optimisation multi-projets",
        "Gestion d'équipe et pilotage via Azure DevOps",
      ],
    },
    {
      title: "Développeur Web Junior",
      company: "Institut Vajra Yogini · Toulouse",
      period: "SEPT. 2018 – AOÛT 2019",
      tasks: [
        "Développement en autonomie d'une application calendrier en PHP Symfony",
        "Gestion des réservations d'hébergements, réunions et conférences via un planning interactif",
      ],
    },
    {
      title: "Développeur Junior C#",
      company: "EB-Trans IT · Luxembourg",
      period: "OCT. 2017 – JUIL. 2018",
      tasks: [
        "Maintenance et évolution d'une application interne (transport)",
        "Gestion de fichiers automatisée et modules complémentaires",
        "Expérience en AngularJS, MicroServices, .NET",
      ],
    },
    {
      title: "Développeur PHP Junior",
      company: "Goeres Group · Luxembourg",
      period: "AVR. 2017 – SEPT. 2017",
      tasks: ["Développement d'intranet (gestion RH, réservations, inventaire)"],
    },
    {
      title: "Développeur Junior ASP.Net",
      company: "Creative Spread · Leeds (UK)",
      period: "AVR. 2016 – JUIL. 2016",
      tasks: ["Développement d'une application web de gestion de projets en C# .NET"],
    },
  ],
  projects: [
    {
      name: "WatchPact",
      url: "bbprojet.dev",
      description: "Conception d'une plateforme web et mobile de partage de listes de visionnage.",
      tech: [".NET 8 API", "MongoDB", "Angular", "Google OAuth2"],
    },
  ],
  education: [
    {
      degree: "Licence & Master 1 ICONE",
      school: "Université de La Rochelle",
      period: "SEPT. 2013 – AVR. 2017",
    },
  ],
  interests: [
    { emoji: "🎬", label: "Cinéma et storytelling" },
    { emoji: "🧗", label: "Escalade (intérieure et extérieure)" },
    { emoji: "✍️", label: "Bande dessinée" },
    { emoji: "☕", label: "Café & culture numérique" },
  ],
  pdfTechLabel: "Technologies",
}

// Written to anglophone CV conventions rather than translated sentence by
// sentence: section names, "FEB 2024 - PRESENT" date style, job titles
// normalised to English, and bullets phrased the way an English-speaking
// recruiter expects to read them.
const en: ResumeData = {
  pdfFilename: "Tristan_Glotin_Resume.pdf",
  name: "TRISTAN GLOTIN",
  jobTitle: "C# .NET Developer",
  downloadLabel: "DOWNLOAD_PDF",
  contact: {
    location: "Toulouse, France",
    email: "tristan.glotin@gmail.com",
    phone: "0662832451",
    github: "github.com/cafenombre",
    linkedinLabel: "LinkedIn",
    linkedin: "linkedin.com/in/tristan-glotin-248296108",
    website: "bbprojet.dev",
  },
  headings: {
    profile: "PROFILE",
    skills: "SKILLS",
    technologies: "TECHNOLOGIES",
    tools: "TOOLS & METHODS",
    languages: "LANGUAGES",
    experience: "PROFESSIONAL_EXPERIENCE",
    projects: "PROJECTS",
    education: "EDUCATION",
    interests: "INTERESTS",
  },
  profile:
    "Bilingual French/English .NET developer, versatile and hands-on, with deep backend experience and a track record of building bespoke business tools. Curious and always learning, I like designing solutions that are reliable, elegant and built to last — on a team or on my own.",
  technologies: ["C#", "VB.NET", "TypeScript", ".NET (4-8)", "Angular", "Node.js"],
  tools: ["SQL", "MongoDB", "Revit API", "Git", "Azure DevOps", "Clean Architecture"],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Bilingual" },
  ],
  experiences: [
    {
      title: ".NET Developer",
      company: "Stonal · Toulouse",
      period: "FEB 2024 – PRESENT",
      tasks: [
        "Design and development of Revit add-ins in C# (.NET 8) for BIM model digitisation and quality control",
        "Requirements gathering, software architecture design and production releases",
        "Working with international teams, in English day to day",
        "Introduced coding standards and technical documentation practices",
      ],
    },
    {
      title: "Lead .NET Developer",
      company: "Techform · Toulouse",
      period: "FEB 2020 – MAR 2024",
      tasks: [
        "Built 2D modelling APIs powering bespoke product configurators",
        "Developed and maintained business configurators for windows, gates and railings",
        "ERP integration through REST web services",
        "Structured data architectures and optimised delivery across several projects at once",
        "Team management and planning through Azure DevOps",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Institut Vajra Yogini · Toulouse",
      period: "SEP 2018 – AUG 2019",
      tasks: [
        "Independently built a calendar application in PHP Symfony",
        "Handled accommodation, meeting and conference bookings through an interactive scheduler",
      ],
    },
    {
      title: "Junior C# Developer",
      company: "EB-Trans IT · Luxembourg",
      period: "OCT 2017 – JUL 2018",
      tasks: [
        "Maintained and extended an internal transport management application",
        "Automated file handling and delivered supporting modules",
        "Worked with AngularJS, microservices and .NET",
      ],
    },
    {
      title: "Junior PHP Developer",
      company: "Goeres Group · Luxembourg",
      period: "APR 2017 – SEP 2017",
      tasks: ["Built an intranet covering HR management, bookings and inventory"],
    },
    {
      title: "Junior ASP.NET Developer",
      company: "Creative Spread · Leeds (UK)",
      period: "APR 2016 – JUL 2016",
      tasks: ["Built a project management web application in C# .NET"],
    },
  ],
  projects: [
    {
      name: "WatchPact",
      url: "bbprojet.dev",
      description: "Designed and built a web and mobile platform for sharing film and TV watchlists.",
      tech: [".NET 8 API", "MongoDB", "Angular", "Google OAuth2"],
    },
  ],
  education: [
    {
      degree: "BSc & MSc Year 1 - ICONE",
      school: "University of La Rochelle",
      period: "SEP 2013 – APR 2017",
    },
  ],
  interests: [
    { emoji: "🎬", label: "Cinema and storytelling" },
    { emoji: "🧗", label: "Climbing (indoor and outdoor)" },
    { emoji: "✍️", label: "Comics and graphic novels" },
    { emoji: "☕", label: "Coffee & digital culture" },
  ],
  pdfTechLabel: "Technologies",
}

const byLocale: Partial<Record<Locale, ResumeData>> = { fr, en }

export function getResume(locale: Locale): ResumeData {
  return byLocale[locale] ?? fr
}
