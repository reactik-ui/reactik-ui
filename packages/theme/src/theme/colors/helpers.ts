import tinycolor2 from 'tinycolor2';
import { ColorScale } from './colors';

/**
 * Provide a color scale based on a color. The provided color is the 500 index.
 *
 * Above 500 color is darken.
 *
 * Below 500 color is lighten
 * @param {string} color Base color
 * @returns {ColorScale} Color scale
 */
export function generateColorScale(color: string): ColorScale {
  return {
    50: tinycolor2(color).lighten(25).toHexString(),
    100: tinycolor2(color).lighten(20).toHexString(),
    200: tinycolor2(color).lighten(15).toHexString(),
    300: tinycolor2(color).lighten(10).toHexString(),
    400: tinycolor2(color).lighten(5).toHexString(),
    500: tinycolor2(color).darken(5).toHexString(),
    600: tinycolor2(color).darken(10).toHexString(),
    700: tinycolor2(color).darken(15).toHexString(),
    800: tinycolor2(color).darken(20).toHexString(),
    900: tinycolor2(color).darken(25).toHexString(),
  };
}
