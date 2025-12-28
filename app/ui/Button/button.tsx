import { CSSProperties, ReactNode } from "react"
import Link from "next/link"

import styles from "./button.module.scss"

interface ButtonProps {
  variant?:
    | "primary"
    | "primary-white"
    | "primary-alt"
    | "secondary"
    | "secondary-white"
    | "tertiary"
  size?: "medium" | "large"
  width?: "long" | ""
  type?: "button" | "submit" | "reset"
  icon?: ReactNode
  className?: string | CSSProperties
  children: ReactNode
  href?: string
  target?: "_self" | "_blank" | "_parent" | "_top"
  externalLink?: boolean
  onClick?: () => void
  disabledButton?: boolean
}

const Button = ({
  variant = "primary",
  size = "medium",
  width = "",
  type = "button",
  icon,
  className,
  children,
  href,
  target,
  externalLink,
  onClick,
  disabledButton,
}: ButtonProps) => {
  const {
    button,
    primary,
    secondary,
    tertiary,
    primaryWhite,
    primaryAlt,
    secondaryWhite,
    disabled,
    medium,
    large,
    long,
    withIcon,
    buttonIcon,
    buttonText,
  } = styles

  const variantClass = () => {
    switch (variant) {
      case "primary":
        return primary
      case "primary-white":
        return primaryWhite
      case "primary-alt":
        return primaryAlt
      case "secondary":
        return secondary
      case "secondary-white":
        return secondaryWhite
      case "tertiary":
        return tertiary
      default:
        return primary
    }
  }

  const sizeClass = () => {
    return size === "large" ? large : medium
  }

  const widthClass = () => {
    return width === "long" ? long : ""
  }

  const ButtonContent = () => {
    return (
      <>
        {icon && <span className={buttonIcon}>{icon}</span>}
        <span className={buttonText}>{children}</span>
      </>
    )
  }

  const genericClasses = `${button} ${variantClass()} ${sizeClass()} ${widthClass()} ${icon ? withIcon : ""} ${className ?? ""} ${disabledButton ? disabled : ""}`

  if (href && !externalLink) {
    return (
      <Link href={href} target={target} className={genericClasses}>
        {ButtonContent()}
      </Link>
    )
  } else if (href && externalLink) {
    return (
      <a href={href} target={target} className={genericClasses}>
        {ButtonContent()}
      </a>
    )
  } else {
    return (
      <button type={type} onClick={onClick} className={genericClasses}>
        {ButtonContent()}
      </button>
    )
  }
}

export default Button
