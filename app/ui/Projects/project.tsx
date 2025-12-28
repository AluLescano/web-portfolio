// TYPES
import { ReactElement, ReactNode } from "react"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

// UTILS
import isFontAwesomeIcon from "@/utils/isFontAwesomeIcon"

// COMPONENTS
import Image, { StaticImageData } from "next/image"
import Button from "../Button/button"

// ASSETS
import { fira } from "@/ui/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./project.module.scss"

interface ProjectProps {
  project: {
    id: string
    title: string
    thumbnail: string | StaticImageData
    alt: string
    description: string | ReactNode
    button?: string
    disabled?: boolean
    href: string
    externalLink?: boolean
    icon?: ReactElement | IconDefinition
  }
}

const Project = ({ project }: ProjectProps) => {
  const {
    container,
    projectNameContainer,
    projectContainer,
    projectThumbnail,
    projectDescription,
    iconClass,
  } = styles

  // Render the appropriate icon
  const renderIcon = () => {
    if (!project.icon) {
      return null
    }

    if (isFontAwesomeIcon(project.icon)) {
      return <FontAwesomeIcon className={iconClass} icon={project.icon} />
    }

    // It's a React element
    return project.icon
  }

  return (
    <>
      <div className={container}>
        <div className={`${fira.className} ${projectNameContainer}`}>
          <p>
            <span>{`Project ${project.id}`}</span> {`// ${project.title}`}
          </p>
        </div>
        <div className={projectContainer}>
          {project.thumbnail && (
            <Image
              style={{
                width: "100%",
                minHeight: "150px",
                maxHeight: "150px",
                objectFit: "cover",
              }}
              className={projectThumbnail}
              src={project.thumbnail}
              alt={project.alt}
            />
          )}
          <div className={iconClass}>{renderIcon()}</div>
          <div className={`${fira.className} ${projectDescription}`}>
            {project.description}
            <div>
              <Button
                variant="primary"
                type="button"
                href={`${project.href}${!project.externalLink ? `/${project.title}` : ""}`}
                externalLink={project.externalLink}
                target={project.externalLink ? "_blank" : "_self"}
                disabledButton={project.disabled ?? undefined}
              >
                {project.button ?? "ver-proyecto"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
