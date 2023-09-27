import styled from 'styled-components';
import { IButtonCompProps } from './ButtonComp';

export const Button = styled.button<Partial<IButtonCompProps>>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 5px;
<<<<<<< Updated upstream
  outline: none;
  border: 1px solid ${(props) => props.color};
=======
  border: 1px solid ${(props) => props.$borderColor};
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
>>>>>>> Stashed changes
`;
