import React, { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import {
  Link,
  Links,
  NavbarStyled,
  Buttons,
  Wrapper,
  HamburgerStyled,
  MobileMenu,
  MobileButtons,
  Shadow,
  MobileLogo,
  BlackLink, BlackLinkContainer,
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

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <Shadow onClick={() => setOpen(false)} isOpen={isOpen} />
      <MobileMenu isOpen={isOpen}>
        <MobileLogo>
          <img
            style={{ width: 88, height: 40 }}
            src={Logo as string}
            alt="logo"
          />
        </MobileLogo>
        <BlackLinkContainer>
          <BlackLink onClick={() => setOpen(false)} to="#organizator">Organizator</BlackLink>
          <BlackLink onClick={() => setOpen(false)} to="#agenda">Agenda & Prelegenci</BlackLink>
          <BlackLink onClick={() => setOpen(false)} to="#partners">Partnerzy & Sponsorzy</BlackLink>
          <BlackLink onClick={() => setOpen(false)} to="#contact">Kontakt</BlackLink>
        </BlackLinkContainer>
        <MobileButtons>
          <Button
            onClick={() => setOpen(false)}
            style={{
              width: '100%', background: '#00662B', border: 'none',
            }}
            label="Agenda"
            type="ghost"
          />
          <Button onClick={() => setOpen(false)} style={{ width: '100%' }} label="Zapisz się" type="secondary" />
        </MobileButtons>
      </MobileMenu>
      <NavbarStyled scrollPosition={scrollPosition && !isOpen}>
        <Wrapper>
          <Links>
            <img
              style={{ width: 88, height: 40 }}
              src={Logo as string}
              alt="logo"
            />
            <Link to="#organizator">Organizator</Link>
            <Link to="#agenda">Agenda & Prelegenci</Link>
            <Link to="#partners">Partnerzy & Sponsorzy</Link>
            <Link to="#contact">Kontakt</Link>
          </Links>
          <Buttons>
            <Button
              onClick={() => {
                window.location.href = '#agenda';
              }}
              label="Agenda"
              type="ghost"
            />
            <Button
              onClick={() => {
                window.open('https://app.evenea.pl/event/887847-4/');
              }}
              label="Zapisz się"
              type="secondary"
            />
          </Buttons>
          <HamburgerStyled>
            <Hamburger color={scrollPosition ? 'black' : isOpen ? 'black' : 'white'} toggled={isOpen} toggle={setOpen} />
          </HamburgerStyled>
        </Wrapper>
      </NavbarStyled>
    </>
  );
};
