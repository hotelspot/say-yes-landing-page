import React from 'react';
import {
  ADescription,
  ATitle,
  Avatar, AvatarContainer, AvatarImage,
  Avatars,
  Container, Description, Time, Title, Wrapper,
} from './AgendaItem.styled';
import { AvatarJuliuszZglinski } from '../../assets';

export const AgendaItem = () => (
  <Container>
    <Wrapper>
      <Title>
        Wprowadzenie do konferencji
      </Title>
      <Description>
        Konferencja rozpocznie się uroczystym powitaniem uczestników.
        Gospodarz konferencji wprowadzi wszystkich w tematykę wydarzenia,
        podkreślając jego charytatywny charakter oraz misję wspierania osób niepełnosprawnych.
        Podczas tego segmentu zostaną również omówione ogólne zasady, plan dnia i informacje logistyczne
      </Description>
      <Time>9:00 - 9:30</Time>
    </Wrapper>
    <Avatars>
      <Avatar>
        <AvatarImage src={AvatarJuliuszZglinski as string} />
        <AvatarContainer>
          <ATitle>Jan Kowalski</ATitle>
          <ADescription>
            Dyrektor Fundacji Dla Niepełnosprawnych, specjalista ds. integracji społecznej
          </ADescription>
        </AvatarContainer>
      </Avatar>
      <Avatar>
        <AvatarImage src={AvatarJuliuszZglinski as string} />
        <AvatarContainer>
          <ATitle>Jan Kowalski</ATitle>
          <ADescription>
            Dyrektor Fundacji Dla Niepełnosprawnych, specjalista ds. integracji społecznej
          </ADescription>
        </AvatarContainer>
      </Avatar>
    </Avatars>
  </Container>
);
