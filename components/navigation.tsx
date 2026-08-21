import Link from "next/link"
import { cn } from "@/lib/utils"
import { LOCALES, localePath, type Locale, type RouteKey } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"

// Deliberately NOT using usePathname(). proxy.ts rewrites /fr/projets to the
// real route /fr/projects, so on a rewritten page the server renders one path
// and the browser reports the other - the active link and the language switcher
// would disagree, and hydration would warn. Each page states which route it is
// instead, which is information the page already has, and keeps this a server
// component.

export function Navigation({
  locale,
  dict,
  route,
  rest = [],
}: {
  locale: Locale
  dict: Dictionary
  /** Which section this page belongs to; omitted on the home page. */
  route?: RouteKey
  /** Extra path segments, e.g. the project id on a detail page. */
  rest?: string[]
}) {
  const links: { key: RouteKey | "home"; href: string; label: string }[] = [
    { key: "home", href: localePath(locale), label: dict.nav.home },
    { key: "projects", href: localePath(locale, "projects"), label: dict.nav.projects },
    { key: "resume", href: localePath(locale, "resume"), label: dict.nav.resume },
  ]

  const activeKey: RouteKey | "home" = route ?? "home"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-neon-pink/30 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={localePath(locale)} className="text-2xl font-bold font-sans tracking-tight">
            <span className="text-neon-pink neon-text-subtle">GLO</span>
            <span className="text-neon-blue neon-text-subtle">TECH</span>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "font-sans text-sm transition-all hover:text-neon-pink hover:neon-text-subtle tracking-wider font-semibold",
                  link.key === activeKey ? "text-neon-pink neon-text-subtle" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Stays on the same page when switching: a project detail page in
                French links to the same project in English, not to the home page. */}
            <div
              className="flex items-center border-2 border-neon-blue/40 font-sans text-xs tracking-wider"
              aria-label={dict.nav.switchLanguage}
            >
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  href={localePath(l, route, ...rest)}
                  hrefLang={l}
                  aria-current={l === locale ? "true" : undefined}
                  className={cn(
                    "px-2 py-1 font-bold transition-all",
                    l === locale
                      ? "bg-neon-blue/20 text-neon-blue neon-text-subtle"
                      : "text-muted-foreground hover:text-neon-pink",
                  )}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
