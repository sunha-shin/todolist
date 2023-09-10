import React from 'react';
import * as Styled from './InputComp.Styled';
import { Todo } from 'service/model/Todo';

export interface IInputProps {
  type?: string;
  name: string;
  value?: string | number;
  defaultValue?: Todo['title'];
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId: string;
}

const Input = ({
  type = 'text',
  name,
  value,
  defaultValue,
  placeholder = 'please type todo title',
  onChange,
  dataTestId,
}: IInputProps) => {
  return (
    <Styled.InputComp
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      data-testid={dataTestId}
    />
  );
};

export default Input;
