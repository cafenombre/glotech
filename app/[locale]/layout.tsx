import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { LOCALES, isLocale, type Locale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { alternatesFor } from "@/i18n/metadata"
import "../globals.css"

// This is the root layout. It sits inside the [locale] segment rather than at
// app/layout.tsx because <html lang> has to reflect the language of the page -
// the old hardcoded lang="en" was already wrong on the CV, which is French.

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

// Only en and fr exist. Without this an unknown prefix would be rendered on
// demand and served with HTTP 200.
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = getDictionary(locale as Locale)

  return {
    // Makes canonical and hreflang absolute. Without it Next resolves them
    // against localhost, which is useless to a crawler.
    metadataBase: new URL("https://glotech.bbprojet.dev"),
    title: dict.meta.title,
    description: dict.meta.description,
    // Home page only. Every other page overrides this with its own canonical;
    // without that, all four pages would claim /en or /fr as their address.
    alternates: alternatesFor(locale as Locale),
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale}>
      <body className={`font-mono ${orbitron.variable} ${GeistMono.variable} antialiased scanlines`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
