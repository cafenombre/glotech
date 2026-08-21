// Locale configuration and URL segment mapping.
//
// Deliberately dependency-free: proxy.ts imports this on every request, and
// pulling in the project or CV content there would put all of it in the proxy
// bundle for no reason.
//
// The French site uses French paths - /fr/projets, /fr/cv - but the App Router
// only knows the real directory names (projects, resume). The mapping lives in
// segments.json because next.config.mjs needs it too, to generate the rewrites
// that turn the public path into the real route, and a plain .mjs config cannot
// import from TypeScript. One file, both readers, no drift.
//
// `localePath` builds the public form on the way out; the rewrites in
// next.config.mjs resolve it on the way in. They are inverses.

import segmentsJson from "./segments.json"

export const LOCALES = ["en", "fr"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

/** Real route directory -> public segment, per locale. */
export const SEGMENTS: Record<keyof typeof segmentsJson, Record<Locale, string>> = segmentsJson

export type RouteKey = keyof typeof segmentsJson

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

/**
 * Build a public href. `localePath("fr", "projects", "watchpact")` gives
 * "/fr/projets/watchpact"; `localePath("en")` gives "/en".
 */
export function localePath(locale: Locale, route?: RouteKey, ...rest: string[]): string {
  const parts: string[] = [locale]
  if (route) parts.push(SEGMENTS[route][locale])
  parts.push(...rest)
  return "/" + parts.join("/")
}
