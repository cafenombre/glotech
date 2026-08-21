// Locale routing: redirects only.
//
// ⚠ This file MUST be named proxy.ts. Next.js 16 renamed middleware.ts to
// proxy.ts, and a file still called middleware.ts is ignored silently - no
// error, no warning, the redirects below simply never run.
//
// Jobs:
//   1. "/" picks a language from Accept-Language and redirects
//   2. the old unprefixed URLs (/projects, /resume, /projects/watchpact) are
//      already live and may be linked or indexed, so they redirect to /en/...
//      permanently rather than 404
//   3. the internal English directory name under /fr (/fr/projects) redirects
//      to the public French path (/fr/projets), so each page has one address
//
// Mapping the public French path onto the real route is NOT done here - see
// the rewrites in next.config.mjs and the comment there explaining why doing it
// with NextResponse.rewrite() breaks behind a reverse proxy.

import { NextResponse, type NextRequest } from "next/server"
import { DEFAULT_LOCALE, LOCALES, SEGMENTS, isLocale, type Locale } from "@/i18n/config"

/**
 * Pick the best supported locale from an Accept-Language header.
 * Compares on the primary subtag, so fr-CA and fr-BE both match fr.
 */
function detectLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE

  const preferences = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const q = params.find((p) => p.trim().startsWith("q="))
      const quality = q ? Number.parseFloat(q.split("=")[1]) : 1
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality }
    })
    .filter((p) => p.tag && p.quality > 0)
    .sort((a, b) => b.quality - a.quality)

  for (const { tag } of preferences) {
    if (tag === "*") return DEFAULT_LOCALE
    const primary = tag.split("-")[0]
    const hit = LOCALES.find((locale) => locale === primary)
    if (hit) return hit
  }

  return DEFAULT_LOCALE
}

/**
 * If this segment is a real route directory that has a different public name
 * in this locale, return that public name. /fr/projects -> "projets".
 * Returns undefined for a segment that is already public, so /fr/projets and
 * every English path pass straight through.
 */
function publicNameFor(locale: Locale, segment: string | undefined): string | undefined {
  if (!segment) return undefined
  const byLocale = SEGMENTS[segment as keyof typeof SEGMENTS]
  if (!byLocale) return undefined
  const publicSegment = byLocale[locale]
  return publicSegment === segment ? undefined : publicSegment
}

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const segments = pathname.split("/").filter(Boolean)
  const first = segments[0]

  if (first && isLocale(first)) {
    const locale = first
    const publicSegment = publicNameFor(locale, segments[1])

    if (publicSegment) {
      const url = request.nextUrl.clone()
      url.pathname = "/" + [locale, publicSegment, ...segments.slice(2)].join("/")
      return NextResponse.redirect(url, 308)
    }

    return NextResponse.next()
  }

  // No locale prefix. The root negotiates; everything else is a legacy URL that
  // was English, so it keeps pointing at English rather than moving under the
  // visitor's preferred language.
  const locale = segments.length === 0 ? detectLocale(request.headers.get("accept-language")) : DEFAULT_LOCALE

  const url = request.nextUrl.clone()
  url.pathname = "/" + [locale, ...segments].join("/")
  url.search = search
  return NextResponse.redirect(url, 308)
}

export const config = {
  // Skip Next internals, the API, and anything with a file extension.
  // Without this the redirect fires on every JS chunk and asset request.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
}
