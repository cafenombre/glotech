import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Terminal, Database, Server } from "lucide-react"
import { localePath, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = getDictionary(locale)
  const t = dict.home

  const services = [
    { icon: Code, ...t.services.frontend, color: "neon-pink" },
    { icon: Terminal, ...t.services.backend, color: "neon-blue" },
    { icon: Database, ...t.services.data, color: "neon-cyan" },
    { icon: Server, ...t.services.ops, color: "neon-purple" },
  ]

  const stats = [
    { value: "5", label: t.stats.apps, color: "neon-pink" },
    { value: "7", label: t.stats.domains, color: "neon-blue" },
    { value: "1", label: t.stats.vps, color: "neon-cyan" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation locale={locale} dict={dict} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-blue/10" />

        <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-neon-pink opacity-50" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-neon-blue opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-6 py-2 border-2 border-neon-pink rounded-none mb-4 neon-border-subtle">
              <span className="text-neon-pink font-sans text-sm neon-text-subtle tracking-wider">{t.eyebrow}</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold font-sans leading-tight tracking-tight">
              <span className="text-neon-pink neon-text block">{t.titleLine1}</span>
              <span className="text-neon-blue neon-text block">{t.titleLine2}</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-mono">
              {t.intro}
            </p>

            <div className="flex gap-4 justify-center pt-8">
              <Link href={localePath(locale, "projects")}>
                <Button
                  size="lg"
                  className="bg-neon-pink hover:bg-neon-pink/80 text-background font-sans font-bold neon-border group tracking-wide"
                >
                  {t.viewProjects}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={localePath(locale, "resume")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-sans font-bold bg-transparent tracking-wide"
                >
                  {t.resume}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-3 h-3 bg-neon-pink rounded-full animate-pulse shadow-[0_0_20px_currentColor]" />
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-neon-blue rounded-full animate-pulse delay-75 shadow-[0_0_20px_currentColor]" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse delay-150 shadow-[0_0_20px_currentColor]" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-neon-purple rounded-full animate-pulse delay-300 shadow-[0_0_20px_currentColor]" />
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-center mb-16 tracking-tight">
            <span className="text-neon-blue neon-text">{t.coreSystems}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 border-2 border-border bg-card hover:border-neon-pink hover:neon-border-subtle transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-neon-pink/30 group-hover:border-neon-pink transition-colors" />

                <service.icon
                  className={`h-12 w-12 text-${service.color} mb-4 group-hover:neon-text-subtle transition-all`}
                />
                <h3 className={`text-xl font-sans font-bold mb-2 text-${service.color} tracking-wide`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-mono text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-5xl md:text-6xl font-bold font-sans text-${stat.color} neon-text mb-2`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-mono text-sm tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-pink/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 p-12 border-2 border-neon-pink/50 neon-border-subtle relative">
            <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-neon-pink" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-neon-pink" />

            <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">
              <span className="text-neon-pink neon-text">{t.ctaHeading}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-mono">{t.ctaText}</p>
            <Button
              size="lg"
              className="bg-neon-blue hover:bg-neon-blue/80 text-background font-sans font-bold neon-border tracking-wide"
            >
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
