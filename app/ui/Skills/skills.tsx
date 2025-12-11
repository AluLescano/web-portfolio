"use client"

// COMPONENT
import Image, { StaticImageData } from "next/image"

// ASSETS
import { fira } from "@/ui/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import styles from "./skills.module.scss"

interface Skill {
  name: string
  icon: IconDefinition
}

interface SkillCategory {
  title: string
  profile: StaticImageData
  username: string
  createdDate: string
  skills: Skill[]
}

interface SkillsProps {
  categories: SkillCategory[]
}

export default function Skills({ categories }: SkillsProps) {
  const {
    container,
    categorySection,
    header,
    userInfo,
    username,
    date,
    skillContainer,
    iconContainer,
  } = styles

  return (
    <div className={container}>
      {categories.map((category, catIndex) => (
        <div key={catIndex} className={categorySection}>
          <div className={header}>
            <h2 className={fira.className}>
              <span>
                {"//"}
                {category.title}
              </span>
            </h2>
          </div>

          {category.username && (
            <div className={userInfo}>
              <div>
                <Image
                  src={category.profile}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
                <span className={username}>@{category.username}</span>
              </div>
              <span className={date}>{category.createdDate}</span>
            </div>
          )}
          <div className={skillContainer}>
            {category.skills.map((skill, index) => (
              <div key={index} className={iconContainer}>
                <FontAwesomeIcon icon={skill.icon} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
