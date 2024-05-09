import React from 'react';
import {
  Bottom,
  Column, FooterStyled,
  Line, Link, LinkIcon, Links,
  PoweredBy, Row, SocialContainer, Title, Wrapper,
} from './Footer.styled';
import { Logo } from '../../assets';
import Calendar from '../icons/Calendar';
import { colors } from '../../styles/colors';
import Pin from '../icons/Pin';
import Email from '../icons/Email';
import Smartphone from '../icons/Smartphone';
import Facebook from '../icons/social/Facebook';
import Linkedin from '../icons/social/Linkedin';
import Instagram from '../icons/social/Instagram';
import Youtube from '../icons/social/Youtube';

export const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <Column>
        <img width={220} src={Logo as string} />
        <Links>
          <LinkIcon href="#">
            <Calendar fill={colors.typography[300]} />
            <span>10.05.2024</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Pin fill={colors.typography[300]} />
            <span>Medewckiego 3,Balice</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Email fill={colors.typography[300]} />
            <span>j.zglinski@gmail.com</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Smartphone fill={colors.typography[300]} />
            <span>+42 241 124 124</span>
          </LinkIcon>
        </Links>
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
            <Link>
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
        <a>
          <Facebook />
        </a>
        <a>
          <Linkedin />
        </a>
        <a>
          <Instagram />
        </a>
        <a>
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
