"use client"

import { usePathname, useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

import { TabRouteMap } from "@/types/tab"
import { fira } from "@/ui/fonts"

import styles from "@/ui/Bars/Tab/tab.module.scss"

const { container, tabItem, tabLabel, tabClose } = styles

interface TabProps {
  config: TabRouteMap
  closeRedirect?: string // Optional: custom redirect path when closing
}

export default function Tab({ config, closeRedirect }: TabProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Get the current tab configuration
  const currentTab = config[pathname]

  // If no tab config exists for current route, don't render anything
  if (!currentTab) {
    return null
  }

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Determine where to navigate
    let targetPath: string

    if (closeRedirect) {
      // Use custom redirect if provided
      targetPath = closeRedirect
    } else {
      // Extract main section from current path
      // e.g., /about/personal/study -> /about
      const pathSegments = pathname.split("/").filter(Boolean)
      targetPath = pathSegments.length > 0 ? `/${pathSegments[0]}` : "/"
    }

    router.push(targetPath)
  }

  return (
    <div className={container}>
      <div className={`${fira.className} ${tabItem}`}>
        <span className={tabLabel}>{currentTab.label}</span>
        {currentTab.closable && (
          <FontAwesomeIcon
            className={tabClose}
            onClick={handleClose}
            icon={faXmark}
          />
        )}
      </div>
    </div>
  )
}
