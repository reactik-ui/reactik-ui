import { generateColorScale } from './helpers';

/**
 * Based on a color, a color scale is a group of related colors from darkest to lightest
 */
export interface ColorScale {
  [key: number]: string;
}

/**
 * Representation of a color.
 *
 * A color can be a raw string or a color scale, represented by
 * an object with numeric keys. The most common pattern is to
 * use a 50 - 900 scale.
 */
export type Color = string | ColorScale;

/**
 * An object with all the available colors.
 */
export interface Colors {
  colors: { [key: string]: Color };
}

export const colors: Colors = {
  colors: {
    blue: generateColorScale('#51A2EA'),
    green: generateColorScale('#22c35e'),
    teal: generateColorScale('#23a1a1'),
    red: generateColorScale('#e35454'),
    orange: generateColorScale('#ED8936'),
    yellow: generateColorScale('#ECC94B'),
    pink: generateColorScale('#ED64A6'),
    purple: generateColorScale('#bb49de'),
    gray: generateColorScale('#aaadb5'),
    bluegray: generateColorScale('#9293b3'),
  },
};
