import { Spacing, space } from './space';
import { Colors, colors } from './colors';
import { Typography, typography } from './typography';
import { Borders, borders } from './borders';
import { Elevations, elevations } from './elevations';
import { Shadows, shadows } from './shadows';

export interface Theme
  extends Spacing,
    Colors,
    Typography,
    Borders,
    Elevations,
    Shadows {}

const theme: Theme = {
  ...space,
  ...colors,
  ...typography,
  ...borders,
  ...elevations,
  ...shadows,
};

export default theme;
