import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { DEFAULT_LOCALE, localePath } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

// not-found.tsx cannot read route params - React renders it in place of the
// page, without the matched segment - so this cannot know which language the
// visitor was on. It uses the default locale, which is why proxy.ts sends
// unprefixed URLs to a locale first: by the time anything 404s, the visitor is
// already on a prefixed path and the surrounding layout has the right lang.
export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE)

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/10 via-transparent to-neon-blue/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center space-y-8 p-12 border-2 border-neon-pink/50 relative">
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-neon-pink" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-neon-pink" />

          <div className="text-7xl md:text-8xl font-bold font-sans text-neon-pink neon-text">{dict.notFound.code}</div>
          <h1 className="text-2xl md:text-3xl font-bold font-sans text-neon-blue neon-text tracking-tight">
            {dict.notFound.heading}
          </h1>
          <p className="text-muted-foreground leading-relaxed font-mono">{dict.notFound.text}</p>

          <Link href={localePath(DEFAULT_LOCALE)}>
            <Button
              size="lg"
              className="bg-neon-pink hover:bg-neon-pink/80 text-background font-sans font-bold group tracking-wide"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {dict.notFound.back}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
