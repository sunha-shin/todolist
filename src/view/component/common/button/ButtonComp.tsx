import { colors } from 'GlobalStyle';
import * as Styled from './ButtonComp.Styled';
import React from 'react';

export interface IButtonCompProps {
  color?: string;
  width?: string;
  height?: string;
  $backgroundColor?: string;
  children: React.ReactNode;
  onClickFunc?: () => void;
  priority?: string;
  $borderColor?: string;
}

const ButtonComp = ({
  color = colors.white,
  width = '100px',
  height = '35px',
  $backgroundColor = colors.white,
  children,
  $borderColor,
  onClickFunc = () => null,
}: IButtonCompProps) => {
  return (
    <Styled.Button
      onClick={onClickFunc}
      color={color}
      width={width}
      height={height}
      $backgroundColor={$backgroundColor}
      $borderColor={$borderColor}
    >
      {children}
    </Styled.Button>
  );
};

export default ButtonComp;
