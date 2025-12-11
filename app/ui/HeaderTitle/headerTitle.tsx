// TYPES
import { ReactNode } from "react"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "@/ui/HeaderTitle/headerTitle.module.scss"

interface Props {
  preTitle?: string
  title: string
  subTitle?: string | ReactNode
  className?: string
}

export default function HeaderTitle({
  preTitle,
  title,
  subTitle,
  className,
}: Props) {
  const { container, typescript, header, bash, typingText } = styles
  return (
    <div className={`${container} ${className}`}>
      {preTitle && (
        <p className={`${fira.className} ${typescript}`}>{preTitle}</p>
      )}
      <h1 className={`${fira.className} ${typescript} ${header}`}>{title}</h1>
      {subTitle && (
        <h2 className={`${fira.className} ${bash}`}>
          {subTitle}
        </h2>
      )}
    </div>
  )
}
