"use client"

// CLIENT DEPENDENCIES
import { useState } from "react"

// COMPONENTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../Button/button"

// ASSETS
import { fira } from "@/ui/fonts"
import {
  faCheck,
  faEnvelope,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons"

import styles from "./mailto.module.scss"
interface EmailProvider {
  id: "gmail" | "outlook" | "yahoo" | "default"
  label: string
  style: "primary" | "secondary" | "primary-white" | "primary-alt" | "secondary-white" | "tertiary"
}

interface ContactInterfaceProps {
  email: string
  providers?: EmailProvider[]
  title?: string
  subject?: string
  showCopy?: boolean
}

const DEFAULT_PROVIDERS: EmailProvider[] = [
  { id: "gmail", label: "Gmail", style: "primary" },
  { id: "outlook", label: "Outlook", style: "secondary-white" },
  { id: "yahoo", label: "Yahoo", style: "secondary-white" },
  { id: "default", label: "Default App", style: "secondary-white" },
]

const ContactInterface = ({
  email,
  providers = DEFAULT_PROVIDERS,
  title = "Envíame un Email!",
  subject,
  showCopy,
}: ContactInterfaceProps) => {
  const {
    modalContainer,
    titleSection,
    buttonSection,
    emailButton,
    copyButton,
    clipboard,
  } = styles
  const [copied, setCopied] = useState<boolean>(false)

  const handleEmailClick = (method: EmailProvider["id"] | "copy"): void => {
    const encodedSubject = encodeURIComponent(subject ?? "")

    switch (method) {
      case "gmail":
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}`,
          "_blank"
        )
        break
      case "outlook":
        window.open(
          `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodedSubject}`,
          "_blank"
        )
        break
      case "yahoo":
        window.open(
          `https://compose.mail.yahoo.com/?to=${email}&subject=${encodedSubject}`,
          "_blank"
        )
        break
      case "default":
        window.open(`mailto:${email}?subject=${encodedSubject}`, "_self")
        break
      case "copy":
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
  }

  return (
    <>
      <div className={modalContainer}>
        <div className={titleSection}>
          <h2 className={fira.className}>{title}</h2>
        </div>
        <div className={buttonSection}>
          {providers.map((provider) => (
            <Button
              key={provider.id}
              variant={provider.style}
              className={emailButton}
              size="large"
              onClick={() => handleEmailClick(provider.id)}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{provider.label}</span>
            </Button>
          ))}

          {showCopy && (
            <div className={clipboard}>
              <Button
                variant="secondary-white"
                className={copyButton}
                onClick={() => handleEmailClick("copy")}
              >
                {copied ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faClipboard} />
                )}
                {copied ? "Copiado!" : "Copiar"}
              </Button>
              <div className="hidden md:block">
                <span className={fira.className}>{email}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactInterface
