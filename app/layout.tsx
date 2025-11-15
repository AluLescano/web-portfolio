"use client"

// CLIENT DEPENDENCIES
import { usePathname } from "next/navigation"

// COMPONENTS
import Navbar from "@/ui/Bars/Navbar/navbar"
import Socials from "@/ui/Bars/Socialbar/socials"
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
  // 1. Get all the base paths from bgImages
  const basePaths = Object.keys(bgImages)
  // 2. Sort them by length, descending (e.g., ["/contact", "/about", "/works", "/"])
  basePaths.sort((a, b) => b.length - a.length)
  // 3. Find the first (longest) base path that the current pathname starts with
  const matchingPath = basePaths.find((path) => pathname.startsWith(path))
  // 4. Use the matching path to get the image, or default to home
  const bgImage = (
    matchingPath ? bgImages[matchingPath] : home
  ) as StaticImageData

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
