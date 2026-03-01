/** A single link item (name + url) used in Header and Footer. */
export interface NavLink {
  name: string
  url: string
}

export interface HeaderProps {
  left?: NavLink[]
  center?: NavLink[]
  right?: NavLink[]
}
