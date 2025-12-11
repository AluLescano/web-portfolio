// COMPONENTS
import Nano from "@/ui/Nano/nano"

// ASSETS
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
        <Nano 
        content={courses} 
        lineNumbers={16}
        animate
        speed="slow"
      />
      </div>
      <div className={`${nanoWrapper} flex md:hidden`}>
        <Nano 
        content={courses} 
        className="flex md:hidden"
      />
      </div>
    </div>
  )
}