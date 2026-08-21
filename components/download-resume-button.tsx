"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { generateResumePDF } from "@/lib/generate-resume-pdf"
import type { Locale } from "@/i18n/config"

// The only part of the CV page that needs the client: jsPDF builds the file in
// the browser, so there is no server round trip and no stored document to keep
// in sync with the page. Isolating it here keeps the rest of the page a server
// component instead of shipping the whole CV as client JS.

export function DownloadResumeButton({ locale, label }: { locale: Locale; label: string }) {
  return (
    <Button
      onClick={() => generateResumePDF(locale)}
      className="bg-neon-blue hover:bg-neon-blue/80 text-black font-mono font-bold border-2 border-neon-blue hover:scale-105 transition-transform"
    >
      <Download className="h-4 w-4 mr-2" />
      {label}
    </Button>
  )
}
