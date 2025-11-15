"use client"

// DEPENDENCIES
import Link from "next/link"
import clsx from "clsx"

// UTILS
import { usePathname } from "next/navigation"

// ASSETS
import { comicNeue, fira } from "@/ui/fonts"

import styles from "@/ui/Navbar/navbar.module.scss"

const navLinks = [
  { name: "_Home", href: "/" },
  { name: "_Sobre_mi", href: "/about" },
  { name: "_Proyectos", href: "/works" },
]

const contact = { name: "_Contacta_me", href: "/contact" }

export default function NavLinks() {
  const { navWrapper, siteLogo, navLink, navLinkActive, contactLink } = styles
  const pathname = usePathname()
  return (
    <>
      <nav className={navWrapper}>
        <div>
          <Link href="/" className={`${comicNeue.className} ${siteLogo}`}>
            KatyaDesign
          </Link>
          {navLinks.map((link) => {
            return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(fira.className, navLink, { [navLinkActive]: pathname === link.href })}
            >
                {link.name}
            </Link>
            )
          })}
        </div>
        <div>
          <Link href={contact.href} className={`${fira.className} ${navLink} ${contactLink}`}>
            {contact.name}
          </Link>
        </div>
      </nav>
    </>
  )
}
