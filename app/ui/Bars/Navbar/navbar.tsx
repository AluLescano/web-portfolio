"use client"

// DEPENDENCIES
import Link from "next/link"
import clsx from "clsx"

// UTILS
import { usePathname } from "next/navigation"

// ASSETS
import { comicNeue, fira } from "@/ui/fonts"

import styles from "@/ui/Bars/Navbar/navbar.module.scss"

const navLinks = [
  { name: "_Home", href: "/" },
  { name: "_Sobre_mi", href: "/about" },
  { name: "_Proyectos", href: "/works" },
]

const contact = { name: "_Contacto", href: "/contact" }

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
            
            let isActive = false
            if (link.href === "/") {
              isActive = pathname === "/"
            } else {
              isActive = pathname.startsWith(link.href)
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(fira.className, navLink, {
                  [navLinkActive]: isActive, 
                })}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        <div>
          <Link
            href={contact.href}
            className={clsx(fira.className, navLink, contactLink, {
              [navLinkActive]: pathname.startsWith(contact.href)
            })}
          >
            {contact.name}
          </Link>
        </div>
      </nav>
    </>
  )
}