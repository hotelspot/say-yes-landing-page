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
        <img width={220} src={Logo as string}/>
      </Column>
      <Column>
        <LinksContainer>
        <LinkIcon href="#">
            <Calendar fill={colors.typography[300]} />
            <span>08.06.2024</span>
          </LinkIcon>
          <LinkIcon href="#">
            <Pin fill={colors.typography[300]} />
            <span>Medweckiego 3, Balice</span>
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
        <Row>
          <Links>

            <Link href="#organizator">
              Organizator
            </Link>
            <Link href="#agenda">
              Agenda & Prelegenci
            </Link>
            <Link href="#partners">
              Partnerzy & Sponsorzy
            </Link>
            <Link href="#contact">
              Kontakt
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
        © Powiem Tak 2024
      </PoweredBy>
    </Bottom>
  </FooterStyled>
);
