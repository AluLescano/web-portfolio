// ASSETS
import { fira } from "@/ui/fonts"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder } from "@fortawesome/free-solid-svg-icons"

import styles from "./about.module.scss"

export default function About() {
  const { pageContainer, welcomeSection, commandPrompt, fileTree, code } =
    styles

  const infoText = {
    title: " Bienvenido a mi perfil profesional",
    desc: " Selecciona una sección del menú lateral para explorar:",
    bio: " Información personal y resumen profesional",
    studies: {
      college: " Tecnicatura y Licenciatura en Sistemas",
      certificates: " Cursos",
    },
    career: " Experiencia como Desarrolladora Freelance y Profesora Adscripta",
  }

  const codeBlock = {
    start: "const desarrolladora = {",
    variables: {
      nombre: "nombre: 'Alessia Lescano',",
      rol: "rol: 'Front-end Developer',",
      place: "ubicacion: 'Buenos Aires, Argentina',",
      goal: "objetivo: 'Busco transformar ideas en experiencias únicas que destaquen en el mundo digital.'",
    },
    end: "};",
  }

  return (
    <div className={pageContainer}>
      <div className={welcomeSection}>
        <h1 className={fira.className}>
          <span className="text-comment">{"//"}</span>
          {infoText.title}
        </h1>

        <div className={commandPrompt}>
          <p className={fira.className}>
            <span className="text-cyan">→</span>
            {infoText.desc}
          </p>
          <ul className={fileTree}>
            <li>
              <FontAwesomeIcon icon={faFolder} />
              <strong>bio</strong> - {infoText.bio}
            </li>
            <li>
              <FontAwesomeIcon icon={faFolder} />
              <strong>educacion</strong>
            </li>
            <li>→ {infoText.studies.college} </li>
            <li>→ {infoText.studies.certificates}</li>
            <li>
              <FontAwesomeIcon icon={faFolder} />
              <strong>trayectoria</strong> - {infoText.career}
            </li>
          </ul>
        </div>

        <div className={code}>
          <pre className={fira.className}>
            {codeBlock.start} <br />
            <p>
              {codeBlock.variables.nombre} <br />
              {codeBlock.variables.rol} <br />
              {codeBlock.variables.place} <br />
              {codeBlock.variables.goal} <br />
            </p>
            {codeBlock.end}
          </pre>
        </div>
      </div>
    </div>
  )
}
