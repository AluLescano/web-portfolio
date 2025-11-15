"use client"

// CLIENT DEPENDENCIES
import { useState, ReactNode } from "react"
import { usePathname } from "next/navigation"

// COMPONENTS
import Link from "next/link"

// ASSETS
import { fira } from "@/ui/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronRight,
  faFolder,
} from "@fortawesome/free-solid-svg-icons"

import styles from "@/ui/Bars/Sidebar/sidebar.module.scss"

const {
  folder,
  folderToggle,
  folderToggleIcon,
  folderContent,
  subFolderToggle,
  subFolderContent,
  fileLinkContainer,
  iconClass,
  active,
  sidebarContainer,
  blankspace,
  menuesContainer,
} = styles

interface CategoryFolderProps {
  name: string
  children: ReactNode
}

const CategoryFolder = ({ name, children }: CategoryFolderProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={folder}>
      <div
        className={`${fira.className} ${folderToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FontAwesomeIcon className={folderToggleIcon} icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon className={folderToggleIcon} icon={faChevronRight} />
        )}
        {name}
      </div>
      {isOpen && <div className={folderContent}>{children}</div>}
    </div>
  )
}

interface SubFolderProps {
  name: string
  children: ReactNode
}

const SubFolder = ({ name, children }: SubFolderProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <div
        className={`${fira.className} ${subFolderToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FontAwesomeIcon className={folderToggleIcon} icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon className={folderToggleIcon} icon={faChevronRight} />
        )}
        <FontAwesomeIcon className={iconClass} icon={faFolder} />
        {name}
      </div>
      {isOpen && <div className={subFolderContent}>{children}</div>}
    </div>
  )
}

interface FileLinkProps {
  name: string
  href: string
}

const FileLink = ({ name, href }: FileLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${fira.className} ${fileLinkContainer} ${isActive ? active : ""}`}
    >
      <FontAwesomeIcon className={folderToggleIcon} icon={faChevronRight} />
      <FontAwesomeIcon className={iconClass} icon={faFolder} />
      {name}
    </Link>
  )
}

// --- Your Sidebar ---
export default function Sidebar() {
  return (
    <>
      <div className={sidebarContainer}>
        <div className={blankspace} />
        <div className={menuesContainer}>
          <CategoryFolder name="info-personal">
            <FileLink name="bio" href="/about/personal" />
            <SubFolder name="educacion">
              <FileLink name="estudios" href="/about/personal/study" />
              <FileLink
                name="certificados"
                href="/about/personal/certificates"
              />
            </SubFolder>
          </CategoryFolder>

          <CategoryFolder name="info-profesional">
            <FileLink name="trayectoria" href="/about/professional" />
          </CategoryFolder>
        </div>
      </div>
    </>
  )
}
