"use client"

// CLIENT DEPENDENCIES
import { usePathname } from "next/navigation"

// COMPONENTS
import Navbar from "@/ui/Navbar/navbar"
import Socials from "@/ui/Socialbar/socials"
import Footer from "@/ui/Footer/footer"
import Image, { StaticImageData } from "next/image"

// ASSETS
import { outfit, fira } from "@/ui/fonts"
import home from "@/assets/img/background/background-home.png"
import about from "@/assets/img/background/background-aboutme.png"
import works from "@/assets/img/background/background-works.png"
import contact from "@/assets/img/background/background-contactme.png"

import "@/ui/global.css"

const bgImages: Record<string, StaticImageData> = {
  "/": home,
  "/about": about,
  "/works": works,
  "/contact": contact,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const bgImage = bgImages[pathname] || home

  return (
    <html lang="es-la">
      <body className={`${outfit.className}`}>
        <Image
          src={bgImage}
          fill
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Navbar />
        {children}
        <Socials />
        <Footer webname="KatyaDesign" />
      </body>
    </html>
  )
}
