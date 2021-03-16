export interface Spacing {
  multiplier: number;
  spacers: number[];
  spacing: (value: number) => number;
  space: number[];
}

const space: Spacing = {
  /**
   * Space multiplier. Used to convert values to spacing measures.
   */
  multiplier: 8,
  /**
   * Values to be converted to spacing measures
   */
  spacers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  /**
   * Returns a space amount by providing a multiplier.
   * @param {number} value
   * @returns {number} The converted space measure
   */
  get spacing(): (value: number) => number {
    return (value: number): number => value * this.multiplier;
  },
  /**
   * Converted spacing values to actual spacing measures
   */
  get space(): number[] {
    return this.spacers.map(m => this.spacing(m));
  },
};

export default space;
