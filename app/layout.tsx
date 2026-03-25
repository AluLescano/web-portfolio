import type { Metadata } from "next"

import { outfit } from "@/ui/fonts"
import LayoutShell from "@/ui/LayoutShell/layoutShell"

import "@/ui/global.css"

export const metadata: Metadata = {
  title: {
    default: "KatyaDesign | Alessia Lescano — Desarrolladora Frontend",
    template: "%s | KatyaDesign",
  },
  description:
    "Portfolio de Alessia Lescano — Desarrolladora Frontend especializada en React, Next.js y TypeScript. Diseño web freelance en Buenos Aires, Argentina.",
  keywords: [
    "desarrolladora frontend",
    "React",
    "Next.js",
    "TypeScript",
    "diseño web",
    "freelance",
    "Buenos Aires",
    "portfolio",
  ],
  authors: [{ name: "Alessia Lescano" }],
  creator: "Alessia Lescano",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "KatyaDesign",
    title: "KatyaDesign | Alessia Lescano — Desarrolladora Frontend",
    description:
      "Portfolio de Alessia Lescano — Desarrolladora Frontend especializada en React, Next.js y TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KatyaDesign | Alessia Lescano",
    description:
      "Desarrolladora Frontend especializada en React, Next.js y TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
