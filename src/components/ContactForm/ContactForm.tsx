import React from 'react';
import { Button } from '@nextui-org/react';
import {
  Banner,
  Container, FormWrapper, Header, Information, Title, Wrapper,
} from './ContactForm.styled';
import { Logo } from '../../assets';
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
    </Wrapper>
  </Container>
);
