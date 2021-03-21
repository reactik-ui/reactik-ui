/**
 * Configuration for borders
 */
export interface Borders {
  borders: { [key: string]: string | number };
  radii: { [key: string]: string };
}

/**
 * Default theme border configurations
 */
export const borders: Borders = {
  borders: {
    normal: '1px solid',
    large: '2px solid',
    '2xl': '4px solid',
  },
  radii: {
    none: '0',
    rounded: '999px',
    normal: '0.25rem',
  },
};
