import React from 'react';
import { Button } from '@nextui-org/react';
import {
  Banner,
  Container, FormWrapper, Header, Title, Wrapper,
} from './ContactForm.styled';
import { Logo } from '../../assets';
import { Information, InformationItem, InformationLabel } from '../AboutMe/AboutMe.styled';
import SvgCalendar from '../icons/Calendar';
import SvgPin from '../icons/Pin';
import SvgEmail from '../icons/Email';
import SvgSmartphone from '../icons/Smartphone';
import { Form } from './components/Contact';

export const ContactForm = () => (
  <Container>
    <Wrapper>
      <Title>Skontaktuj się!</Title>
      <Header>KONTAKT</Header>
      <FormWrapper>
        <Banner id="contact">
          <img src={Logo as string} width={256} alt="logo" />
          <Information style={{ flexDirection: 'column' }}>
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
            <InformationItem>
              <SvgSmartphone />
              <InformationLabel>+48 536 395 472</InformationLabel>
            </InformationItem>
          </Information>
        </Banner>

        <Form />
      </FormWrapper>
    </Wrapper>
  </Container>
);
