import type { Locale } from "./config"
import { en, type Dictionary } from "./dictionaries/en"
import { fr } from "./dictionaries/fr"

// Both dictionaries are plain objects, so this is a synchronous lookup rather
// than the dynamic import the Next.js docs show. At two locales and a few
// kilobytes each there is nothing to gain from splitting them, and staying
// synchronous keeps every page a server component with no await.

const dictionaries: Record<Locale, Dictionary> = { en, fr }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en
}

export type { Dictionary }
