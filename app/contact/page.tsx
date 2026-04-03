import type { Metadata } from "next"

// COMPONENTS
import ContactInterface from "@/ui/Mailto/mailto"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactá a Alessia Lescano para proyectos de diseño y desarrollo web freelance. Disponible para trabajos en React, Next.js y TypeScript desde Buenos Aires, Argentina. Get in touch — freelance web developer & designer.",
}

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
