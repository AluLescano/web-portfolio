import type { Metadata } from "next"

import { outfit } from "@/ui/fonts"
import LayoutShell from "@/ui/LayoutShell/layoutShell"

import "@/ui/global.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://katyadesign.com.ar"),
  title: {
    default: "KatyaDesign | Alessia Lescano — Desarrolladora Frontend & Diseñadora Web",
    template: "%s | KatyaDesign",
  },
  description:
    "Portfolio de Alessia Lescano — Desarrolladora Frontend en React, Next.js y TypeScript. Diseño y desarrollo web freelance en Buenos Aires, Argentina. Frontend developer portfolio — freelance web design & development.",
  keywords: [
    // Spanish — recruiters
    "desarrolladora frontend",
    "desarrolladora web",
    "programadora frontend Buenos Aires",
    "React developer Argentina",
    // Spanish — freelance clients
    "diseño web freelance",
    "diseño web Buenos Aires",
    "diseñadora web freelance Argentina",
    "creación de páginas web",
    "desarrollo de sitios web",
    // English — international reach
    "frontend developer",
    "frontend developer portfolio",
    "web developer Argentina",
    "freelance web designer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    // Brand
    "KatyaDesign",
    "Alessia Lescano",
  ],
  authors: [{ name: "Alessia Lescano" }],
  creator: "Alessia Lescano",
  alternates: {
    canonical: "https://katyadesign.com.ar",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://katyadesign.com.ar",
    siteName: "KatyaDesign",
    title: "KatyaDesign | Alessia Lescano — Desarrolladora Frontend",
    description:
      "Desarrolladora Frontend especializada en React, Next.js y TypeScript. Diseño web freelance en Buenos Aires. Frontend developer & freelance web designer.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KatyaDesign | Alessia Lescano",
    description:
      "Frontend developer — React, Next.js, TypeScript. Freelance web design desde Buenos Aires, Argentina.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
