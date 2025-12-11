/**
 * Represents a single tab configuration
 */
export type TabConfig = {
  path: string // The route path
  label: string // Display name in the tab
  closable?: boolean
}

/**
 * Maps routes to their tab configurations
 */
export type TabRouteMap = {
  [key: string]: TabConfig
}
