import { SidebarConfig } from "@/types/sidebar"
import { faStar, faMobileScreen, faPenRuler } from "@fortawesome/free-solid-svg-icons"

/**
 * Configuration for the "About" section sidebar
 */
export const aboutSidebarConfig: SidebarConfig = {
  sections: [
    {
      name: "_info_personal",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "_bio",
          href: "/about/personal",
        },
        {
          type: "folder",
          name: "_educacion",
          children: [
            {
              type: "file",
              name: "_estudios",
              href: "/about/personal/study",
            },
            {
              type: "file",
              name: "_certificados",
              href: "/about/personal/certificates",
            },
          ],
        },
      ],
    },
    {
      name: "_info_profesional",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "_trayectoria",
          href: "/about/professional",
        },
      ],
    },
  ],
}

/**
 * Configuration for the "Works" section sidebar
 */
export const worksSidebarConfig: SidebarConfig = {
  sections: [
    {
      name: "_proyectos",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "_paginas_favoritas",
          filterValue: "paginas_favoritas",
          icon: faStar,
        },
        // Hidden until Phase 4 (weather app) ships:
        // {
        //   type: "file",
        //   name: "_apps",
        //   filterValue: "apps",
        //   icon: faMobileScreen,
        // },
        {
          type: "file",
          name: "_demos",
          filterValue: "demos",
          icon: faPenRuler,
        },
      ],
    },
  ],
}
