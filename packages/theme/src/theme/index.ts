import space, { Spacing } from './space';

export interface Theme extends Spacing {}

const theme: Theme = {
  ...space,
};
export default theme;
