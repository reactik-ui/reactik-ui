import space, { Spacing } from './space';

interface Theme extends Spacing {}

const theme: Theme = {
  ...space,
};
export default theme;
