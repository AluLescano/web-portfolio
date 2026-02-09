"use client"

// HOOKS
import { usePathname } from "next/navigation"

// COMPONENTS
import Sidebar from "@/ui/Bars/Sidebar/sidebar"
import Tab from "@/ui/Bars/Tab/tab"
import Skills from "@/ui/Skills/skills"

// DATA
import { aboutSidebarConfig } from "@/config/sidebarConfig"
import { aboutTabConfig } from "@/config/tabConfig"

// ASSETS
import ProfilePicture from "@/assets/img/profile.jpg"
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faGitAlt,
  faSass,
  faBootstrap,
  faLinux,
  faWindows,
  faApple,
} from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"

import styles from "./about.module.scss"

const SkillsPage = () => {
  const skillsData = [
    {
      title: "Tecnologías que conozco o estoy aprendiendo",
      profile: ProfilePicture,
      username: "AluLescano",
      createdDate: "Creado hace 28 días",
      skills: [
        { icon: faCode, name: "Typescript" },
        { icon: faSass, name: "SASS" },
        { icon: faBootstrap, name: "Bootstrap" },
        { icon: faCode, name: "TailwindCss" },
        { icon: faSquareJs, name: "Javascript" },
        { icon: faReact, name: "React" },
        { icon: faCode, name: "NextJs" },
        { icon: faGitAlt, name: "Git" },
        { icon: faCss3Alt, name: "CSS3" },
        { icon: faHtml5, name: "HTML5" },
      ],
    },
    {
      title: "Programas y Sistemas Operativos",
      profile: ProfilePicture,
      username: "AluLescano",
      createdDate: "Creado hace 5 días",
      skills: [
        { icon: faWindows, name: "Windows" },
        { icon: faLinux, name: "Linux" },
        { icon: faApple, name: "Mac" },
        { icon: faCode, name: "VS Code" },
      ],
    },
  ]

  return <Skills categories={skillsData} />
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { layoutContainer, sidebar, tabs, content } = styles
  const path = usePathname()
  const isMainSection = path === "/about"
  return (
    <div className={layoutContainer}>
      <div className={`flex xl:hidden flex-col`}>
        <Sidebar config={aboutSidebarConfig} isMobile={true} />
        {children}
      </div>
      <div className={`hidden xl:flex h-full`}>
        <aside className={sidebar}>
          <Sidebar config={aboutSidebarConfig} />
        </aside>
        <aside className={tabs}>
          <Tab config={aboutTabConfig} />
          <main className={content}>
            {children}
            <div className="hidden xl:block">
              {!isMainSection && <SkillsPage />}
            </div>
          </main>
        </aside>
      </div>
    </div>
  )
}
