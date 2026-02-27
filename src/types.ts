export interface ModuleOptions {
  /**
   * Prefix used for auto-registered components.
   *
   * Example:
   * - prefix: 'nc'    -> <nc-button>, <nc-header>
   * - prefix: 'moulify' (default) -> <moulify-button>, <moulify-header>
   */
  prefix?: string

  /**
   * Colors used for the module.
   *
   * Example:
   * - colors: { primary: '#000', secondary: '#fff', tertiary: '#000' }
   * - colors: { primary: '#000', secondary: '#fff', tertiary: '#000' }
   */
  colors?: MoulifyModuleColors
}

export interface MoulifyModuleColors {
  /**
   * Primary color used for the module.
   *
   * Example:
   * - primary: '#000'
   * - primary: '#000'
   */
  primary?: string

  /**
   * Secondary color used for the module.
   *
   * Example:
   * - secondary: '#fff'
   * - secondary: '#fff'
   */
  secondary?: string

  /**
   * Tertiary color used for the module.
   *
   * Example:
   * - tertiary: '#000'
   * - tertiary: '#000'
   */
  tertiary?: string
}
