import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

/** @type {import('next').NextConfig} */
// Plain .mjs on purpose: a next.config.ts requires the `typescript` package at
// runtime, which is a devDependency and therefore absent from a production
// install. Next.js worked around that by npm-installing it during startup,
// which failed the first config load after each deploy.

const here = dirname(fileURLToPath(import.meta.url))

// Shared with i18n/config.ts, which imports the same file. Read with fs rather
// than an import attribute so this config stays plain, portable ESM.
const segments = JSON.parse(readFileSync(join(here, "i18n", "segments.json"), "utf8"))

/**
 * Map the public French paths onto the real route directories:
 *   /fr/projets      -> /fr/projects
 *   /fr/projets/:id  -> /fr/projects/:id
 *   /fr/cv           -> /fr/resume
 *
 * This deliberately does NOT live in proxy.ts. NextResponse.rewrite() builds
 * its destination from nextUrl, whose protocol comes from X-Forwarded-Proto.
 * Behind nginx that makes the destination https://localhost:3002/..., which
 * Next treats as a *different origin* and tries to fetch over TLS from a
 * plain-HTTP server - EPROTO, then HTTP 500. It worked on loopback only
 * because no X-Forwarded-Proto is set there. Config rewrites are resolved
 * inside the router, so no origin comparison and no network hop happens.
 */
function localizedRewrites() {
  const rules = []
  for (const [route, byLocale] of Object.entries(segments)) {
    for (const [locale, publicSegment] of Object.entries(byLocale)) {
      if (publicSegment === route) continue
      rules.push({ source: `/${locale}/${publicSegment}`, destination: `/${locale}/${route}` })
      rules.push({ source: `/${locale}/${publicSegment}/:path*`, destination: `/${locale}/${route}/:path*` })
    }
  }
  return rules
}

const nextConfig = {
  async rewrites() {
    return localizedRewrites()
  },
}

export default nextConfig
