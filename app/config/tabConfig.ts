// config/tabConfig.ts

import { TabRouteMap } from "@/types/tab"

/**
 * Tab configurations for the Works section
 */
export const worksTabConfig: TabRouteMap = {
  '/works': {
    path: '/works',
    label: '_proyectos',
    closable: false,
  },
}

/**
 * Tab configurations for the About section
 */
export const aboutTabConfig: TabRouteMap = {
  '/about/personal': {
    path: '/about/personal',
    label: '_bio',
    closable: true
  },
  '/about/personal/study': {
    path: '/about/personal/study',
    label: '_estudios',
    closable: true
  },
  '/about/personal/certificates': {
    path: '/about/personal/certificates',
    label: '_certificados',
    closable: true
  },
  '/about/professional': {
    path: '/about/professional',
    label: '_trayectoria',
    closable: true
  }
}
