"use client"

import { ReactNode } from "react"
import { SidebarConfig } from "@/types/sidebar"
import { TabRouteMap } from "@/types/tab"

import Sidebar from "@/ui/Bars/Sidebar/sidebar"
import Tab from "@/ui/Bars/Tab/tab"

import styles from "./sectionLayout.module.scss"

interface SectionLayoutProps {
  children: ReactNode
  sidebarConfig: SidebarConfig
  tabConfig: TabRouteMap
  sidebarMode?: "navigation" | "filter"
  isMobileSidebar?: boolean
  onFilterChange?: (filter: string) => void
  activeFilters?: string[]
  desktopExtra?: ReactNode
  onSidebarExpandedChange?: (isExpanded: boolean) => void
  mobileContentClassName?: string
}

export default function SectionLayout({
  children,
  sidebarConfig,
  tabConfig,
  sidebarMode = "navigation",
  onFilterChange,
  activeFilters = [],
  desktopExtra,
  onSidebarExpandedChange,
  mobileContentClassName,
}: SectionLayoutProps) {
  const { layoutContainer, sidebar, tabs, content } = styles

  return (
    <div className={layoutContainer}>
      <div className="flex xl:hidden flex-col">
        <Sidebar
          config={sidebarConfig}
          mode={sidebarMode}
          isMobile={true}
          onFilterChange={onFilterChange}
          activeFilters={activeFilters}
          onExpandedChange={onSidebarExpandedChange}
        />
        <div className={mobileContentClassName}>
          {children}
        </div>
      </div>
      <div className="hidden xl:flex h-full">
        <aside className={sidebar}>
          <Sidebar
            config={sidebarConfig}
            mode={sidebarMode}
            onFilterChange={onFilterChange}
            activeFilters={activeFilters}
          />
        </aside>
        <aside className={tabs}>
          <Tab config={tabConfig} />
          <main className={content}>
            {children}
            {desktopExtra}
          </main>
        </aside>
      </div>
    </div>
  )
}
