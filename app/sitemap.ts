import type { MetadataRoute } from "next"
import { LOCALES, localePath, type RouteKey } from "@/i18n/config"
import { projectOrder } from "@/lib/projects-data"

const BASE_URL = "https://glotech.bbprojet.dev"

// Emits the public (localized) URLs - /fr/projets, not the internal /fr/projects
// that proxy.ts rewrites to. Each entry carries alternates so a crawler that
// finds the French page knows the English one is the same page in another
// language.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { route?: RouteKey; rest?: string[]; priority: number }[] = [
    { priority: 1 },
    { route: "projects", priority: 0.8 },
    { route: "resume", priority: 0.8 },
    ...projectOrder.map((id) => ({ route: "projects" as RouteKey, rest: [id], priority: 0.6 })),
  ]

  return LOCALES.flatMap((locale) =>
    pages.map((page) => ({
      url: BASE_URL + localePath(locale, page.route, ...(page.rest ?? [])),
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, BASE_URL + localePath(l, page.route, ...(page.rest ?? []))]),
        ),
      },
    })),
  )
}
