// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import styles from "../../about.module.scss"

export default function Certificates() {
  const { pageContainer } = styles

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
      <div className="hidden md:flex">
        <Nano 
        content={courses} 
        lineNumbers={15}
        animate
        speed="normal"
      />
      </div>
      <div className="flex md:hidden">
        <Nano 
        content={courses} 
        className="flex md:hidden"
      />
      </div>
    </div>
  )
}