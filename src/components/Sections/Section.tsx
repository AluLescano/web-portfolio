import type { ReactNode } from "react"

import GlassContainer from "../GlassContainer/GlassContainer"
import Button from "../Button/Button"

// ASSETS
import backgroundHome from "../../assets/img/background/background-home.png"
import backgroundAboutMe from "../../assets/img/background/background-aboutme.png"
import backgroundTimeline from "../../assets/img/background/background-resume.png"
import backgroundWorks from "../../assets/img/background/background-works.png"
import backgroundSkills from "../../assets/img/background/background-skills.png"
import backgroundContactMe from "../../assets/img/background/background-contactme.png"
import ProfilePicture from "../../assets/img/profile.jpg"

import styles from "./Sections.module.scss"
import { Divider } from "@mui/material"

export interface Section {
  name: string
  background: string
  children: ReactNode
}

export const getSections = () => {
  const { neonButton, divider } = styles
  const section: Section[] = [
    {
      name: "home",
      background: backgroundHome,
      children: (
        <GlassContainer
          title={<h1 className={neonButton}>KatyaDesign</h1>}
          children={
            <div>
              <p>
                Bienvenido a KatyaDesign, donde la creatividad se encuentra con
                la funcionalidad.
              </p>
              <p>
                Soy Lescano Alessia, programadora y diseñadora web apasionada
                por crear soluciones digitales innovadoras.
              </p>
              <p>
                Busco transformar tus ideas en experiencias únicas que destaquen
                en el mundo digital. Exploremos juntos las posibilidades.
              </p>
            </div>
          }
        />
      ),
    },
    {
      name: "about",
      background: backgroundAboutMe,
      children: (
        <GlassContainer
          title={
              <div><img
                src={ProfilePicture}
                alt="Alessia Lescano"
                style={{ width: "175px", height: "175px", borderRadius: "50%" }}
              />
              <h1>Sobre Mí</h1></div>
          }
          children={
            <div>
              <p>
                Soy Técnica en Informática, con experiencia en desarrollo web y
                gestión de proyectos. <br /> Me especializo en crear sitios
                funcionales y atractivos, adaptándome a las necesidades de cada
                cliente. Tengo experiencia en frontend, backend y bases de datos
                y además, tengo experiencia en metodologías ágiles y trabajo en
                equipo para lograr proyectos eficientes y bien organizados.
              </p>
              <p>¡Siempre estoy lista para nuevos desafíos!</p>
              <Divider className={divider} />
              <Button onClick={navigator.canShare}>Descargar CV</Button>
            </div>
          }
        />
      ),
    },
    {
      name: "timeline",
      background: backgroundTimeline,
      children: <GlassContainer title={"Timeline"} children={<div></div>} />,
    },
    {
      name: "works",
      background: backgroundWorks,
      children: (
        <GlassContainer
          title={"Mis Trabajos"}
          children={
            <div>
              <p>
                En esta sección encontrarás una selección de proyectos web y de
                software que he desarrollado. Cada trabajo refleja mi
                experiencia en diseño y desarrollo. Desde la creación de
                portafolios personalizados hasta soluciones para instituciones,
                cada proyecto demuestra mi compromiso con la adaptabilidad, la
                innovación y el enfoque en resultados.
              </p>
              <p>
                ¡Explora mis trabajos y descubre cómo he aplicado mis
                habilidades técnicas y de liderazgo para dar vida a estas ideas!
              </p>
            </div>
          }
        />
      ),
    },
    {
      name: "skills",
      background: backgroundSkills,
      children: (
        <GlassContainer
          title={"Habilidades"}
          children={
            <div>
              <p>
                Cuento con habilidades técnicas en HTML, CSS, Typescript,
                JavaScript y React + Vite he utilizado herramientas de
                desarrollo como GitHub y GitLab. Mi enfoque se centra en la
                mejora continua y en la entrega de resultados efectivos.
              </p>
            </div>
          }
        />
      ),
    },
    {
      name: "contact",
      background: backgroundContactMe,
      children: (
        <GlassContainer
          title={"Contacto"}
          children={
            <div>
              <p>
                ¿Algún proyecto en mente? Colaboremos juntos y construyamos algo
                sorprendente.
              </p>
              <p>Volvamos esa idea algo real.</p>
            </div>
          }
        />
      ),
    },
  ]

  return section
}
