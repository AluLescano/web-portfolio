"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image, { StaticImageData } from "next/image"

import Navbar from "@/ui/Bars/Navbar/navbar"
import Socials from "@/ui/Bars/Socialbar/socials"
import Footer from "@/ui/Footer/footer"

import home from "@/assets/img/background/background-home.webp"
import about from "@/assets/img/background/background-aboutme.webp"
import works from "@/assets/img/background/background-works.webp"
import contact from "@/assets/img/background/background-contact.webp"

const bgImages: Record<string, StaticImageData> = {
  "/": home,
  "/about": about,
  "/works": works,
  "/contact": contact,
}

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const basePaths = Object.keys(bgImages)
  basePaths.sort((a, b) => b.length - a.length)
  const matchingPath = basePaths.find((path) => pathname.startsWith(path))
  const bgImage = (matchingPath ? bgImages[matchingPath] : home) as StaticImageData

  return (
    <div style={{ position: "relative", minHeight: "100dvh", alignContent:"center" }}>
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        quality={80}
        placeholder="blur"
        sizes="100vw"
        style={{ objectFit: "cover"}}
      />
      <Navbar onMenuToggle={setMobileMenuOpen} />
      <div>
        <div className={mobileMenuOpen ? "hidden lg:block" : ""}>
          {children}
        </div>
        <Socials />
        <div className="hidden lg:block">
          <Footer webname="KatyaDesign" />
        </div>
      </div>
    </div>
  )
}
