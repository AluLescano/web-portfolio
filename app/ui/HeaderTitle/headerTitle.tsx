// ASSETS
import { fira } from "@/ui/fonts"

import styles from "@/ui/HeaderTitle/headerTitle.module.scss"

interface Props {
  preTitle?: string
  title: string
  subTitle?: string
  typeWriter?: boolean
  className?: string
}

export default function HeaderTitle({
  preTitle,
  title,
  subTitle,
  typeWriter,
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
          {subTitle}{typeWriter && <span className={typingText}>_</span>}
        </h2>
      )}
    </div>
  )
}
