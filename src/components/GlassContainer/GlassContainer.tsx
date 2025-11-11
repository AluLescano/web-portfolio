// DEPENDENCIES
import type { ReactNode } from "react"

// COMPONENTS
import { Container } from "react-bootstrap"
import Divider from "@mui/material/Divider"

import styles from "./GlassContainer.module.scss"

interface Props {
  title: ReactNode | string
  children: ReactNode
  className?: string
}

const GlassContainer = ({ title, children, className }: Props) => {
  const { defaultGlassPanel, defaultTitle, divider } = styles
  return (
    <Container className={`${defaultGlassPanel} ${className}`}>
      {typeof title === "string" ? (
        <h1 className={defaultTitle}>{title}</h1>
      ) : (
        title
      )}

      <Divider className={divider} />
      {children}
    </Container>
  )
}

export default GlassContainer
