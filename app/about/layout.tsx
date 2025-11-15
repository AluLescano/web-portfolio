import Sidebar from "@/ui/Bars/Sidebar/sidebar"
import styles from "./about-layout.module.scss" 

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const {layoutContainer, sidebar, content} = styles
  return (
    <div className={layoutContainer}> 
      <aside className={sidebar}>
        <Sidebar />
      </aside>
      <main className={content}> 
        {children}
      </main>
    </div>
  )
}