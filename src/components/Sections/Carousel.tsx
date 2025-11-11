// DEPENDENCIES
import { useState } from "react"

// UTILS
import { getSections } from "./Section"

// COMPONENTS
import { motion, AnimatePresence } from "framer-motion"
import SubLayout from "../Layout/SubLayout"
import Button from "../Button/Button"

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import WebsiteLogo  from "../../assets/img/sitelogo.png"

import styles from "./Carousel.module.scss"

const Carousel = () => {
  const {glassButton} = styles
  const { carousel, buttonGroup } = styles
  const height = window.innerHeight
  const isMobile = window.innerWidth < 565

  const sectionsConfig = getSections()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === sectionsConfig.length - 1 ? 0 : prev + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sectionsConfig.length - 1 : prev - 1
    )
  }
  return (
    <>
      <div className={carousel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={sectionsConfig[currentIndex].name}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <SubLayout
              large
              isMobile={isMobile}
              fillRemainingSpace
              style={{
                minHeight: `${height}px`,
                backgroundImage: `url(${sectionsConfig[currentIndex].background})`,
                backgroundSize: `cover`,
                alignContent: `center`,
              }}
            >
              {sectionsConfig[currentIndex].children}
            </SubLayout>
          </motion.div>
        </AnimatePresence>
        <div className={buttonGroup}>
          <Button className={glassButton} onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <img src={WebsiteLogo} alt="KatyaDesign-Logo" style={{width:"50px", height:"50px"}}/>
          <Button className={glassButton} onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default Carousel
