import type { ReactNode } from "react"

import styles from "./Button.module.scss"

interface Props {
  children: ReactNode
  onClick: () => void
  className?: string
}

const Button = ({ children, onClick, className }: Props) => {
  const { defaultButton } = styles
  return (
    <>
      <div className={`${defaultButton} ${className}`} onClick={onClick}>
        {children}
      </div>
    </>
  )
}

export default Button
