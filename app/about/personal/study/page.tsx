// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
import { fira } from "@/ui/fonts"

import styles from "../../about.module.scss"

export default function Studies() {
  const { pageContainer, nanoWrapper } = styles

  const courses = `/**
 * //Estudios
 *                                   2019-2023
 * [Tecnicatura_Universitaria_en_Informática]
 * UNGS - Universidad Nacional de General Sarmiento
 * Buenos Aires, Argentina
 * Completada
 * 
 *                             2019 - En Curso
 * [Licenciatura_en_Sistemas]
 * UNGS - Universidad Nacional de General Sarmiento
 * Buenos Aires, Argentina
 * En Progreso
 *
 * 
 */`

  return (
    <div className={pageContainer}>
      <div className={`${nanoWrapper} hidden md:flex`}>
        <Nano content={courses} lineNumbers={16} animate speed="slow" />
      </div>
      <div className={`flex xl:hidden flex-col gap-2`}>
        <p className={`${fira.className}`}>
          Graduada como Técnica Universitaria en Informática por la UNGS
          (2019-2023). Actualmente me encuentro expandiendo mi perfil
          profesional estudiando una Licenciatura en Sistemas en la Universidad
          Nacional de General Sarmiento, Buenos Aires.
        </p>
        <p className={`${fira.className}`}>
          Mi trayectoria académica refleja un compromiso con el aprendizaje
          continuo y una transición hacia el diseño integral de soluciones
          tecnológicas.
        </p>
      </div>
    </div>
  )
}
