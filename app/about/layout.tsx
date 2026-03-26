"use client"

import SectionLayout from "@/ui/SectionLayout/sectionLayout"
import Skills from "@/ui/Skills/skills"

import { aboutSidebarConfig } from "@/config/sidebarConfig"
import { aboutTabConfig } from "@/config/tabConfig"

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

const SkillsPage = () => {
  const skillsData = [
    {
      title: "Tecnologías que conozco o estoy aprendiendo",
      profile: ProfilePicture,
      username: "AluLescano",
      createdDate: "Actualizado hace 3 meses",
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
      createdDate: "Actualizado hace 5 días",
      skills: [
        { icon: faWindows, name: "Windows" },
        { icon: faLinux, name: "Linux" },
        { icon: faApple, name: "Mac" },
        { icon: faCode, name: "VS Code" },
        { icon: faCode, name: "Figma" },
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
  return (
    <SectionLayout
      sidebarConfig={aboutSidebarConfig}
      tabConfig={aboutTabConfig}
      desktopExtra={
        <div className="hidden xl:block">
          <SkillsPage />
        </div>
      }
    >
      {children}
    </SectionLayout>
  )
}
