// COMPONENTS
import HeaderTitle from "@/ui/HeaderTitle/headerTitle"

// ASSETS
import styles from "@/ui/section.module.scss"

export default function Home() {
  const { section, siteLogo } = styles
  return (
    <div className={section}>
      <div>
        <HeaderTitle
          preTitle="Hola! Soy"
          title="Alessia Lescano"
          subTitle="> Desarrolladora Front-end"
          typeWriter
        />{" "}
      </div>
    </div>
  )
}
