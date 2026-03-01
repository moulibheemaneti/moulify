/**
 * Palette shade keys (Tailwind-style).
 */
export const PALETTE_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export type PaletteShade = (typeof PALETTE_SHADES)[number]

/**
 * A color palette with shades from 50 (lightest) to 900 (darkest).
 * 500 is typically the "base" color.
 */
export type ColorPalette = Record<PaletteShade, string>

/**
 * Parses a hex color to RGB components (0–255).
 */
const hexToRgb = (hex: string): { r: number, g: number, b: number } | null => {
  const match = hex.replace(/^#/, '').match(/^(?:([a-f\d])([a-f\d])([a-f\d])|([a-f\d]{2})([a-f\d]{2})([a-f\d]{2}))$/i)
  if (!match) {
    return null
  }
  const [_, r1, g1, b1, r2, g2, b2] = match
  if (r2 !== undefined) {
    return {
      r: Number.parseInt(r2, 16),
      g: Number.parseInt(g2, 16),
      b: Number.parseInt(b2, 16),
    }
  }
  return {
    r: Number.parseInt(r1! + r1!, 16),
    g: Number.parseInt(g1! + g1!, 16),
    b: Number.parseInt(b1! + b1!, 16),
  }
}

/**
 * Converts RGB (0–255) to HSL (h 0–360, s 0–100, l 0–100).
 */
const rgbToHsl = (r: number, g: number, b: number): { h: number, s: number, l: number } => {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6
        break
      case g:
        h = ((b - r) / d + 2) / 6
        break
      case b:
        h = ((r - g) / d + 4) / 6
        break
      default:
        break
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Converts HSL to hex.
 */
const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100
  l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n: number): string => {
    const k = (n + h / 30) % 12
    const x = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * x)
      .toString(16)
      .padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

/**
 * Target lightness values for each shade (Tailwind-style).
 * 500 is the base and will be overridden with the input color's lightness.
 */
const SHADE_LIGHTNESS: Record<PaletteShade, number> = {
  50: 97,
  100: 94,
  200: 89,
  300: 80,
  400: 71,
  500: 62, // base — replaced by input
  600: 53,
  700: 45,
  800: 37,
  900: 26,
}

/**
 * Generates a full color palette (50–900) from a single base hex color.
 * The base color is used for the 500 shade; lighter and darker shades
 * are derived by varying lightness while keeping hue and saturation.
 *
 * @param baseHex - Base color as hex (e.g. '#0076ff')
 * @returns Object with keys 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
 */
export const generateColorPalette = (baseHex: string): ColorPalette => {
  const rgb = hexToRgb(baseHex.trim())
  if (!rgb) {
    // Invalid hex: return a grey fallback palette
    return PALETTE_SHADES.reduce(
      (acc, shade) => {
        const l = SHADE_LIGHTNESS[shade]
        acc[shade] = hslToHex(0, 0, l)
        return acc
      },
      {} as Record<PaletteShade, string>,
    )
  }

  const { h, s, l: baseL } = rgbToHsl(rgb.r, rgb.g, rgb.b)

  // Map base color to 500; scale other shades relative to base lightness
  const scale = baseL / SHADE_LIGHTNESS[500]

  const palette = {} as Record<PaletteShade, string>

  for (const shade of PALETTE_SHADES) {
    let targetL: number
    if (shade === 500) {
      targetL = baseL
    }
    else {
      targetL = Math.round(SHADE_LIGHTNESS[shade] * scale)
      targetL = Math.max(1, Math.min(99, targetL))
    }
    // Keep saturation for colored shades; reduce for very light/dark to avoid garish tones
    const saturation = s
    palette[shade] = hslToHex(h, saturation, targetL)
  }

  return palette
}

/**
 * Normalizes a color config value (string or full palette) into a ColorPalette.
 */
export const normalizeToPalette = (value: string | ColorPalette | undefined): ColorPalette | undefined => {
  if (value === undefined || value === null) {
    return undefined
  }
  if (typeof value === 'string') {
    return generateColorPalette(value)
  }
  // Check if it looks like a palette (has 50, 500, 900)
  const keys = Object.keys(value)
  if (keys.includes('50') && keys.includes('500') && keys.includes('900')) {
    return value as ColorPalette
  }
  return undefined
}
