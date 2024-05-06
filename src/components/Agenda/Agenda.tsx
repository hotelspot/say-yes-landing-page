import React from 'react';
import {
  AgendaList,
  Container, Header, Title, Wrapper,
} from './Agenda.styled';
import { AgendaItem } from '../AgendaItem/AgendaItem';

export const Agenda = () => (
  <Container>
    <Wrapper>
      <Title>Zobacz kto u nas wystąpi!</Title>
      <Header>
        AGENDA
      </Header>
      <AgendaList>
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
      </AgendaList>
    </Wrapper>
  </Container>
);
