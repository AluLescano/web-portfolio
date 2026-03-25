// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../about.module.scss"

export default function PersonalBio() {
  const { pageContainer, nanoWrapper } = styles

  const biography = `/**
 * [Sobre_KatyaDesign]
 * Bienvenido a mi portfolio!
 *
 * [Quien_es_Alessia]
 * Soy desarrolladora frontend en Allaria+,
 * donde trabajo con React, Next.js y TypeScript
 * construyendo interfaces para productos reales.
 *
 * En paralelo, diseño sitios web como freelance
 * bajo [KatyaDesign] — cada proyecto empieza
 * desde la necesidad del cliente, no desde
 * una plantilla.
 *
 * [Actualmente]
 * Expandiendo mi stack hacia desarrollo de
 * aplicaciones móviles con Capacitor y
 * arquitectura de componentes reutilizables.
 *
 */`

  return (
    <div className={pageContainer}>
      <div className={`${nanoWrapper} hidden xl:flex`}>
        <Nano content={biography} lineNumbers={18} animate speed="normal" />
      </div>
      <div className={`flex xl:hidden flex-col gap-2`}>
        <p className={`${fira.className}`}>
          Soy desarrolladora frontend en Allaria+, donde trabajo con React,
          Next.js y TypeScript construyendo interfaces para productos reales.
        </p>
        <p className={`${fira.className}`}>
          En paralelo, diseño sitios web como freelance bajo KatyaDesign —
          cada proyecto empieza desde la necesidad del cliente, no desde una
          plantilla.
        </p>
        <p className={`${fira.className}`}>
          Me interesa el punto donde el diseño se encuentra con la lógica.
          Disfruto convertir ideas en interfaces que se sientan bien de usar
          — y bien de leer por dentro.
        </p>
        <p className={`${fira.className}`}>
          Actualmente expandiendo mi stack hacia desarrollo de aplicaciones
          móviles con Capacitor y arquitectura de componentes reutilizables.
        </p>
      </div>
    </div>
  )
}
