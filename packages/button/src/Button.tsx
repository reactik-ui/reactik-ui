import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

const Button = styled.button<ColorProps>`
  ${color}
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
  outline: none;
`;

export default Button;
