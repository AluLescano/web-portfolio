import type { Metadata } from "next"
import { outfit } from "@/ui/fonts"
import "@/ui/global.css"

export const metadata: Metadata = {
  title: "KatyaDesign",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-la">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  )
}
