"use client"

import { useState, useEffect } from "react"
import { fira } from "@/ui/fonts"
import styles from "./nano.module.scss"

interface NanoProps {
  content: string
  lineNumbers?: number
  className?: string
  animate?: boolean
  speed?: "slow" | "normal" | "fast"
}

export default function Nano({
  content,
  lineNumbers,
  className = "",
  animate = false,
  speed = "normal",
}: NanoProps) {
  const {
    editorContainer,
    editorContent,
    lineNumbersClass,
    codeContent,
    codeLine,
    highlight,
  } = styles
  const lines = content.split("\n")
  const [displayedText, setDisplayedText] = useState(animate ? "" : content)
  const [isComplete, setIsComplete] = useState(!animate)

  // Define typing speeds in milliseconds per character
  const getTypingSpeed = () => {
    switch (speed) {
      case "slow":
        return 35
      case "fast":
        return 5
      case "normal":
      default:
        return 15
    }
  }

  useEffect(() => {
    if (!animate) return

    let currentIndex = 0
    const typingSpeed = getTypingSpeed()

    const timer = setInterval(() => {
      if (currentIndex <= content.length) {
        setDisplayedText(content.slice(0, currentIndex))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [content, animate, speed])

  const highlightBrackets = (text: string) => {
    // Match text inside square brackets including the brackets
    const parts = text.split(/(\[[^\]]+\])/g)

    return parts.map((part, index) => {
      if (part.match(/\[[^\]]+\]/)) {
        return (
          <span key={index} className={highlight}>
            {part}
          </span>
        )
      }
      return part
    })
  }

  const displayLines = displayedText.split("\n")

  return (
    <div className={`${editorContainer} ${className}`}>
      <div className={editorContent}>
        {lineNumbers && (
          <div className={lineNumbersClass}>
            {Array.from({ length: lineNumbers }, (_, index) => (
              <span key={index} className={fira.className}>
                {index + 1}
              </span>
            ))}
          </div>
        )}
        <div className={codeContent}>
          <pre className={fira.className}>
            {displayLines.map((line, index) => (
              <div key={index} className={codeLine}>
                {highlightBrackets(line)}
                {!isComplete && index === displayLines.length - 1 && (
                  <span className={styles.cursor}>|</span>
                )}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}
