import React, { CSSProperties, FC, MouseEventHandler } from 'react';
import { ButtonStyled } from './Button.styled';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    label:string;
    type:'ghost'|'secondary'|'default'
    style?:CSSProperties
}

export const Button:FC<ButtonProps> = ({
  style, label, onClick, type,
}) => {
  const r = 'r';
  return (
    <ButtonStyled style={style} type={type} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};
