import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { StaticImageData } from "next/image"
import { ReactElement } from "react"

/**
 * Represents a single item in the sidebar
 * Can be either a file (link) or a folder (container for other items)
 */

export interface SidebarItem {
  type: 'file' | 'folder'
  name: string
  href?: string // Required for files, optional for folders
  filterValue?: string 
  children?: SidebarItem[]  // Required for folders, optional for files
  icon?: ReactElement | IconDefinition
}

/**
 * Represents a top-level section (category) in the sidebar
 */
export type SidebarSection = {
  name: string
  items: SidebarItem[]
  defaultOpen?: boolean // Whether the section should be open by default
}

/**
 * Complete configuration for the sidebar
 * Contains all sections to be displayed
 */
export type SidebarConfig = {
  sections: SidebarSection[]
}