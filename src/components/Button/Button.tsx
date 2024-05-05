import React, { FC, MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label:string;
    type:'ghost'|'secondary'
}

export const Button:FC<ButtonProps> = ({ label, onClick, type }) => {
  const r = 'r';
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
