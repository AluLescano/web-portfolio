// COMPONENTS
import ContactInterface from "@/ui/Mailto/mailto"

// ASSETS
import styles from "./contact.module.scss"

export default function Contact() {
  const { section, blankspace } = styles
  return (
    <div className={section}>
      <div className="hidden lg:block">
        <div className={blankspace} />
      </div>
      <div>
        <ContactInterface email="alessiaklescano@gmail.com" showCopy={true} />
      </div>
    </div>
  )
}
