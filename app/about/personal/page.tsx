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
 * [Programación] He sido Programadora desde 2019.
 * Manejo HTML, CSS, SCSS, Javascript, Typescript,
 * React + Vite, NextJs, TailwindCSS y Bootstrap.
 *
 * [Quien_es_Alessia] Soy una persona curiosa,
 * Tengo interés en desarrollo web. 
 * Me gusta trabajar en equipo, siempre intento 
 * aprender y expandir mi conocimiento.
 *
 * [Actualmente] estoy aprendiendo React y NextJs 
 * Planeo formarme en CapacitorJs y ElectronJs 
 * para desarrollo de aplicaciones.
 *
 *
 */`

  return (
    <div className={pageContainer}>
      <div className={`${nanoWrapper} hidden md:flex`}>
        <Nano 
        content={biography} 
        lineNumbers={22}
        animate
        speed="normal"
      />
      </div>
      <div className={`${nanoWrapper} flex md:hidden`}>
        <Nano 
        content={biography} 
        className="flex md:hidden"
      />
      </div>
    </div>
  )
}