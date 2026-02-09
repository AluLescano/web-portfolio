"use client"

// CLIENT DEPENDENCIES
import { useState } from "react"

// DEPENDENCIES
import Link from "next/link"
import clsx from "clsx"

// UTILS
import { usePathname } from "next/navigation"

// COMPONENT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// ASSETS
import { comicNeue, fira } from "@/ui/fonts"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import styles from "@/ui/Bars/Navbar/navbar.module.scss"

const navLinks = [
  { name: "_Home", href: "/" },
  { name: "_Sobre_mi", href: "/about" },
  { name: "_Proyectos", href: "/works" },
]

const contact = { name: "_Contacto", href: "/contact" }

const mobileLinks = [
  ...navLinks.map((link) =>
    link.name === "_Sobre_mi" ? { ...link, href: "/about/personal" } : link,
  ),
  contact,
]

const {
  navWrapper,
  siteLogo,
  navMenu,
  navLink,
  navLinkActive,
  contactLink,
  mobileMenuModal,
  mobileMenuModalOpen,
  mobileMenuContent,
  mobileNavLink,
  mobileNavLinkActive,
} = styles

const LogoContainer = () => {
  return (
    <Link href="/" className={`${comicNeue.className} ${siteLogo}`}>
      KatyaDesign
    </Link>
  )
}

interface NavLinksProps {
  onMenuToggle?: (isOpen: boolean) => void
}

export default function NavLinks({ onMenuToggle }: NavLinksProps) {
  const pathname = usePathname()
  const [openNav, setOpenNav] = useState<boolean>(false)

  const handleMenuToggle = (value: boolean) => {
    setOpenNav(value)
    onMenuToggle?.(value)
  }

  return (
    <>
      <nav className={navWrapper}>
        <div className="hidden lg:block">
          <LogoContainer />
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
        <div className="hidden lg:block">
          <Link
            href={contact.href}
            className={clsx(fira.className, navLink, contactLink, {
              [navLinkActive]: pathname.startsWith(contact.href),
            })}
          >
            {contact.name}
          </Link>
        </div>
        <div className="block lg:hidden">
          <LogoContainer />
        </div>
        <div className="block lg:hidden">
          <FontAwesomeIcon
            className={navMenu}
            icon={openNav ? faXmark : faBars}
            onClick={() => handleMenuToggle(!openNav)}
          />
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      <div
        className={clsx(mobileMenuModal, { [mobileMenuModalOpen]: openNav })}
      >
        <div className={mobileMenuContent}>
          <p className={`${fira.className}`}># navegar a:</p>
          {mobileLinks.map((link, i) => {
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
                className={clsx(fira.className, mobileNavLink, {
                  [mobileNavLinkActive]: isActive,
                })}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
