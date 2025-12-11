import { SidebarConfig } from "@/types/sidebar"
import { faStar, faMobileScreen, faPenRuler } from "@fortawesome/free-solid-svg-icons"

/**
 * Configuration for the "About" section sidebar
 */
export const aboutSidebarConfig: SidebarConfig = {
  sections: [
    {
      name: "info-personal",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "bio",
          href: "/about/personal",
        },
        {
          type: "folder",
          name: "educacion",
          children: [
            {
              type: "file",
              name: "estudios",
              href: "/about/personal/study",
            },
            {
              type: "file",
              name: "certificados",
              href: "/about/personal/certificates",
            },
          ],
        },
      ],
    },
    {
      name: "info-profesional",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "trayectoria",
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
      name: "proyectos",
      defaultOpen: true,
      items: [
        {
          type: "file",
          name: "paginas_favoritas",
          filterValue: "paginas_favoritas",
          icon: faStar,
        },
        {
          type: "file",
          name: "apps",
          filterValue: "apps",
          icon: faMobileScreen,
        },
        {
          type: "file",
          name: "demos",
          filterValue: "demos",
          icon: faPenRuler,
        },
      ],
    },
  ],
}
