"use client"

// HOOKS
import { usePathname } from "next/navigation"

// COMPONENTS
import Sidebar from "@/ui/Bars/Sidebar/sidebar"
import Tab from "@/ui/Bars/Tab/tab"
import Skills from "@/ui/Skills/skills"

// DATA
import { worksSidebarConfig } from "@/config/sidebarConfig"
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

import styles from "./works.module.scss"

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { layoutContainer, sidebar, tabs, content } = styles
  const path = usePathname()
  const isMainSection = path === "/works"
  return (
    <div className={layoutContainer}>
      <aside className={sidebar}>
        <Sidebar config={worksSidebarConfig} />
      </aside>
      <aside className={tabs}>
        <Tab config={aboutTabConfig} />
        <main className={content}>{children}</main>
      </aside>
    </div> 
  )
}
