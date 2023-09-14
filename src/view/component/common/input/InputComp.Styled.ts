import styled from 'styled-components';
import { IInputProps } from './InputComp';

export const InputComp = styled.input<Partial<IInputProps>>`
  background-color: #fff;
  border: 1px solid #d8e0f0;
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(184, 200, 224, 0.222);
  font-weight: 400;
  outline: none;
  padding: 16px 18px;
  width: 90%;
`;
