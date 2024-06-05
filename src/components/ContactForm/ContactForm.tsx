import React from 'react';
import { Button, Image } from '@nextui-org/react';
import {Bus, Locate, MapPinned, Train} from 'lucide-react';
import {
  Banner,
  Container, FormWrapper, Header, Information, Title, Wrapper,
} from './ContactForm.styled';
import { Logo } from '../../assets';
import { Map } from '../../assets';
import { InformationItem, InformationLabel } from '../AboutMe/AboutMe.styled';
import SvgCalendar from '../icons/Calendar';
import SvgPin from '../icons/Pin';
import SvgEmail from '../icons/Email';
import SvgSmartphone from '../icons/Smartphone';
import { Form } from './components/Contact';

export const ContactForm = () => (
  <Container>
    <Wrapper>
      <Title>Masz pytania? Napisz do nas!</Title>
      <Header>KONTAKT</Header>
      <FormWrapper>
        <Banner id="contact">
          <img src={Logo as string} width={256} alt="logo" />
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
              <InformationLabel>
                <a href="mailto:konferencjapowiemtak@gmail.com">
                  konferencjapowiemtak@gmail.com
                </a>
              </InformationLabel>
            </InformationItem>
          </Information>
        </Banner>
        <Form />
      </FormWrapper>
      <Header>jak dojechać </Header>
      <FormWrapper>
        <Banner id="contact">
          <Information>
            <InformationItem>
              <Locate size={24}/>
              <InformationLabel>50.07666852852819 <br/> 19.803666881420796</InformationLabel>
            </InformationItem>
            <InformationItem>
              <MapPinned/>
              <InformationLabel>
                <a href="https://maps.app.goo.gl/K9b1i3fMa2FFScKKA?g_st=ic" target="_blank" rel="noreferrer">
                  Google Maps
                </a>
              </InformationLabel>
            </InformationItem>
            <InformationItem>
              <Train/>
              <InformationLabel>
                <a href="https://www.kolejemalopolskie.com.pl/pl/rozklad-jazdy/rozklady-kolejowe/wieliczka-rynek-kopalnia-kra kow-glowny-krakow-lotniskoairport"
                   target="_blank" rel="noreferrer">
                  Kolejka
                </a>
              </InformationLabel>
            </InformationItem>
            <InformationItem>
              <Bus/>
              <InformationLabel>
                <a href="https://www.kolejemalopolskie.com.pl/pl/rozklad-jazdy/rozklady-kolejowe/wieliczka-rynek-kopalnia-kra kow-glowny-krakow-lotniskoairport"
                   target="_blank" rel="noreferrer">
                  linie autobusowe:<br/> <b>209</b> , <b>300</b> oraz linia nocna: <b>902</b>
                </a>
              </InformationLabel>
            </InformationItem>
          </Information>
        </Banner>
        <Image src={Map as string} width={'80%'} alt="mapa"/>
      </FormWrapper>
    </Wrapper>
  </Container>
);
