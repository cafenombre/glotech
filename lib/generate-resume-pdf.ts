import { jsPDF } from "jspdf"
import { getResume, type ResumeData } from "./resume-data"
import type { Locale } from "@/i18n/config"

// Every string here used to be a literal duplicated from app/resume/page.tsx,
// and the two had already drifted. The text now comes from lib/resume-data.ts.
//
// The old version also forced a page break after the third job, which only
// worked because the French text happened to be that long. Pagination is now
// driven entirely by the space check, so a longer or shorter CV still lays out.

const MARGIN = 20
const TEXT_WIDTH = 170
const PAGE_BOTTOM = 270
const PERIOD_X = 150

// jsPDF's built-in helvetica is WinAnsi-encoded. Accented Latin characters are
// fine; emoji are not, which is why interests carry emoji and label separately
// and only the label is printed here.
export function generateResumePDF(locale: Locale = "fr") {
  const cv: ResumeData = getResume(locale)

  const doc = new jsPDF()

  const primaryColor = "#E91E8C" // darker neon pink
  const secondaryColor = "#0099CC" // darker neon blue
  const textColor = "#2C2C2C" // dark gray (much more readable)
  const accentColor = "#0088AA" // darker cyan

  let y = MARGIN

  /** Break to a new page when the next block would not fit. */
  const ensureSpace = (needed = 0) => {
    if (y + needed > PAGE_BOTTOM) {
      doc.addPage()
      y = MARGIN
    }
  }

  /** Section heading. The page styles some headings with underscores; print
   *  wants spaces, so that is the single difference between the two. */
  const sectionHeading = (text: string) => {
    y += 10
    ensureSpace(14)
    doc.setFontSize(14)
    doc.setTextColor(secondaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(text.replace(/_/g, " "), MARGIN, y)
    y += 7
  }

  const bodyText = (text: string, lineHeight = 5) => {
    doc.setFontSize(10)
    doc.setTextColor(textColor)
    doc.setFont("helvetica", "normal")
    for (const line of doc.splitTextToSize(text, TEXT_WIDTH)) {
      ensureSpace()
      doc.text(line, MARGIN, y)
      y += lineHeight
    }
  }

  // Header
  doc.setFontSize(24)
  doc.setTextColor(primaryColor)
  doc.setFont("helvetica", "bold")
  doc.text(cv.name, MARGIN, y)

  y += 8
  doc.setFontSize(12)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  doc.text(cv.jobTitle, MARGIN, y)

  y += 10
  doc.setFontSize(9)
  doc.setTextColor(accentColor)
  const contactLines = [
    cv.contact.location,
    cv.contact.email,
    cv.contact.phone,
    cv.contact.github,
    cv.contact.linkedin,
    cv.contact.website,
  ]
  for (const line of contactLines) {
    doc.text(line, MARGIN, y)
    y += 5
  }

  // Profile
  sectionHeading(cv.headings.profile)
  bodyText(cv.profile)

  // Skills
  sectionHeading(cv.headings.skills)
  for (const group of [
    { heading: cv.headings.technologies, items: cv.technologies },
    { heading: cv.headings.tools, items: cv.tools },
  ]) {
    ensureSpace(12)
    doc.setFontSize(10)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(group.heading, MARGIN, y)
    y += 5
    bodyText(group.items.join(", "))
    y += 2
  }

  // Languages
  sectionHeading(cv.headings.languages)
  doc.setFontSize(10)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  cv.languages.forEach((language, i) => {
    // Two per row, as on the page.
    doc.text(`${language.name} — ${language.level}`, i % 2 === 0 ? MARGIN : 110, y)
    if (i % 2 === 1 || i === cv.languages.length - 1) y += 5
  })

  // Experience
  sectionHeading(cv.headings.experience)
  for (const exp of cv.experiences) {
    // Keep the title, company and first bullet together rather than orphaning
    // a heading at the foot of a page.
    ensureSpace(24)

    doc.setFontSize(11)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(exp.title, MARGIN, y)

    doc.setFontSize(9)
    doc.setTextColor(textColor)
    doc.setFont("helvetica", "normal")
    doc.text(exp.period, PERIOD_X, y)

    y += 5
    doc.setFontSize(10)
    doc.setTextColor(accentColor)
    doc.text(exp.company, MARGIN, y)

    y += 5
    for (const task of exp.tasks) {
      bodyText(`• ${task}`, 4)
    }
    y += 7
  }

  // Projects
  sectionHeading(cv.headings.projects)
  for (const project of cv.projects) {
    ensureSpace(24)
    doc.setFontSize(11)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(project.name, MARGIN, y)

    y += 5
    doc.setFontSize(10)
    doc.setTextColor(accentColor)
    doc.setFont("helvetica", "normal")
    doc.text(project.url, MARGIN, y)

    y += 5
    bodyText(project.description)
    y += 3
    bodyText(`${cv.pdfTechLabel}: ${project.tech.join(", ")}`)
  }

  // Education
  sectionHeading(cv.headings.education)
  for (const entry of cv.education) {
    ensureSpace(20)
    doc.setFontSize(11)
    doc.setTextColor(primaryColor)
    doc.setFont("helvetica", "bold")
    doc.text(entry.degree, MARGIN, y)

    y += 5
    doc.setFontSize(10)
    doc.setTextColor(accentColor)
    doc.setFont("helvetica", "normal")
    doc.text(entry.school, MARGIN, y)

    y += 5
    doc.setTextColor(textColor)
    doc.text(entry.period, MARGIN, y)
    y += 5
  }

  // Interests
  sectionHeading(cv.headings.interests)
  doc.setFontSize(10)
  doc.setTextColor(textColor)
  doc.setFont("helvetica", "normal")
  for (const interest of cv.interests) {
    ensureSpace()
    doc.text(`• ${interest.label}`, MARGIN, y)
    y += 5
  }

  doc.save(cv.pdfFilename)
}
