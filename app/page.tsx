// COMPONENTS
import Slideshow from "@/ui/Slideshow/slideshow"
import Footer from "@/ui/Footer/footer"
import Image from "next/image"

import styles from "@/ui/home.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Slideshow/>
        <Footer/>
      </main>
    </div>
  )
}
