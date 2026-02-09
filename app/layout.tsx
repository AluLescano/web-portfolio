"use client"

// CLIENT DEPENDENCIES
import { useState } from "react"
import { usePathname } from "next/navigation"

// COMPONENTS
import Navbar from "@/ui/Bars/Navbar/navbar"
import Socials from "@/ui/Bars/Socialbar/socials"
import Footer from "@/ui/Footer/footer"
import Image, { StaticImageData } from "next/image"

// ASSETS
import { outfit } from "@/ui/fonts"
import home from "@/assets/img/background/background-home.webp"
import about from "@/assets/img/background/background-aboutme.webp"
import works from "@/assets/img/background/background-works.webp"
import contact from "@/assets/img/background/background-contact.webp"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Get matching background image
  const basePaths = Object.keys(bgImages)
  basePaths.sort((a, b) => b.length - a.length)
  const matchingPath = basePaths.find((path) => pathname.startsWith(path))
  const bgImage = (
    matchingPath ? bgImages[matchingPath] : home
  ) as StaticImageData

  return (
    <html lang="es-la">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body 
        className={`${outfit.className}`}
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar onMenuToggle={setMobileMenuOpen} />
        <div>
          <div className={mobileMenuOpen ? "hidden lg:block" : ""}>
            {children}
          </div>
          <Socials />
          <Footer webname="KatyaDesign" />
        </div>
      </body>
    </html>
  )
}
