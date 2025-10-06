import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "GloTech - Cyberpunk Portfolio",
  description: "Next-generation development portfolio",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono ${orbitron.variable} ${GeistMono.variable} antialiased scanlines`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
