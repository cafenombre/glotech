"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/resume", label: "RESUME" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-neon-pink/30 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-sans tracking-tight">
            <span className="text-neon-pink neon-text-subtle">GLO</span>
            <span className="text-neon-blue neon-text-subtle">TECH</span>
          </Link>

          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-sans text-sm transition-all hover:text-neon-pink hover:neon-text-subtle tracking-wider font-semibold",
                  pathname === link.href ? "text-neon-pink neon-text-subtle" : "text-muted-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
