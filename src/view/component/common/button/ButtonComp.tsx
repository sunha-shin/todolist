import { colors } from 'GlobalStyle';
import * as Styled from './ButtonComp.Styled';
import React from 'react';

export interface IButtonCompProps {
  color?: string;
  width?: string;
  height?: string;
  $backgroundColor?: string;
  children: React.ReactNode;
}

const ButtonComp = ({
  color = colors.white,
  width = '100px',
  height = '35px',
  $backgroundColor = colors.white,
  children,
}: IButtonCompProps) => {
  return (
    <Styled.Button color={color} width={width} height={height} $backgroundColor={$backgroundColor}>
      {children}
    </Styled.Button>
  );
};

export default ButtonComp;
