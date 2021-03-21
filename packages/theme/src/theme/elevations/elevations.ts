/**
 * Theme zIndices configurations
 */
export interface Elevations {
  zIndices: { [key in string | number]: string | number };
}

/**
 * Default theme zIndices
 */
export const elevations: Elevations = {
  zIndices: {
    auto: 'auto',
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
    10: 1000,
  },
};
