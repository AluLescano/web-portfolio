// DEPENDENCIES
import type { ReactNode } from "react"
import type { CSSProperties } from "@mui/material"

// COMPONENTS
import { Col } from "react-bootstrap"

import styles from "./SubLayout.module.scss"


interface Props {
  large: boolean
  isMobile: boolean
  fillRemainingSpace?: boolean
  children: ReactNode
  style?: CSSProperties
}

const SubLayout = ({
  large,
  isMobile,
  style,
  children,
  fillRemainingSpace,
}: Props) => {
  const { container, mobileContainer, containerFill } = styles

  return (
    <>
      {large ? (
        <Col
          sm={12}
          as="section"
          className={`${container} ${isMobile ? mobileContainer : ""} ${
            fillRemainingSpace ? containerFill : ""
          }`}
          style={style ? style : undefined}
        >
          {children}
        </Col>
      ) : (
        <Col
          sm={12}
          md={12}
          lg={10}
          xl={8}
          as="section"
          className={`${container}`}
        >
          {children}
        </Col>
      )}
    </>
  )
}

export default SubLayout
