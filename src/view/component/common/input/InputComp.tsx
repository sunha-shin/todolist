import React from 'react';
import * as Styled from './InputComp.Styled';

export interface IInputProps {
  type?: string;
  name: string;
  value?: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId: string;
  className?: string;
  style?: any;
}

const Input = ({
  type = 'text',
  style = {},
  name,
  value,
  placeholder = 'please type todo title',
  onChange,
  dataTestId,
  className = '',
}: IInputProps) => {
  console.log(className);
  return (
    <Styled.InputComp
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={dataTestId}
      className={className}
      style={style}
    />
  );
};

export default Input;
