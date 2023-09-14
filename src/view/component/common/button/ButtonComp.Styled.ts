import styled from 'styled-components';
import { IButtonCompProps } from './ButtonComp';

export const Button = styled.button<Partial<IButtonCompProps>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 5px;
  border: 1px solid ${(props) => props.$borderColor};
  cursor: pointer;
`;
