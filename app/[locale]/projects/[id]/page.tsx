import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectContent, projectMeta, projectOrder, type ProjectId } from "@/lib/projects-data"
import { LOCALES, localePath, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { alternatesFor } from "@/i18n/metadata"
import type { Metadata } from "next"

// One page per project per language, all pre-rendered at build time. Generated
// from the data rather than hand-listed: dynamicParams = false below turns any
// pair missing from this matrix into a hard 404, so a project added to
// projectOrder must appear here automatically.
export function generateStaticParams() {
  return LOCALES.flatMap((locale) => projectOrder.map((id) => ({ locale, id })))
}

// Only the pairs above exist. Without this, Next still renders unknown ids on
// demand and notFound() produces a soft 404 - the not-found shell served with
// HTTP 200, which search engines treat as a real page.
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  const meta = projectMeta[id as ProjectId]
  const content = getProjectContent(locale)[id as ProjectId]
  if (!meta || !content) return {}

  return {
    title: `${meta.title} - ${getDictionary(locale).meta.title}`,
    description: content.tagline,
    alternates: alternatesFor(locale, "projects", id),
  }
}

// Next.js 16 makes route params async. Reading params.id synchronously silently
// yields undefined, so every project fell through to the not-found branch while
// still returning HTTP 200 - broken in a way a status-code check cannot see.
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>
}) {
  const { locale, id } = await params
  const dict = getDictionary(locale)
  const meta = projectMeta[id as ProjectId]
  const project = getProjectContent(locale)[id as ProjectId]

  if (!meta || !project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation locale={locale} dict={dict} route="projects" rest={[id]} />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href={localePath(locale, "projects")}
              className="inline-flex items-center text-neon-blue hover:text-neon-pink transition-colors mb-8 font-mono group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:animate-pulse" />
              {dict.projects.back}
            </Link>

            <div className="mb-12">
              <div className="text-sm font-orbitron text-neon-cyan mb-4 tracking-wider">{project.category}</div>
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 text-neon-pink">
                {meta.title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">{project.tagline}</p>
            </div>

            <div className="mb-12 aspect-video bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 border-2 border-neon-pink/50 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="absolute inset-0 scanlines"></div>
              <div className="text-center relative z-10">
                <div className="text-6xl font-orbitron text-neon-pink mb-2 group-hover:scale-110 transition-transform">
                  {meta.title.split("_")[0]}
                </div>
                <div className="text-gray-500 font-mono tracking-widest">{dict.projects.preview}</div>
              </div>
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan"></div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">
                {dict.projects.overview}
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.longDescription}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">
                {dict.projects.techStack}
              </h2>
              <div className="flex flex-wrap gap-3">
                {meta.techFull.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 font-mono border-2 border-neon-pink/70 text-neon-pink bg-neon-pink/10 hover:bg-neon-pink/20 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">
                {dict.projects.keyFeatures}
              </h2>
              <div className="space-y-4">
                {project.features.map((feature, i) => (
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
              <h2 className="text-3xl font-bold font-orbitron mb-6 text-neon-blue neon-text">
                {dict.projects.metrics}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-6 border-2 border-neon-pink/50 bg-black/50 relative overflow-hidden group hover:border-neon-cyan/70 transition-all"
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative z-10">
                      <div className="text-3xl font-bold font-orbitron text-neon-pink mb-2 group-hover:scale-110 transition-transform">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500 font-mono tracking-wider">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {meta.links?.live && (
                <Link href={meta.links.live} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-neon-pink hover:bg-neon-pink/80 text-black font-mono font-bold border-2 border-neon-pink hover:scale-105 transition-transform">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {dict.projects.liveDemo}
                  </Button>
                </Link>
              )}
              {meta.links?.github && (
                <Link href={meta.links.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/20 font-mono bg-black hover:scale-105 transition-transform font-bold"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {dict.projects.viewCode}
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
