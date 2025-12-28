// ASSETS
import almarentals from "@/assets/img/website-thumbnails/website-almarentals.webp"
import psicoZephyr from "@/assets/img/website-thumbnails/website-psico-zephyr.webp"
import katyadesign from "@/assets/img/website-thumbnails/website-katyadesign.webp"
import blankPage from "@/assets/img/website-thumbnails/thumbnail-blank.webp"

import {
  faStar,
  faMobileScreen,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons"

/**
 * Configuration for the Project Thumbnails in Works Section
 */
export const projectsConfig = [
  {
    id: "1",
    title: "almarentals",
    thumbnail: almarentals,
    alt: "Almarena - Almarentals",
    description: (
      <p>Landing para cadena de Departamentos en Buenos Aires, Argentina.</p>
    ),
    button: "ver-pagina",
    href: "https://almarentals.com.ar",
    externalLink: true,
    category: "paginas_favoritas",
    icon: faStar,
  },
  {
    id: "2",
    title: "psico-zephyr",
    thumbnail: psicoZephyr,
    alt: "psico-zephyr website",
    description: <p>Servicios de terapia y bienestar mental.</p>,
    disabled: true,
    href: "/works",
    category: "paginas_favoritas",
    icon: faStar,
  },
  {
    id: "3",
    title: "katyaDesign-v1",
    thumbnail: katyadesign,
    alt: "KatyaDesign v1",
    description: <p>Primera versión del portfolio</p>,
    disabled: true,
    href: "/works",
    category: "demos",
    icon: faPenRuler,
  },
  {
    id: "4",
    title: "tu-nueva-pagina",
    thumbnail: blankPage,
    alt: "Empty Page",
    description: (
      <p>
        Ups! Aquí falta algo... <br /> Podría ser tu próximo sitio web. Hablemos
        y hagámoslo realidad.
      </p>
    ),
    href: "/contact",
    category: "paginas_favoritas",
    icon: faStar,
  },
]
