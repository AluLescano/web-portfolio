// ASSETS
import almarentals from "@/assets/img/website-thumbnails/website-almarentals.webp"
import almarena from "@/assets/img/website-thumbnails/website-almarena.webp"
import psiconodo from "@/assets/img/website-thumbnails/website-psiconodo.webp"
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
    title: "almarena",
    thumbnail: almarena,
    alt: "Almarena",
    description: <p>Landing page para cadena hotelera argentina. Refactoring y desarrollo front-end realizado en Allaria+.</p>,
    button: "ver-pagina",
    href: "https://almarena.com.ar",
    externalLink: true,
    category: "paginas_favoritas",
    icon: faStar,
  },
  {
    id: "2",
    title: "almarentals",
    thumbnail: almarentals,
    alt: "Almarentals",
    description: (
      <p>Landing page para alquiler de departamentos en Buenos Aires. Refactoring y desarrollo front-end realizado en Allaria+.</p>
    ),
    button: "ver-pagina",
    href: "https://almarentals.com.ar",
    externalLink: true,
    category: "paginas_favoritas",
    icon: faStar,
  },
  {
    id: "3",
    title: "psiconodo",
    thumbnail: psiconodo,
    alt: "Psiconodo - Felipe Rios",
    description: (
      <p>
        Servicios de terapia y bienestar mental. <br /> Sesiones Online,
        Santiago de Chile
      </p>
    ),
    button: "ver-pagina",
    href: "https://psiconodo.vercel.app",
    externalLink: true,
    category: "paginas_favoritas",
    icon: faStar,
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
    button: "contacto",
    href: "/contact",
    category: "paginas_favoritas",
    icon: faStar,
  },
]
