/**
 * FontWeight
 */
export type FontWeight =
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'lighter'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

/**
 * Configurations for typography.
 */
export interface Typography {
  fonts: { [key: string]: string };
  fontSizes: { [key: string]: string };
  fontWeights: { [key in FontWeight]: FontWeight };
  lineHeights?: { [key: string]: string | number };
  letterSpacings?: { [key: string]: string };
}

/**
 * Default typography configuration
 */
export const typography: Typography = {
  fonts: {
    heading: '',
    body: '',
    code: '',
  },
  fontSizes: {
    xsmall: '0.750rem',
    small: '0.875rem',
    normal: '1rem',
    large: '1.125rem',
    xlarge: '1.250rem',
    '2x': '1.5rem',
    '3x': '1.750rem',
    '4x': '2rem',
    '5x': '2.5rem',
    '6x': '3rem',
  },
  fontWeights: {
    '100': 100,
    '200': 200,
    '300': 300,
    '400': 400,
    '500': 500,
    '600': 600,
    '700': 700,
    '800': 800,
    '900': 900,
    normal: 400,
    bold: 700,
    bolder: 900,
    lighter: 300,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    small: 1.25,
    medium: 1.5,
    large: 1.75,
  },
  letterSpacings: {
    small: '-0.025rem',
    normal: '0',
    large: '0.025rem',
  },
};
