// DEPENDENCIES
import Link from "next/link"

// ASSETS
import { fira } from "@/ui/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faSquareLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { faDownload } from "@fortawesome/free-solid-svg-icons"

import styles from "@/ui/Bars/Socialbar/socials.module.scss"

const leftSocialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lescanoalessia/",
    icon: faSquareLinkedin,
    className: "linkedin-color",
  },
  {
    name: "Instagram",
    href: "https://www.facebook.com/profile.php?id=100095448946002&locale=es_LA",
    icon: faInstagram,
    className: "instagram-color",
  },
]

const rightSocialLinks = [
  {
    name: "Descargar CV",
    href: "CV-LescanoAlessia.pdf",
    icon: faDownload,
    pdf: true,
  },
  {
    name: "@AluLescano",
    href: "https://github.com/AluLescano",
    icon: faGithub,
    className: "github-color",
  },
]

export default function Socials() {
  const {
    socialWrapper,
    socialGroup,
    socialItem,
    label,
    link,
    socialIcon,
    left,
    right,
  } = styles

  return (
    <>
      <div className={socialWrapper}>
        <div className={`${socialGroup} ${left}`}>
          <p className={`${fira.className} ${socialItem} ${label}`}>
            Encuentrame en:
          </p>

          {leftSocialLinks.map((linkItem) => (
            <Link
              key={linkItem.name}
              href={linkItem.href}
              className={`${socialItem} ${link} ${styles[linkItem.className]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className={socialIcon} icon={linkItem.icon} />
            </Link>
          ))}
        </div>

        <div className={`${socialGroup} ${right}`}>
          {rightSocialLinks.map((linkItem) =>
            linkItem.pdf ? (
              <a
                key={linkItem.name}
                href={linkItem.href}
                className={`${socialItem} ${link} ${styles[linkItem.className ?? ""]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.name}
                <FontAwesomeIcon className={socialIcon} icon={linkItem.icon} />
              </a>
            ) : (
              <Link
                key={linkItem.name}
                href={linkItem.href}
                className={`${socialItem} ${link} ${styles[linkItem.className ?? ""]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.name}
                <FontAwesomeIcon className={socialIcon} icon={linkItem.icon} />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}
