// COMPONENTS
import Project from "@/ui/Projects/project"

// CONFIG
import { projectsConfig } from "@/config/projectsConfig"

// ASSETS
import styles from "@/works/works.module.scss"

export default function projectPage() {
  const { pageContainer, scrollerContainer } = styles
  return (
    <div className={pageContainer}>
      <div className={scrollerContainer}>
            Esto es un test
      </div>
    </div>
  )
}
