import { Spacing, space } from './space';
import { Colors, colors } from './colors';

export interface Theme extends Spacing, Colors {}

const theme: Theme = {
  ...space,
  ...colors,
};

export default theme;
