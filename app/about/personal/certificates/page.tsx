// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../../about.module.scss"

export default function Certificates() {
  const { pageContainer, nanoWrapper } = styles

  const courses = `/**
 * //Certificados y Cursos
 * [Curso_de_Ingles]
 * Nivel: B2 - First                      2023
 * Progresar - CUI
 * Promedio: 88%
 * Certificación oficial de nivel B2 en inglés.
 *
 * [Tutorías]
 * Nivel: Universitario              2022-2024
 * Area: Programación
 * Tutorías especializadas en desarrollo de
 * software y programación
 *
 */`

  // Cuando tenga mucho texto, convertir en scroller

  return (
    <div className={pageContainer}>
      <div className={`${nanoWrapper} hidden md:flex`}>
        <Nano content={courses} lineNumbers={15} animate speed="normal" />
      </div>
      <div className={`flex xl:hidden flex-col gap-2`}>
        <p className={`${fira.className}`}>
          <span>Inglés Profesional (B2 - First Certificate):</span> Certificada
          en 2023 por el CUI con un promedio académico de 88%, garantizando una
          comunicación efectiva en equipos multiculturales y comprensión de
          documentación técnica avanzada.
        </p>
        <p className={`${fira.className}`}>
          <span>Mentora de Programación y Desarrollo:</span> Responsable de
          tutorías universitarias especializadas entre 2022 y 2024. Mi labor se
          centró en simplificar conceptos complejos de algoritmos y bases de la
          programación para estudiantes de primer año, consolidando mis
          conocimientos técnicos a través de la enseñanza.
        </p>
      </div>
    </div>
  )
}
