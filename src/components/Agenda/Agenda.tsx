import React from 'react';
import {
  AgendaList, Container, Header, Title, Wrapper,
} from './Agenda.styled';
import { AgendaItem, AgendaItemProps } from '../AgendaItem/AgendaItem';
import { AvatarJuliuszZglinski, EmptyImagePNG } from '../../assets';
import {
  AnnaJ,
  ArrekW,
  DawidD, GrazynaZ, JuliaMałecki,
  JuliuszZ,
  JustynaRomanowska,
  KacperK,
  MaciejK,
  MagdaB,
  Milosz,
  Monika,
  Piotr, TomaszB,
  Weronika,
  Wieslaw,
  Zuzanna,
} from '../../assets/avatars';

export const _agenda_list: AgendaItemProps[] = [
  {
    title: 'Początek',
    time: '10:00',
    avatars: [
      {
        name: 'Borys Szyc',
        img: EmptyImagePNG,
      },
    ],
  },

  {
    title: 'Powitanie',
    time: '10:10',
    avatars: [
      {
        name: 'Juliusz Zgliński',
        img: JuliuszZ,
      },
    ],
  },
  {
    title: 'Wystąpienia Sponsorów i Partnerów',
    description: '',
    time: '',
  },
  {
    title: 'PANEL I: Nierówności wokół nas',
    description: <>
      Prelegenci opowiadają o swoich doświadczeniach i nierównościach, jakie napotkali na swojej drodze z powodu niepełnosprawności :wheelchair:

      W tym roku swoimi historiami podzielą się z Uczestnikami następujące osoby:
      <br />
      <br />
      Justyna Romanowska - jedna z najbardziej pozytywnych twórców na LinkedIn .
      Od ponad sześciu lat jest Ona negocjatorką i liderką zespołu, w jednej z najważniejszych Kancelarii Prawnych w Polsce
      <br />
      <br />
      Garcioszka (Weronika Garsztka) - Jak sama o sobie pisze: dziewczyna po udarze.
      Weronika dała jednak radę przełamać wiele barier i obecnie poprzez swoje social media udowadnia, że można prowadzić szczęśliwe życie po udarze, którego skutki nadal odczuwa.
      <br />
      <br />
      Arkadiusz Warchał - to absolwent Dziennikarstwa i Komunikacji Społecznej.
      Pracuje w Krakowskim Kuratorium Oświaty
      Arek to człowiek bardzo pozytywnie nastawiony do życia i ludzi.
      Na co dzień porusza się On na wózku, jednak nie powstrzymuje Go to przed życiem na 100%.

    </>,
    time: '11:00 - 11:30',
    avatars: [
      {
        name: 'Justyna Romanowska',
        img: JustynaRomanowska,
        desc: '11:00',
      },
      {
        name: 'Garcioszka (Weronika Garsztka)',
        img: Weronika,
        desc: '11:15',
      },
      {
        name: 'Arkadiusz Warchał',
        img: ArrekW,
        desc: '11:30',
      },
    ],
  },
  {
    title: 'PANEL II: Nierówności wokół nas',
    description: <>
      W tej części Prelegenci odpowiadają na pytanie postawione w tytule panelu:
      <br />
      <br />
      🔴 Jak walczyć z uprzedzeniami❓
      <br />
      <br />
      🔴 W jaki sposób tworzyć środowisko inkluzywne dla wszystkich ❓
      <br />
      <br />
      Dawid Doliński, to bardzo pozytywny człowiek z pasją do logistyki.
      Obecnie jako lider buduje własną rodzinną firmę zajmująca się transportem osób w kraju i za granica... I to właśnie z tego powodu pojawi się na konferencji
      Jak stworzyć firmę bardziej otwartą na OzN❓
      <br />
      <br />
      Pani Zuzanna Maciaszek to osoba, która postanowiła kontynuować misję pomocy ludziom z niepełnosprawnością, którą rozpoczął jej Ojciec Piotr Janaszek 💙
      Jak sama mówi - chciałaby zbudować świat, w którym osoby z niepełnosprawnością nie czują się ciężarem, pracują, mają swoje pasje, decydują o sobie i są szczęśliwe 😃
    </>,
    time: '11:45 | 12:00',
    avatars: [
      {
        name: 'Dawid Doliński',
        img: DawidD,
      },
      {
        name: 'Zuzanna Janaszek',
        img: Zuzanna,
      },
    ],
  },
  {
    title: 'Wystąpienie artystyczne',

    time: '12:15',
  },
  {
    title: 'Przerwa kawowa',
    time: '12:35',
  },
  {
    title: 'Dyskusja I (Samorządowcy)',
    time: '12:50',
    avatars: [
      {
        name: 'Natalia Prokaziuk',
        img: AvatarJuliuszZglinski,
        desc: 'Prowadząca',
      },
      {
        name: 'Małgorzata Niewodowska',
        img: AvatarJuliuszZglinski,
      },
      {
        name: 'Anna Jung',
        img: AnnaJ,
      },
      {
        name: 'Magdalena Bujakowska',
        img: MagdaB,
      },

    ],
  },
  {
    title: 'Panel Jak spełniać marzenia?',
    time: '13:20 | 13:35 | 13:50',
    avatars: [
      {
        name: 'Monika Zadłużna',
        img: Monika,
        desc: 'Prowadząca',
      },
      {
        name: 'Grażyna Zgliński-Brzózy',
        img: AvatarJuliuszZglinski,
      },
      {
        name: 'Bartosz Mrozek',
        img: AvatarJuliuszZglinski,
      },
    ],
  },
  {
    title: 'Przerwa obiadowa',
    time: '14:05',
  },
  {
    title: 'Występ artystyczny',
    time: '14:45',
  },
  {
    title: 'Występ artystyczny',
    time: '15:05',
    avatars: [
      {
        name: 'Wiesław Nowiński',
        img: Wieslaw,
      },
    ],
  },
  {
    title: 'Panel Innowacje wokół nas',
    time: '15:05',
    avatars: [
      {
        name: 'Wiesław Nowiński',
        img: Wieslaw,
      },
    ],
  },
  {
    title: 'Dyskusja Jak nowe technologie pomagają OzN?',
    time: '15:20',
    avatars: [
      {
        name: 'Juliusz Zgliński Prowadzący',
        img: JuliuszZ,
      },
      {
        name: 'Maciej Kawecki',
        img: MaciejK,
      },
      {
        name: 'Piotr Krukowski',
        img: Piotr,
      },
      {
        name: 'Wiesław Nowiński',
        img: Wieslaw,
      },
    ],
  },
  {
    title: 'Dyskusja Jak nowe technologie pomagają OzN?',
    time: '15:50',
    avatars: [
      {
        name: 'Kacper Kupczak',
        img: KacperK,
      },
    ],
  },
  {
    title: 'Dyskusja Jak nowe technologie pomagają OzN?',
    time: '16:05',
    avatars: [
      {
        name: 'Miłosz Stanisławski',
        img: Milosz,
      },
    ],
  },
  {
    title: 'Dyskusja Jak nowe technologie pomagają OzN?',
    time: '16:20',
    avatars: [
      {
        name: 'Maciej Kawecki',
        img: MaciejK,
      },
    ],
  },
  {
    title: 'Dyskusja II (Rodzicielstwo a niepełnosprawność',
    time: '16:35',
    avatars: [
      {
        name: 'Prowadzący: Tomasz Bill',
        img: TomaszB,
      },
      {
        name: 'Karolina i Michał Jach',
        img: AvatarJuliuszZglinski,
      },
      {
        name: 'Grażyna Zgliński-Brzózy',
        img: GrazynaZ,
      },
      {
        name: 'Julia Małecka',
        img: JuliaMałecki,
      },
    ],
  },
  {
    title: 'Przyznanie nagrody (tajemnica)',
    time: '17:05',
  },
  {
    title: 'Przemowa końcowa - Juliusz Zgliński',
    time: '17:15',
  },
  {
    title: 'Przyznanie dyplomów',
    time: '17:25',
  },
  {
    title: 'Zakończenie konferencji',
    time: '17:35',
  },
];

export const Agenda = () => (
  <Container id="agenda">
    <Wrapper>
      <Title>Zobacz kto u nas wystąpi!</Title>
      <Header>AGENDA</Header>
      <AgendaList>
        {_agenda_list.map((props, index) => (
          <AgendaItem key={`avatar${index}`} {...props} />
        ))}
      </AgendaList>
    </Wrapper>
  </Container>
);
