// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../about.module.scss"

export default function PersonalBio() {
  const { pageContainer, nanoWrapper } = styles

  const biography = `/**
 * [Sobre_KatyaDesign]
 * Bienvenido a mi porfolio!
 *
 * [Título] Técnica Universitaria en Informática.
 * [Título_Pendiente] Licenciatura en Sistemas.
 * [Programación]
 * Manejo HTML, CSS, SCSS, Javascript, Typescript,
 * React + Vite, NextJs, TailwindCSS y Bootstrap.
 *
 * [Quien_es_Alessia] Soy una persona curiosa,
 * Tengo interés en desarrollo web. 
 * Me gusta trabajar en equipo, me considero 
 * proactiva, siempre buscando expandir 
 * mi conocimiento.
 *
 * [Actualmente] me encuentro formándome sobre 
 * React y NextJs, con planes en CapacitorJs y 
 * ElectronJs para desarrollo de aplicaciones.
 *
 *
 */`

  return (
    <div className={pageContainer}>
      <div className={`${nanoWrapper} hidden xl:flex`}>
        <Nano content={biography} lineNumbers={22} animate speed="normal" />
      </div>
      <div className={`flex xl:hidden flex-col gap-2`}>
        <p className={`${fira.className}`}>
          Soy Alessia Lescano, técnica universitaria en informática. Estudiante
          en licenciatura en sistemas.
        </p>
        <p className={`${fira.className}`}>
          Manejo HTML, CSS, SCSS, Javascript, Typescript, React + Vite, NextJs,
          TailwindCSS y Bootstrap.
        </p>
        <p className={`${fira.className}`}>
          Soy una persona curiosa, tengo interés en desarrollo web. Me gusta
          trabajar en equipo, me considero proactiva, siempre buscando expandir
          mi conocimiento.
        </p>
        <p className={`${fira.className}`}>
          Actualmente me encuentro formándome sobre React y NextJs, con planes en
          CapacitorJs y ElectronJs para desarrollo de aplicaciones.
        </p>
      </div>
    </div>
  )
}
