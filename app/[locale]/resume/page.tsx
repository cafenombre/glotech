import { Navigation } from "@/components/navigation"
import { Mail, Github, Linkedin, Globe, MapPin, Phone } from "lucide-react"
import { DownloadResumeButton } from "@/components/download-resume-button"
import { getResume } from "@/lib/resume-data"
import type { Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { alternatesFor } from "@/i18n/metadata"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const cv = getResume(locale)
  const dict = getDictionary(locale)

  return {
    title: `${dict.nav.resume} - ${cv.name}`,
    description: cv.profile,
    alternates: alternatesFor(locale, "resume"),
  }
}

export default async function ResumePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const cv = getResume(locale)

  const contactLinkClass = "flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors group"
  const iconClass = "h-4 w-4 group-hover:animate-pulse"
  const chipClass =
    "px-3 py-1 text-sm font-mono border-2 border-neon-blue/60 text-neon-blue bg-neon-blue/10 hover:bg-neon-blue/20 transition-all cursor-default"
  const panelClass =
    "p-4 border-2 border-neon-pink/50 bg-black/50 font-mono text-sm hover:border-neon-cyan/70 hover:bg-neon-pink/5 transition-all relative overflow-hidden group"
  const sectionHeadingClass = "text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text"
  const entryClass = "border-l-2 border-neon-pink/50 pl-6 hover:border-neon-pink transition-colors"

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} dict={dict} route="resume" />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-4">
                    <span className="text-neon-pink neon-text-strong">{cv.name}</span>
                  </h1>
                  <p className="text-xl text-gray-200 font-mono">{cv.jobTitle}</p>
                </div>
                <DownloadResumeButton locale={locale} label={cv.downloadLabel} />
              </div>

              <div className="flex flex-wrap gap-6 text-sm font-mono">
                <div className="flex items-center gap-2 text-neon-cyan">
                  <MapPin className="h-4 w-4" />
                  {cv.contact.location}
                </div>
                <a href={`mailto:${cv.contact.email}`} className={contactLinkClass}>
                  <Mail className={iconClass} />
                  {cv.contact.email}
                </a>
                <a href={`tel:${cv.contact.phone}`} className={contactLinkClass}>
                  <Phone className={iconClass} />
                  {cv.contact.phone}
                </a>
                <a
                  href={`https://${cv.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <Github className={iconClass} />
                  {cv.contact.github}
                </a>
                <a
                  href={`https://${cv.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <Linkedin className={iconClass} />
                  {cv.contact.linkedinLabel}
                </a>
                <a
                  href={`https://${cv.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClass}
                >
                  <Globe className={iconClass} />
                  {cv.contact.website}
                </a>
              </div>
            </div>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.profile}</h2>
              <p className="text-gray-200 leading-relaxed text-lg">{cv.profile}</p>
            </section>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.skills}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { heading: cv.headings.technologies, items: cv.technologies },
                  { heading: cv.headings.tools, items: cv.tools },
                ].map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-xl font-orbitron font-bold mb-4 text-neon-pink neon-text">{group.heading}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span key={skill} className={chipClass}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.languages}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cv.languages.map((language) => (
                  <div key={language.name} className={panelClass}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="relative z-10">
                      <span className="text-neon-pink font-bold">{language.name}</span>
                      <span className="text-gray-200"> — {language.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.experience}</h2>
              <div className="space-y-12">
                {cv.experiences.map((exp) => (
                  <div key={`${exp.company}-${exp.period}`} className={entryClass}>
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text">{exp.title}</h3>
                      <span className="text-sm font-mono text-gray-500 font-bold">{exp.period}</span>
                    </div>
                    <div className="text-lg text-neon-blue mb-4 font-mono">{exp.company}</div>
                    <ul className="space-y-2">
                      {exp.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-3 text-gray-200">
                          <span className="text-neon-pink mt-1 font-bold">▹</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.projects}</h2>
              <div className="space-y-12">
                {cv.projects.map((project) => (
                  <div key={project.name} className={entryClass}>
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text mb-2">{project.name}</h3>
                    <div className="text-lg text-neon-blue mb-2 font-mono">{project.url}</div>
                    <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono border-2 border-neon-cyan/60 text-neon-cyan bg-neon-cyan/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className={sectionHeadingClass}>{cv.headings.education}</h2>
              <div className="space-y-12">
                {cv.education.map((entry) => (
                  <div key={entry.degree} className={entryClass}>
                    <h3 className="text-2xl font-bold font-orbitron text-neon-pink neon-text mb-2">{entry.degree}</h3>
                    <div className="text-lg text-neon-blue mb-2 font-mono">{entry.school}</div>
                    <div className="text-sm font-mono text-gray-500">{entry.period}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={sectionHeadingClass}>{cv.headings.interests}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cv.interests.map((interest) => (
                  <div key={interest.label} className={`${panelClass} text-gray-200`}>
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <div className="relative z-10">
                      {interest.emoji} {interest.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
