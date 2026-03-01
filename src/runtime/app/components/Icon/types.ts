import type { IconsId } from '../../../../assets/generated/fonts/icons'

/**
 * Props for the Icon component.
 *
 * Defines the properties required to render an icon from the Fantasticon-generated font family,
 * including the icon's name, optional size, and optional color.
 */
export interface IconProps {
  /** Icon name from the Fantasticon-generated font family. */
  name: IconsId

  /**
   * Font size for the icon (px).
   *
   * @default 24
   */
  size?: number

  /**
   * Color of the icon (CSS color value).
   *
   * @default "currentColor" - Depending on SVG color.
   */
  color?: string
}
