"use client"

// CLIENT DEPENDENCIES
import { useState, ReactNode, memo } from "react"
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

// TYPES
import { SidebarConfig, SidebarItem, SidebarSection } from "@/types/sidebar"

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

// ===== CATEGORY FOLDER COMPONENT =====
interface CategoryFolderProps {
  section: SidebarSection
}

const CategoryFolder = memo(({ section }: CategoryFolderProps) => {
  const [isOpen, setIsOpen] = useState(section.defaultOpen ?? true)

  return (
    <div className={folder}>
      <div
        className={`${fira.className} ${folderToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon 
          className={folderToggleIcon} 
          icon={isOpen ? faChevronDown : faChevronRight} 
        />
        {section.name}
      </div>
      {isOpen && (
        <div className={folderContent}>
          {section.items.map((item, index) => (
            <SidebarItemRenderer key={`${item.name}-${index}`} item={item} />
          ))}
        </div>
      )}
    </div>
  )
})

CategoryFolder.displayName = 'CategoryFolder'

// ===== SUBFOLDER COMPONENT =====
interface SubFolderProps {
  item: SidebarItem
}

const SubFolder = memo(({ item }: SubFolderProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div>
      <div
        className={`${fira.className} ${subFolderToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon 
          className={folderToggleIcon} 
          icon={isOpen ? faChevronDown : faChevronRight} 
        />
        <FontAwesomeIcon className={iconClass} icon={faFolder} />
        {item.name}
      </div>
      {isOpen && (
        <div className={subFolderContent}>
          {item.children?.map((child, index) => (
            <SidebarItemRenderer key={`${child.name}-${index}`} item={child} />
          ))}
        </div>
      )}
    </div>
  )
})

SubFolder.displayName = 'SubFolder'

// ===== FILE LINK COMPONENT =====
interface FileLinkProps {
  item: SidebarItem
}

const FileLink = memo(({ item }: FileLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === item.href

  if (!item.href) {
    console.warn(`FileLink "${item.name}" missing href`)
    return null
  }

  return (
    <Link
      href={item.href}
      className={`${fira.className} ${fileLinkContainer} ${isActive ? active : ""}`}
    >
      <FontAwesomeIcon className={folderToggleIcon} icon={faChevronRight} />
      <FontAwesomeIcon className={iconClass} icon={faFolder} />
      {item.name}
    </Link>
  )
})

FileLink.displayName = 'FileLink'

// ===== ITEM RENDERER =====
const SidebarItemRenderer = ({ item }: { item: SidebarItem }) => {
  if (item.type === 'folder') {
    return <SubFolder item={item} />
  }
  return <FileLink item={item} />
}

// ===== MAIN SIDEBAR COMPONENT =====
interface SidebarProps {
  config: SidebarConfig
}

export default function Sidebar({ config }: SidebarProps) {
  return (
    <div className={sidebarContainer}>
      <div className={blankspace} />
      <div className={menuesContainer}>
        {config.sections.map((section, index) => (
          <CategoryFolder key={`${section.name}-${index}`} section={section} />
        ))}
      </div>
    </div>
  )
}