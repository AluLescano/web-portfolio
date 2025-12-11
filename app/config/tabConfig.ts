// config/tabConfig.ts

import { TabRouteMap } from "@/types/tab"

/**
 * Tab configurations for the About section
 */
export const aboutTabConfig: TabRouteMap = {
  '/about/personal': {
    path: '/about/personal',
    label: 'bio',
    closable: true
  },
  '/about/personal/study': {
    path: '/about/personal/study',
    label: 'estudios',
    closable: true
  },
  '/about/personal/certificates': {
    path: '/about/personal/certificates',
    label: 'certificados',
    closable: true
  },
  '/about/professional': {
    path: '/about/professional',
    label: 'trayectoria',
    closable: true
  }
}