// COMPONENTS
import HeaderTitle from "@/ui/HeaderTitle/headerTitle"

// ASSETS
import styles from "@/ui/section.module.scss"
import TextType from "./components/TextType"

export default function Home() {
  const { section, siteLogo } = styles
  return (
    <div className={section}>
      <div>
        <HeaderTitle
          preTitle="Hola! Soy"
          title="Alessia Lescano"
          subTitle={
            <div>
              {"> "}
              <TextType
                text={["Desarrolladora Frontend", "Diseñadora Web"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
          }
          className={siteLogo}
        />
      </div>
    </div>
  )
}
