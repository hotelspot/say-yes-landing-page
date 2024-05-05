import React from 'react';
import {
  Link, Links, NavbarStyled, Buttons, Wrapper,
} from './Navbar.styled';
import { Logo } from '../../assets';
import { Button } from '../Button/Button';

export const Navbar = () => (
  <NavbarStyled>
    <Wrapper>
      <Links>
        <img style={{ width: 88, height: 40 }} src={Logo as string} alt="logo" />
        <Link to="#">Organizator</Link>
        <Link to="#">Agenta & Prelegenci</Link>
        <Link to="#">Partnerzy & Sponsorzy</Link>
        <Link to="#">Kontakt</Link>
      </Links>
      <Buttons>
        <Button label="Agenda" type="ghost" />
        <Button label="Zapisz się" type="secondary" />
      </Buttons>
    </Wrapper>
  </NavbarStyled>
);
