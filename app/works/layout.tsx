"use client"

// CONFIG
import { worksSidebarConfig } from "@/config/sidebarConfig"
import { aboutTabConfig } from "@/config/tabConfig"

// CONTEXT
import { FilterProvider, useFilter } from "@/context/FilterContext"

// COMPONENTS
import Sidebar from "@/ui/Bars/Sidebar/sidebar"
import Tab from "@/ui/Bars/Tab/tab"

import styles from "./works.module.scss"

function WorksLayoutContent({ children }: { children: React.ReactNode }) {
  const { layoutContainer, sidebar, tabs, content } =
    styles
  const { activeFilters, toggleFilter } = useFilter()

  return (
    <>
      <div className={`flex xl:hidden flex-col`}>
        <Sidebar
          config={worksSidebarConfig}
          mode="filter"
          onFilterChange={toggleFilter}
          activeFilters={activeFilters}
          isMobile={true}
        />
        {children}
      </div>
      <div className={`hidden xl:flex ${layoutContainer}`}>
        <aside className={sidebar}>
          <Sidebar
            config={worksSidebarConfig}
            mode="filter"
            onFilterChange={toggleFilter}
            activeFilters={activeFilters}
          />
        </aside>
        <aside className={tabs}>
          <Tab config={aboutTabConfig} />
          <main className={content}>{children}</main>
        </aside>
      </div>
    </>
  )
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FilterProvider>
      <WorksLayoutContent>{children}</WorksLayoutContent>
    </FilterProvider>
  )
}
