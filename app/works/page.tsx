"use client"

// CONTEXT
import { useFilter } from "@/context/FilterContext"

// CONFIG
import { projectsConfig } from "@/config/projectsConfig"

// COMPONENTS
import Project from "@/ui/Projects/project"

import styles from "@/works/works.module.scss"

export default function Works() {
  const { pageContainer, scrollerContainer } = styles
  const { activeFilters } = useFilter()

  const filteredProjects = activeFilters.length > 0
    ? projectsConfig.filter(project => 
        activeFilters.some(filter => project.category?.startsWith(filter))
      )
    : projectsConfig

  return (
    <div className={pageContainer}>
      <div className={`${scrollerContainer} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4`}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Project key={project.id} project={project}/>
          ))
        ) : (
          <p style={{ padding: '2rem', color: 'var(--soft-gray)' }}>
            No hay proyectos en esta categoría
          </p>
        )}
      </div>
    </div>
  )
}