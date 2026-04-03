"use client"

import { useState } from "react"

import { worksSidebarConfig } from "@/config/sidebarConfig"
import { worksTabConfig } from "@/config/tabConfig"

import { FilterProvider, useFilter } from "@/context/FilterContext"
import SectionLayout from "@/ui/SectionLayout/sectionLayout"

import styles from "./works.module.scss"

function WorksLayoutContent({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, sidebarClosed } = styles
  const { activeFilters, toggleFilter } = useFilter()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <SectionLayout
      sidebarConfig={worksSidebarConfig}
      tabConfig={worksTabConfig}
      sidebarMode="filter"
      onFilterChange={toggleFilter}
      activeFilters={activeFilters}
      onSidebarExpandedChange={setIsSidebarExpanded}
      mobileContentClassName={`flex-1 ${isSidebarExpanded ? sidebarOpen : sidebarClosed}`}
    >
      {children}
    </SectionLayout>
  )
}

export default function WorksLayoutClient({
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
