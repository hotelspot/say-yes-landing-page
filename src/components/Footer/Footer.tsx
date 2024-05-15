import React from 'react';
import {
  Bottom,
  Column, FooterStyled,
  Line, Link, LinkIcon, Links, LinksContainer,
  PoweredBy, Row, SocialContainer, Title, Wrapper,
} from './Footer.styled';
import { Logo } from '../../assets';
import Calendar from '../icons/Calendar';
import { colors } from '../../styles/colors';
import Pin from '../icons/Pin';
import Email from '../icons/Email';
import Linkedin from '../icons/social/Linkedin';
import Youtube from '../icons/social/Youtube';

export const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <Column>
        <img width={220} src={Logo as string} />
        <LinksContainer>
          <LinkIcon href="#">
            <Calendar fill={colors.typography[300]} />
            <span>08.06.2024</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Pin fill={colors.typography[300]} />
            <span>Medewckiego 3,Balice</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Email fill={colors.typography[300]} />
            <a href="mailto:konferencjapowiemtak@gmail.com">
              <span>konferencjapowiemtak@gmail.com</span>
            </a>
          </LinkIcon>
        </LinksContainer>
      </Column>
      <Column>
        <Title>Nawigacja</Title>
        <Row>
          <Links>
            <Link href="#___gatsby">
              Start
            </Link>
            <Link href="#organizator">
              Organizator
            </Link>
            <Link href="#agenda">
              Agenda & Prelegenci
            </Link>
            <Link>
              Lokalizacja
            </Link>
          </Links>
          <Links>
            <Link href="#partners">
              Partnerzy & Sponsorzy
            </Link>
            <Link href="#contact">
              Kontakt
            </Link>
            <Link>
              Polityka prywatności
            </Link>
          </Links>
        </Row>
      </Column>
    </Wrapper>
    <Bottom>
      <SocialContainer>
        <a target="_blank" href="http://www.linkedin.com/in/juliusz-zgli%C5%84ski-85a99223a" rel="noreferrer">
          <Linkedin />
        </a>
        <a target="_blank" href="https://youtube.com/@juliusz_zglinski?si=BFYt2yL3s4sbyWF9" rel="noreferrer">
          <Youtube />
        </a>
      </SocialContainer>
      <Line />
      <PoweredBy>
        © 2024 PowiemTAK!, powered by
        {' '}
        <a href="https://www.hotelspot.pl/">Hotelspot.pl</a>
      </PoweredBy>
    </Bottom>
  </FooterStyled>
);
