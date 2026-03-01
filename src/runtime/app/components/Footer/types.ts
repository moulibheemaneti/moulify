import type { NavLink } from '../Header/types'

export interface FooterProps {
  /** Copyright text (e.g. "© 2025 Company") */
  copyrightText?: string

  /** Links to show in the footer (e.g. Privacy, Terms) */
  hasLinks?: NavLink[]
}
