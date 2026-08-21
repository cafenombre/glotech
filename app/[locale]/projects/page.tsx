import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ArrowRight } from "lucide-react"
import { getProjectContent, projectMeta, projectOrder } from "@/lib/projects-data"
import { localePath, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { alternatesFor } from "@/i18n/metadata"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale)

  return {
    title: `${dict.projects.heading} - ${dict.meta.title}`,
    description: dict.projects.intro,
    alternates: alternatesFor(locale, "projects"),
  }
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const content = getProjectContent(locale)

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={locale} dict={dict} route="projects" />

      <div className="pt-32 pb-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 tracking-tight">
                <span className="text-neon-pink neon-text">{dict.projects.heading}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-mono">
                {dict.projects.intro}
              </p>
            </div>

            <div className="grid gap-8">
              {projectOrder.map((id, i) => {
                const meta = projectMeta[id]
                const text = content[id]

                return (
                  <Link key={id} href={localePath(locale, "projects", id)} className="group">
                    <div className="p-8 border-2 border-border hover:border-neon-pink transition-all hover:neon-border-subtle bg-card relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-neon-pink/20 group-hover:border-neon-pink transition-colors" />

                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-mono text-muted-foreground mb-2 tracking-wider">
                            {`[${String(i + 1).padStart(2, "0")}]`} {text.category}
                          </div>
                          <h2 className="text-3xl font-bold font-sans text-neon-pink group-hover:neon-text-subtle transition-all tracking-tight">
                            {meta.title}
                          </h2>
                        </div>
                        <ArrowRight className="h-6 w-6 text-neon-pink opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed font-mono">{text.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {meta.techBrief.map((tech) => (
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
