import React from 'react';
import {
  Avatar,
  Contact, ContactContainer,
  Container, Description, Information, InformationItem, InformationLabel, Paragraph, Username,
} from './AboutMe.styled';
import SvgCalendar from '../icons/Calendar';
import SvgPin from '../icons/Pin';
import SvgEmail from '../icons/Email';
import SvgSmartphone from '../icons/Smartphone';
import { AvatarJuliuszZglinski } from '../../assets';

export const AboutMe = () => (
  <Container>
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
        <InformationLabel>j.zglinski@gmail.com</InformationLabel>
      </InformationItem>
      <InformationItem>
        <SvgSmartphone />
        <InformationLabel>+48 503 199 102</InformationLabel>
      </InformationItem>
    </Information>
    <Contact>
      <Avatar src={AvatarJuliuszZglinski as string} />
      <ContactContainer>
        <Username>Juliusz Zgliński</Username>
        <Description>Organizator konferencji “Powiem TAK!”</Description>
        <Paragraph>
          Dzień dobry, nazywam się Julek, mam 17 lat i obecnie chodzę do Liceum Ogólnokształcącego w Krakowie 🏫  Niby nie robię nic specjalnego; nie jestem żadnym menagerem ani coachem... ot kolejny zwykły licealista 🙃
        </Paragraph>
      </ContactContainer>
    </Contact>
  </Container>
);
