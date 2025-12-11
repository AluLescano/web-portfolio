// TYPES
import { ReactNode } from "react"

// COMPONENTS
import Image, { StaticImageData } from "next/image"
import Button from "../Button/button"

// ASSETS
import { fira } from "@/ui/fonts"
import styles from "./project.module.scss"

interface ProjectProps {
  project: {
    id: string
    title: string
    thumbnail: string | StaticImageData
    alt: string
    description: string | ReactNode
    href: string
    externalLink?: boolean
  }
}

const Project = ({ project }: ProjectProps) => {
  const {
    container,
    projectNameContainer,
    projectContainer,
    projectThumbnail,
    projectDescription,
  } = styles
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
          <div className={`${fira.className} ${projectDescription}`}>
            {project.description}
            <div>
              <Button
                variant="primary"
                type="button"
                href={`${project.href}${!project.externalLink ? `/${project.title}` : ""}`}
                externalLink={project.externalLink}
                target={project.externalLink ? "_blank" : "_self"}
              >
                ver-proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
