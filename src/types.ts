/**
 * Global types for the Moulify Nuxt module (module options, runtime config, colors).
 * Component-level types live in each component's folder (e.g. Button/types.ts).
 */

export interface ModuleOptions {
  /**
   * Colors used for the module. Each of primary, secondary, and tertiary can be:
   * - A hex string (e.g. '#0076ff'): a full palette (50, 100, … 900) is generated from it.
   * - A full palette object with keys 50, 100, 200, 300, 400, 500, 600, 700, 800, 900.
   *
   * Example:
   * - colors: { primary: '#0076ff', secondary: '#000', tertiary: '#888' }
   * - colors: { primary: { 50: '#eff6ff', 100: '#dbeafe', ..., 900: '#1e3a8a' } }
   */
  colors?: MoulifyModuleColors

  /**
   * Social links: optional URLs per platform (twitter, github, instagram, facebook, x).
   */
  socialLinks?: Partial<Record<'twitter' | 'github' | 'instagram' | 'facebook' | 'x', string>>

  /**
   * Header navigation: left, center, and right link groups.
   */
  header?: {
    left?: Array<{ name: string, url: string }>
    center?: Array<{ name: string, url: string }>
    right?: Array<{ name: string, url: string }>
  }

  /**
   * Footer config: copyright text and optional links.
   */
  footer?: {
    copyrightText?: string
    hasLinks?: Array<{ name: string, url: string }>
  }
}

/**
 * A color palette with shades from 50 (lightest) to 900 (darkest).
 * 500 is typically the base color.
 */
export interface ColorPalette {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

/**
 * Config for a single color: either a base hex (palette auto-generated) or a full palette.
 */
export type ColorConfig = string | ColorPalette

export interface MoulifyModuleColors {
  /** Primary color: hex string or full palette (50–900). */
  primary?: ColorConfig

  /** Secondary color: hex string or full palette (50–900). */
  secondary?: ColorConfig

  /** Tertiary color: hex string or full palette (50–900). */
  tertiary?: ColorConfig
}

/**
 * Resolved color palettes (always full 50–900) for primary, secondary, tertiary.
 */
export interface MoulifyResolvedColors {
  primary?: ColorPalette
  secondary?: ColorPalette
  tertiary?: ColorPalette
}

/**
 * Public runtime config exposed to the app (colors + component config).
 */
export interface MoulifyPublicConfig {
  colors?: MoulifyResolvedColors
  socialLinks?: ModuleOptions['socialLinks']
  header?: ModuleOptions['header']
  footer?: ModuleOptions['footer']
}
