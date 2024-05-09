import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import {
  Link, Links, NavbarStyled, Buttons, Wrapper, HamburgerStyled,
} from './Navbar.styled';
import { Logo } from '../../assets';
import { Button } from '../Button/Button';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
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
        <HamburgerStyled color="white" toggled={isOpen} toggle={setOpen} />
      </Wrapper>
    </NavbarStyled>
  );
};
