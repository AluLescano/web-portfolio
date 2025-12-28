"use client"

// CLIENT DEPENDENCIES
import { useState, memo } from "react"
import { usePathname } from "next/navigation"

// UTILS
import isFontAwesomeIcon from "@/utils/isFontAwesomeIcon"

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
  checkboxIcon,
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
  mode?: "navigation" | "filter"
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
}

const CategoryFolder = memo(
  ({
    section,
    mode = "navigation",
    onFilterChange,
    activeFilters = [],
  }: CategoryFolderProps) => {
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
              <SidebarItemRenderer
                key={`${item.name}-${index}`}
                item={item}
                mode={mode}
                onFilterChange={onFilterChange}
                activeFilters={activeFilters}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)

CategoryFolder.displayName = "CategoryFolder"

// ===== SUBFOLDER COMPONENT =====
interface SubFolderProps {
  item: SidebarItem
  mode: "navigation" | "filter"
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
}

const SubFolder = memo(
  ({ item, mode, onFilterChange, activeFilters = [] }: SubFolderProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const isActive = mode === "filter" && item.filterValue 
      ? activeFilters.includes(item.filterValue) 
      : false

    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    const handleCheckboxChange = () => {
      if (mode === "filter" && item.filterValue && onFilterChange) {
        onFilterChange(item.filterValue)
      }
    }

    return (
      <div>
        <div className={`${fira.className} ${subFolderToggle} ${isActive ? active : ""}`}>
          {mode === "filter" && item.filterValue && (
            <input
              type="checkbox"
              className={checkboxIcon}
              checked={isActive}
              onChange={handleCheckboxChange}
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <FontAwesomeIcon
            className={folderToggleIcon}
            icon={isOpen ? faChevronDown : faChevronRight}
            onClick={handleClick}
          />
          <FontAwesomeIcon className={iconClass} icon={faFolder} />
          <span onClick={handleClick}>{item.name}</span>
        </div>
        {isOpen && (
          <div className={subFolderContent}>
            {item.children?.map((child, index) => (
              <SidebarItemRenderer
                key={`${child.name}-${index}`}
                item={child}
                mode={mode}
                onFilterChange={onFilterChange}
                activeFilters={activeFilters}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)

SubFolder.displayName = "SubFolder"

// ===== FILE LINK/FILTER COMPONENT =====
interface FileLinkProps {
  item: SidebarItem
  mode: "navigation" | "filter"
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
}

const FileLink = memo(
  ({ item, mode, onFilterChange, activeFilters = [] }: FileLinkProps) => {
    const pathname = usePathname()

    // Determine if active based on mode
    const isActive =
      mode === "navigation"
        ? pathname === item.href
        : item.filterValue ? activeFilters.includes(item.filterValue) : false

    // Render the appropriate icon
    const renderIcon = () => {
      if (!item.icon) {
        return <FontAwesomeIcon className={iconClass} icon={faFolder} />
      }

      if (isFontAwesomeIcon(item.icon)) {
        return <FontAwesomeIcon className={iconClass} icon={item.icon} />
      }

      // It's a React element
      return item.icon
    }

    // Navigation mode - use Link
    if (mode === "navigation" && item.href) {
      return (
        <Link
          href={item.href}
          className={`${fira.className} ${fileLinkContainer} ${isActive ? active : ""}`}
        >
          <FontAwesomeIcon className={folderToggleIcon} icon={faChevronRight} />
          {renderIcon()}
          {item.name}
        </Link>
      )
    }

    // Filter mode - use checkbox
    return (
      <label
        className={`${fira.className} ${fileLinkContainer} ${isActive ? active : ""}`}
      >
        <input
          type="checkbox"
          className={checkboxIcon}
          checked={isActive}
          onChange={() => item.filterValue && onFilterChange?.(item.filterValue)}
        />
        {renderIcon()}
        {item.name}
      </label>
    )
  }
)

FileLink.displayName = "FileLink"

// ===== ITEM RENDERER =====
interface ItemRendererProps {
  item: SidebarItem
  mode: "navigation" | "filter"
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
}

const SidebarItemRenderer = ({
  item,
  mode,
  onFilterChange,
  activeFilters,
}: ItemRendererProps) => {
  if (item.type === "folder") {
    return (
      <SubFolder
        item={item}
        mode={mode}
        onFilterChange={onFilterChange}
        activeFilters={activeFilters}
      />
    )
  }
  return (
    <FileLink
      item={item}
      mode={mode}
      onFilterChange={onFilterChange}
      activeFilters={activeFilters}
    />
  )
}

// ===== MAIN SIDEBAR COMPONENT =====
interface SidebarProps {
  config: SidebarConfig
  mode?: "navigation" | "filter"
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
}

export default function Sidebar({
  config,
  mode = "navigation",
  onFilterChange,
  activeFilters = [],
}: SidebarProps) {
  return (
    <div className={sidebarContainer}>
      <div className={blankspace} />
      <div className={menuesContainer}>
        {config.sections.map((section, index) => (
          <CategoryFolder
            key={`${section.name}-${index}`}
            section={section}
            mode={mode}
            onFilterChange={onFilterChange}
            activeFilters={activeFilters}
          />
        ))}
      </div>
    </div>
  )
}