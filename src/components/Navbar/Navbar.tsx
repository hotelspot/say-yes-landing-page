import React, { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import {
  Link, Links, NavbarStyled, Buttons, Wrapper, HamburgerStyled,
} from './Navbar.styled';
import { Logo } from '../../assets';
import { Button } from '../Button/Button';

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <NavbarStyled scrollPosition={scrollPosition}>
      <Wrapper>
        <Links>
          <img
            style={{ width: 88, height: 40 }}
            src={Logo as string}
            alt="logo"
          />
          <Link to="#organizator">Organizator</Link>
          <Link to="#agenda">Agenda & Prelegenci</Link>
          <Link to="#">Partnerzy & Sponsorzy</Link>
          <Link to="#contact">Kontakt</Link>
        </Links>
        <Buttons>
          <Button label="Agenda" type="ghost" />
          <Button label="Zapisz się" type="secondary" />
        </Buttons>
        <HamburgerStyled>
          <Hamburger color={scrollPosition ? 'black' : 'white'} toggled={isOpen} toggle={setOpen} />
        </HamburgerStyled>
      </Wrapper>
    </NavbarStyled>
  );
};
