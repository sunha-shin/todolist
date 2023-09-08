import React from 'react';
import * as Styled from './InputComp.Styled';

export interface IInputProps {
  type?: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId: string;
}

const Input = ({
  type = 'text',
  name,
  value,
  placeholder = 'please type todo title',
  onChange,
  dataTestId,
}: IInputProps) => {
  return (
    <Styled.InputComp
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
};

export default Input;
