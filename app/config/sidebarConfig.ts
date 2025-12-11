import { SidebarConfig } from "@/types/sidebar"

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
          type: "folder",
          name: "paginas_favoritas",
          children: [
            {
              type: "file",
              name: "psico-zephyr",
              href: "/works/psico-zephyr",
            },
          ],
        },
        /* {
          type: "folder",
          name: "apps",
          children: [
            {
              type: "file",
              name: "weather-app",
              href: "/works/weatherApp",
            },
            {
              type: "file",
              name: "pc-widgets",
              href: "/works/widgets",
            },
            {
              type: "file",
              name: "organizador",
              href: "/works/organizer",
            },
          ],
        }, */
        {
          type: "folder",
          name: "demos",
          children: [
            {
              type: "folder",
              name: "katyaDesign",
              children: [
                { type: "file", name: "v1", href: "/works/katyaDesignv1" },
              ],
            },
          ],
        },
      ],
    },
  ],
}
