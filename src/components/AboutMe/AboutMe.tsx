import React from 'react';
import {
  Avatar,
  Contact, ContactContainer,
  Container, Description, Information, InformationItem, InformationLabel, List, Paragraph, SocialsMedia, Username,
} from './AboutMe.styled';
import SvgCalendar from '../icons/Calendar';
import SvgPin from '../icons/Pin';
import SvgEmail from '../icons/Email';
import SvgSmartphone from '../icons/Smartphone';
import { AvatarJuliuszZglinski } from '../../assets';
import Facebook from '../icons/Facebook';
import Linkedin from '../icons/Linkedin';
import Instagram from '../icons/Instagram';
import Youtube from '../icons/Youtube';

export const AboutMe = () => (
  <Container id="organizator">
    <Information>
      <InformationItem>
        <SvgCalendar />
        <InformationLabel>08.06.2024</InformationLabel>
      </InformationItem>
      <InformationItem>
        <SvgPin />
        <InformationLabel>Medweckiego 3, Balice</InformationLabel>
      </InformationItem>
      <InformationItem>
        <SvgEmail />
        <InformationLabel>konferencjapowiemtak@gmail.com</InformationLabel>
      </InformationItem>

    </Information>
    <Contact>
      <Avatar src={AvatarJuliuszZglinski as string} />
      <ContactContainer>
        <List>
          <Username>Juliusz Zgliński</Username>
          <Description>Organizator konferencji “Powiem TAK!”</Description>
        </List>
        <Paragraph>
          Działacz na rzecz ludzi z niepełnosprawnością oraz mówca motywacyjny.
          Jest organizatorem, a także pomysłodawcą dużej ogólnopolskiej konferencji "Powiem Tak" (na temat niepełnosprawności) w Krakowie, a także współorganizatorem konferencji ,,Jak się masz?” (na temat odporności psychicznej). Julek jest także autorem wielu publikacji w mediach społecznościowych (przede wszystkim na LinkedIn), gdzie porusza te ważne tematy. Na co dzień jest jednak jak to sam o sobie pisze zwykłym chłopakiem i licealistą.
          W wolnych chwilach uwielbia czytać dobre książki, interesuje się kinem a także hip hopem który od niedawna tworzy.
        </Paragraph>

        <SocialsMedia>
          <a target="_blank" href="http://www.linkedin.com/in/juliusz-zgli%C5%84ski-85a99223a" rel="noreferrer">
            <Linkedin />
          </a>
          <a target="_blank" href="https://youtube.com/@juliusz_zglinski?si=BFYt2yL3s4sbyWF9" rel="noreferrer">
            <Youtube />
          </a>
        </SocialsMedia>
      </ContactContainer>
    </Contact>
  </Container>
);
