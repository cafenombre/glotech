import type { Metadata } from "next"
import { LOCALES, localePath, type Locale, type RouteKey } from "./config"

/**
 * canonical + hreflang for one page, in every language.
 *
 * Always emits the public path, so the French canonical is /fr/projets rather
 * than the internal /fr/projects that proxy.ts rewrites to - otherwise the
 * canonical would point at a URL that 308s straight back.
 */
export function alternatesFor(locale: Locale, route?: RouteKey, ...rest: string[]): Metadata["alternates"] {
  return {
    canonical: localePath(locale, route, ...rest),
    languages: Object.fromEntries(LOCALES.map((l) => [l, localePath(l, route, ...rest)])),
  }
}
