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

import styles from "@/ui/Socialbar/socials.module.scss"

const socialLinks = [
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

const gutHib = {
  name: "@AluLescano",
  href: "https://github.com/AluLescano",
  icon: faGithub,
  className: "github-color"
}

export default function Socials() {
  const { socialWrapper, socialGroup, socialItem, label, link, socialIcon, left, right } = styles
  
  return (
    <>
      <div className={socialWrapper}>
        
        <div className={`${socialGroup} ${left}`}>
          <p className={`${fira.className} ${socialItem} ${label}`}>
            Encuentrame en:
          </p>
          
          {socialLinks.map((linkItem) => (
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
          <Link
            href={gutHib.href}
            className={`${fira.className} ${socialItem} ${link} ${gutHib.className} ${styles[gutHib.className]}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {gutHib.name}
            <FontAwesomeIcon className={socialIcon} icon={gutHib.icon} />
          </Link>
        </div>
        
      </div>
    </>
  )
}
