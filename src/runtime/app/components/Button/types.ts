import type { IconsId } from '../../../../assets/generated/fonts/icons'

export type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'outlined' | 'link'

export interface ButtonProps {
  iconLeft?: IconsId

  iconRight?: IconsId

  /** @default 'md' or from nuxt config */
  size?: ButtonSize

  /** @default 'primary' or from nuxt config */
  variant?: ButtonVariant
}
