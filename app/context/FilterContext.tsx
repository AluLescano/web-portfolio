"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface FilterContextType {
  activeFilters: string[]
  toggleFilter: (filter: string) => void
  clearFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      if (prev.includes(filter)) {
        // Remove filter if already active
        return prev.filter(f => f !== filter)
      } else {
        // Add filter if not active
        return [...prev, filter]
      }
    })
  }

  const clearFilters = () => {
    setActiveFilters([])
  }

  return (
    <FilterContext.Provider value={{ activeFilters, toggleFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider")
  }
  return context
}