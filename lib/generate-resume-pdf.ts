import { jsPDF } from "jspdf"

export function generateResumePDF() {
  const doc = new jsPDF()

  // Set up fonts and colors
  const primaryColor = "#E91E8C" // darker neon pink
  const secondaryColor = "#0099CC" // darker neon blue
  const textColor = "#2C2C2C" // dark gray (much more readable)
  const accentColor = "#0088AA" // darker cyan

  let yPosition = 20

  // Header
  doc.setFontSize(24)
  doc.setTextColor(primaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("TRISTAN GLOTIN", 20, yPosition)

  yPosition += 8
  doc.setFontSize(12)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  doc.text("Développeur C# .NET", 20, yPosition)

  // Contact information
  yPosition += 10
  doc.setFontSize(9)
  doc.setTextColor(accentColor)
  const contactInfo = [
    "Toulouse, France",
    "tristan.glotin@gmail.com",
    "0662832451",
    "github.com/cafenombre",
    "linkedin.com/in/tristan-glotin-248296108",
    "bbprojet.dev",
  ]

  contactInfo.forEach((info) => {
    doc.text(info, 20, yPosition)
    yPosition += 5
  })

  // Section: PROFIL
  yPosition += 5
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("PROFIL", 20, yPosition)

  yPosition += 7
  doc.setFontSize(10)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  const profileText =
    "Développeur .NET bilingue français–anglais, passionné et polyvalent, avec une forte expertise dans le développement backend et la création d'outils métiers sur mesure. Curieux et toujours en veille technologique, j'aime concevoir des solutions fiables, élégantes et pérennes — en équipe comme en autonomie."
  const profileLines = doc.splitTextToSize(profileText, 170)
  doc.text(profileLines, 20, yPosition)
  yPosition += profileLines.length * 5

  // Section: COMPÉTENCES
  yPosition += 5
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("COMPÉTENCES", 20, yPosition)

  yPosition += 7
  doc.setFontSize(10)
  doc.setTextColor(primaryColor)
  doc.text("TECHNOLOGIES", 20, yPosition)

  yPosition += 5
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  doc.text("C#, VB.NET, TypeScript, .NET (4-8), Angular, Node.js", 20, yPosition)

  yPosition += 7
  doc.setTextColor(primaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("OUTILS & MÉTHODES", 20, yPosition)

  yPosition += 5
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  doc.text("SQL, MongoDB, Revit API, Git, Azure DevOps, Clean Architecture", 20, yPosition)

  // Section: LANGUES
  yPosition += 10
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("LANGUES", 20, yPosition)

  yPosition += 7
  doc.setFontSize(10)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  doc.text("Français — Natif", 20, yPosition)
  doc.text("Anglais — Bilingue", 110, yPosition)

  // Section: EXPÉRIENCES PROFESSIONNELLES
  yPosition += 10
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("EXPÉRIENCES PROFESSIONNELLES", 20, yPosition)

  const experiences = [
    {
      title: ".NET Developer",
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
      title: "Junior Web Developer",
      company: "Institut Vajra Yogini · Toulouse",
      period: "SEPT. 2018 – AOÛT 2019",
      tasks: [
        "Développement en autonomie d'une application calendrier en PHP Symfony",
        "Gestion des réservations d'hébergements, réunions et conférences via un planning interactif",
      ],
    },
  ]

  experiences.forEach((exp) => {
    yPosition += 7

    // Check if we need a new page
    if (yPosition > 270) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFontSize(11)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(exp.title, 20, yPosition)

    doc.setFontSize(9)
    doc.setTextColor(textColor)
    doc.setFont("helvetica", "normal")
    doc.text(exp.period, 150, yPosition)

    yPosition += 5
    doc.setFontSize(10)
    doc.setTextColor(accentColor)
    doc.text(exp.company, 20, yPosition)

    yPosition += 5
    doc.setTextColor(textColor)
    exp.tasks.forEach((task) => {
      const taskLines = doc.splitTextToSize(`• ${task}`, 170)
      taskLines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 4
      })
    })
  })

  // Add page 2 for remaining experiences and projects
  doc.addPage()
  yPosition = 20

  // Remaining experiences
  const remainingExperiences = [
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
  ]

  remainingExperiences.forEach((exp) => {
    yPosition += 7

    if (yPosition > 270) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFontSize(11)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(exp.title, 20, yPosition)

    doc.setFontSize(9)
    doc.setTextColor(textColor)
    doc.setFont("helvetica", "normal")
    doc.text(exp.period, 150, yPosition)

    yPosition += 5
    doc.setFontSize(10)
    doc.setTextColor(accentColor)
    doc.text(exp.company, 20, yPosition)

    yPosition += 5
    doc.setTextColor(textColor)
    exp.tasks.forEach((task) => {
      const taskLines = doc.splitTextToSize(`• ${task}`, 170)
      taskLines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, 20, yPosition)
        yPosition += 4
      })
    })
  })

  // Section: PROJETS
  yPosition += 10
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("PROJETS", 20, yPosition)

  yPosition += 7
  doc.setFontSize(11)
  doc.setTextColor(primaryColor)
  doc.text("WatchPact", 20, yPosition)

  yPosition += 5
  doc.setFontSize(10)
  doc.setTextColor(accentColor)
  doc.setFont("helvetica", "normal")
  doc.text("bbprojet.dev", 20, yPosition)

  yPosition += 5
  doc.setTextColor(textColor)
  const projectText = "Conception d'une plateforme web et mobile de partage de listes de visionnage."
  const projectLines = doc.splitTextToSize(projectText, 170)
  doc.text(projectLines, 20, yPosition)
  yPosition += projectLines.length * 5

  yPosition += 3
  doc.text("Technologies: .NET 8 API, MongoDB, Angular, Google OAuth2", 20, yPosition)

  // Section: FORMATION
  yPosition += 10
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("FORMATION", 20, yPosition)

  yPosition += 7
  doc.setFontSize(11)
  doc.setTextColor(primaryColor)
  doc.text("Licence & Master 1 ICONE", 20, yPosition)

  yPosition += 5
  doc.setFontSize(10)
  doc.setTextColor(accentColor)
  doc.setFont("helvetica", "normal")
  doc.text("Université de La Rochelle", 20, yPosition)

  yPosition += 5
  doc.setTextColor(textColor)
  doc.text("SEPT. 2013 – AVR. 2017", 20, yPosition)

  // Section: CENTRES D'INTÉRÊT
  yPosition += 10
  doc.setFontSize(14)
  doc.setTextColor(secondaryColor)
  doc.setFont("helvetica", "bold")
  doc.text("CENTRES D'INTÉRÊT", 20, yPosition)

  yPosition += 7
  doc.setFontSize(10)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  const interests = [
    "Cinéma et storytelling",
    "Escalade (intérieure et extérieure)",
    "Bande dessinée",
    "Café & culture numérique",
  ]
  interests.forEach((interest) => {
    doc.text(`• ${interest}`, 20, yPosition)
    yPosition += 5
  })

  // Save the PDF
  doc.save("Tristan_Glotin_CV.pdf")
}
