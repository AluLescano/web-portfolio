// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../about.module.scss"

export default function Professional() {
  const { pageContainer, nanoWrapper } = styles

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
      <div className={`${nanoWrapper} hidden md:flex`}>
        <Nano content={biography} lineNumbers={23} animate speed="normal" />
      </div>
      <div className={`flex xl:hidden flex-col gap-2`}>
        <p className={`${fira.className}`}>
          Mi carrera profesional está marcada por una evolución constante en el
          ecosistema de React. En Allaria+, aplico tecnologías como Next.js y
          TypeScript para resolver desafíos complejos en el desarrollo frontend.

        </p>
        <p className={`${fira.className}`}>
          Esta experiencia se complementa con mi faceta emprendedora en Katya
          Design, donde desde hace dos años diseño soluciones web únicas para
          clientes independientes.
        </p>
        <p className={`${fira.className}`}>
          También cuento con una fuerte base
          académica; como Profesora Adscripta en la UNGS, desarrollando
          habilidades clave en mentoría y trabajo en equipo.
        </p>
      </div>
    </div>
  )
}
