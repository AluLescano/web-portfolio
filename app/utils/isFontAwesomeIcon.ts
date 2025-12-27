import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { ReactElement } from "react"

/**
 * Check if it's a FontAwesome icon by checking for iconName property
 */
export default function isFontAwesomeIcon(
  icon: IconDefinition | ReactElement | undefined
): icon is IconDefinition {
  return icon !== undefined && typeof icon === "object" && "iconName" in icon
}
