import type { Metadata } from "next"

import WorksLayoutClient from "./WorksLayoutClient"

export const metadata: Metadata = {
  title: "Trabajos",
  description:
    "Portfolio de proyectos de Alessia Lescano — sitios web, landing pages y aplicaciones desarrolladas con React, Next.js y TypeScript. Works — web design & development projects.",
}

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <WorksLayoutClient>{children}</WorksLayoutClient>
}
