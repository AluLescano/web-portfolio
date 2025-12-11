// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../about.module.scss"

export default function Professional() {
  const { pageContainer } = styles

  const biography = `/**
 * // Trayectoria Profesional
 * [Experiencia_Laboral]
 *
 * [Desarrolladora_Frontend]        2025-Actualidad
 * Allaria+
 * Buenos Aires, Argentina
 * Desarrollo de Aplicaciones Web con React + Vite,
 * Next.Js y Typescript
 *
 * [KatyaDesign]                    2023-Actualidad
 * Desarrollo Freelance en Diseño Web ajustado a
 * las necesidades del cliente.
 *
 * [Profesora_Adscripta]                       2023
 * Universidad Nacional de General Sarmiento (UNGS) 
 * Materia: Organización del Computador II
 * Buenos Aires, Argentina
 * Asistencia en Docencia Universitaria, Tutorías y
 * evaluación de estudiantes
 *
 *
 */`

// Cuando tenga mucho texto, convertir en scroller

  return (
    <div className={pageContainer}>
      <div className="hidden md:flex">
        <Nano 
        content={biography} 
        lineNumbers={23}
        animate
        speed="normal"
      />
      </div>
      <div className="flex md:hidden">
        <Nano 
        content={biography} 
        className="flex md:hidden"
      />
      </div>
    </div>
  )
}