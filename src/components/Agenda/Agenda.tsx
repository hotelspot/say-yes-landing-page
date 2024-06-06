import React from 'react';
import {
  AgendaList, Container, Header, Title, Wrapper,
} from './Agenda.styled';
import { AgendaItem, AgendaItemProps } from '../AgendaItem/AgendaItem';
import { AvatarJuliuszZglinski, EmptyImagePNG } from '../../assets';
import {
  AnnaJ,
  ArrekW, BartoszM,
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
  NataliaP,
  KatarzynaMichaelis, MMjach,
} from '../../assets/avatars';

export const _agenda_list: AgendaItemProps[] = [

  {
    title: 'Powitanie',
    time: '10:00 - 10:15',
    alone: true,
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
    time: '10:15 - 11:00',
    isSmall: true,
  },
  {
    title: 'PANEL I: Nierówności wokół nas',
    description: <>
      Prelegenci opowiadają o swoich doświadczeniach i nierównościach, jakie napotkali
      {' '}
      <br />
      na swojej drodze z powodu niepełnosprawności

      W tym roku swoimi historiami podzielą się z Uczestnikami następujące osoby:
      <br />
      <br />
      Justyna Romanowska - jedna z najbardziej pozytywnych twórców na LinkedIn.
      <br />
      Od ponad sześciu lat jest Ona negocjatorką i liderką zespołu, w jednej
      {' '}
      <br />
      z najważniejszych Kancelarii Prawnych w Polsce
      <br />
      <br />
      Garcioszka (Weronika Garsztka) - Jak sama o sobie pisze: dziewczyna po udarze.
      Weronika dała jednak radę przełamać wiele barier i obecnie poprzez swoje social media udowadnia, że można prowadzić szczęśliwe życie po udarze, którego skutki nadal odczuwa.
      <br />
      <br />
      Arkadiusz Warchał - to absolwent Dziennikarstwa i Komunikacji Społecznej.
      <br />
      Pracuje w Krakowskim Kuratorium Oświaty
      Arek to człowiek bardzo pozytywnie nastawiony do życia i ludzi.
      Na co dzień porusza się On na wózku, jednak nie powstrzymuje Go to przed życiem na 100%.

    </>,
    time: '11:00 - 11:45',
    avatars: [
      {
        name: 'Justyna Romanowska',
        img: JustynaRomanowska,
        desc: '11:00 - 11:15',
      },
      {
        name: 'Garcioszka (Weronika Garsztka)',
        img: Weronika,
        desc: '11:15 - 11:30',
      },
      {
        name: 'Arkadiusz Warchał',
        img: ArrekW,
        desc: '11:30 - 11:45',
      },
    ],
  },
  {
    title: 'PANEL II: Jak radzić sobie z dyskryminacją?',
    description: <>
      W tej części Prelegenci odpowiadają na pytanie postawione w tytule panelu:
      <br />
      <br />
      🔴 Jak walczyć z uprzedzeniami❓
      🔴 W jaki sposób tworzyć środowisko inkluzywne dla wszystkich ❓
      <br />
      <br />
      Dawid Doliński, to bardzo pozytywny człowiek z pasją do logistyki.
      Obecnie jako lider buduje własną rodzinną firmę zajmująca się transportem osób w kraju i za granicą...
      <br />
      {' '}
      I to właśnie z tego powodu pojawi się na konferencji
      Jak stworzyć firmę bardziej otwartą na OzN❓
      <br />
      <br />
      Pani Zuzanna-Maciaszek to osoba, która postanowiła kontynuować misję pomocy ludziom z niepełnosprawnością, którą rozpoczął jej Ojciec Piotr Janaszek 💙
      Jak sama mówi - chciałaby zbudować świat, w którym osoby z niepełnosprawnością nie czują się ciężarem, pracują, mają swoje pasje, decydują o sobie i są szczęśliwe 😃
    </>,
    time: '11:45 - 12:15',
    avatars: [
      {
        name: 'Dawid Doliński',
        img: DawidD,
        desc: '11:45 - 12:00',
      },
      {
        name: 'Zuzanna Janaszek-Maciaszek',
        img: Zuzanna,
        desc: '12:00 - 12:15',
      },
    ],
  },
  {
    title: 'Gość specjalny - Maciej Kawecki',
    time: '12:15 - 12:35',
    isDiscus: false,
    avatars: [
      {
        name: 'Maciej Kawecki',
        img: MaciejK,
      },
    ],
    description: <>
      <br />
      Dr Maciej Kawecki - Maciek jest jednym z tych ludzi, których nikomu chyba nie trzeba przedstawiać 😉Jest on
      prorektorem ds. innowacji WSB Warszawa, popularyzatorem i pasjonatem technologii 🌍
      <br />
      <br />
      Już po raz drugi wystąpi jako Prelegent na mojej konferencji ,,Powiem Tak" 🙃
      {' '}
      <br />
      Jak podkreśla stawia on na człowieka, który rozumie, że technologia to tylko i aż narzędzie w jego rękach, którym
      powinien pozytywnie zmieniać świat 💪🏻Zresztą nie bez powodu jest on również Prezesem Instytutu Lema, który co roku
      organizuje ogromne wydarzenie pt. ,,Bomba Megabitowa", na którym poruszana jest tematyka zmieniającej się
      rzeczywistości.
      {' '}
      <br />
      Maciek od wielu lat wspiera mnie również w moich działaniach, na rzecz ludzi z niepełnosprawnością ♿Nie bez powodu
      powiedziałem mu kiedyś, że nie tylko jest moim przyjacielem, ale poniekąd również moim mentorem 🤝😃
      I tak uważam po dziś dzień ❗
    </>,
  },
  {
    title: 'Przerwa kawowa',
    time: '12:35 - 12:50',
    isSmall: true,
  },
  {
    title: 'Dyskusja I (Samorządowcy)',
    time: '12:50 - 13:20',
    isDiscus: true,
    avatars: [
      {
        name: 'Tomasz Bill',
        img: TomaszB,
        owner: 'Prowadząca',
      },
      {
        name: 'Jolanta Bień ',
        img: EmptyImagePNG,
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
    title: 'Panel |||: Jak spełniać marzenia?',
    time: '13:20 - 14:05',
    avatars: [
      {
        name: 'Monika Zadłużna',
        img: Monika,
        desc: '13:20 - 13:35',
      },
      {
        name: 'Grażyna Zgliński-Brzózy',
        img: GrazynaZ,
        desc: '13:35 - 13:50',
      },
      {
        name: 'Bartosz Mrozek',
        img: BartoszM,
        desc: '13:50 - 14:05',
      },
    ],
    description: <>
      ,,Jak spełniać marzenia? - w tej części Prelegenci odpowiadają na pytanie postawione w tytule panelu ♿
      <br />
      <br />
      MoniKA Zadłużna - Monika to osoba bardzo pozytywnie nastawiona do życia i ludzi.
      Od roku 2017 jest Doktorem nauk ekonomicznych w dyscyplinie zarządzania. Stopień doktora uzyskała na Uniwersytecie
      Ekonomicznym w Poznaniu.
      Celem pomocy w rozbudzeniu twórczości, upodobania do sztuki twórczej oraz nauki przedsiębiorczości powstał notes
      skierowany do dzieci - „Lemka w żywiole oszczędzania”
      <br />
      <br />

      Grażyna Zgliński-Brzózy - Zacznijmy od tego, że jak pewnie wielu z Was wie, jest to moja Mama 😃
      To jednak nie koniec - jest bowiem dziennikarzem i teologiem, a także mediatorem.
      Została również nagrodzona za swoje reportaże radiowe 🎙️
      Na LinkedIn możecie natomiast przeczytać jej publikacje z cyklu
      <br />
      <br />
      #ŚwiatyGrażyny
      #6plus1
      <br />
      <br />
      Dlaczego zaś poprosiłem ją by mówiła o marzeniach❓
      Cóż, przede wszystkim dlatego, że to właśnie ona uwierzyła w moje ❗
      I myślę, że to właśnie dzięki jej wsparciu jestem tu gdzie jestem 💙
      Wspierała też zawsze moje Rodzeństwo ⭐
      <br />
      <br />
      A kto lepiej jak nie ten, który pozwala marzyć może o nich mówić❓
      <br />
      <br />
      Bartosz Mrozek - Pan Bartosz jest pierwszym adeptem sztuki latania na szybowcu w ramach projektu "Rozwiń
      Skrzydła" 😃
      <br />
      <br />
      Jest też w gronie pierwszych licencjonowanych pilotów szybowcowych z niepełnosprawnością.
      Jak sam o tym mówi: „Latam bo to uwalnia mój umysł od nieistotnych rzeczy, a moje ciało od niepełnosprawności. Gdy
      jestem wśród chmur to czuję, że życie jest piękne jak widoki pod skrzydłami."
      <br />
      <br />
      Może dodam do tego tylko iż myślę, że paru ludzi po tym panelu również dostanie skrzydeł ✈️
      A jestem pewien, że wystąpienie Pana Bartosza udowodni, iż nawet pomimo niepełnosprawności, można wziąć stery w
      swoje ręce i lecieć... Lecieć po
      #marzenia ✨
    </>,
  },
  {
    title: 'Przerwa obiadowa',
    time: '14:05 - 14:45',
    isSmall: true,
  },
  {
    title: 'Gość specjalny - Marcin Ryszka',
    time: '14:45 - 15:05',
    isDiscus: true,
    avatars: [
      {
        name: 'Marcin Ryszka',
        img: EmptyImagePNG,
      },
    ],
  },

  {
    title: 'Panel |V: Innowacje wokół nas',
    time: '15:05 - 15:20',
    avatars: [
      {
        name: 'Wiesław Nowiński',
        img: Wieslaw,
        desc: '15:05 - 15:20',
      },
    ],
    description: <>

      Wiesław Nowiński - Pan Wiesław, to polski naukowiec pracujący w Singapurze w Agency for Science, Technology and
      Research, jest profesorem w dziedzinie nauk technicznych. A także autorem komputerowych map mózgu i laureatem
      wielu prestiżowych światowych nagród, w tym III edycji konkursu „Wybitny Polak” i jest autorem wielu patentów.
      <br />
      Kawaler Orderu Zasługi Rzeczypospolitej Polskiej, za „zasługi w rozwijaniu polsko-singapurskiej współpracy.
      <br />
      <br />
      Jako ciekawostkę przytoczę też fakt, iż w 2018 roku został uhonorowany znaczkiem pocztowym, wydanym przez Pocztę
      Polską z okazji 100 lecia Urzędu Patentowego RP ✉️😮
      <br />
      {' '}
      <br />
    </>,
  },
  {
    title: 'Dyskusja || Jak nowe technologie pomagają OzN?',
    time: '15:20 - 15:50',
    isDiscus: true,
    avatars: [
      {
        name: 'Juliusz Zgliński',
        owner: 'Prowadzący',
        img: JuliuszZ,
      },
      {
        name: 'Kacper Kupczak',
        img: KacperK,
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
    title: 'Panel |V: Innowacje wokół nas, cz. 2 ',
    time: '15:50 - 16:20',
    avatars: [
      {
        name: 'Kacper Kupczak',
        img: KacperK,
        desc: '15:50 - 16:05',
      },
      {
        name: 'Miłosz Stanisławski',
        img: Milosz,
        desc: '16:05 - 16:20',
      },
    ],

    description: <>
      ,,Innowacje, które zmieniają rzeczywistości - Innowacje wokół nas"
      <br />
      <br />
      - w tej części Prelegenci odpowiedzą na pytania ♿
      <br />
      <br />
      🔴 Jak nowe technologie pomagają ludziom z niepełnosprawnością❓
      <br />
      🔴 Czy nauka może przyczynić się do polepszenia ich sytuacji❓
      <br />
      <br />
      Kacper Kupczak - Kacper choć ma zaledwie kilkanaście lat, zmienił już trochę w swoim otoczeniu. Przeprowadził
      wiele wykładów i warsztatów, a co ważniejsze wraz z gronem dużo bardziej doświadczonych osób stworzył aplikację,
      która ma pomagać rodzinom dzieci autystycznych.
      <br />
      Jak sam mówi o tym projekcie: ,,Bardzo zależy mi na tym by stworzyć aplikacje, która będzie pomagać rodzinom
      dzieci z ASD, ponieważ wiem, że są to osoby, które potrzebują wsparcia, by ich dzieci mogły prowadzić (stosunkowo)
      normalne życie."
      <br />
      <br />
      Miłosz Stanisławski - Miłosza możecie kojarzyć z poprzedniej edycji konferencji, ponieważ był on jej
      współprowadzącym wraz z Pauliną Patro ✨ Ze swojej roli wywiązał się znakomicie i nic dziwnego, bo jest on w tej
      dziedzinie profesjonalistą.
      <br />
      Na co dzień zajmuje się bowiem wystąpieniami publicznymi i... hotelarstwem. To właśnie o nim opowie w swojej
      Prelekcji 😊Jak przystosować pokoje hotelowe do potrzeb OzN❓O tym i o innych rzeczach dowiecie się właśnie z jego
      wystąpienia 😉
      {' '}
      <br />
      Jak sam mówi o swojej firmie: ,,Kwestionujemy autorytety i łamiemy zasady. Z całych sił usiłujemy doprowadzić do
      rewolucji, która zniszczy to, co nie funkcjonuje w należyty sposób. Wszystko po to, by pozbyć się niszczących
      przekonań i osiągnąć wyższy poziom rozwoju".
      <br />

    </>,
  },
  {
    title: 'Gość specjalny - Bartosz Ostałowski',
    time: '16:20 - 16:35',
    isDiscus: true,
    avatars: [
      {
        name: 'Bartosz Ostałowski',
        img: EmptyImagePNG,
      },
    ],
  },
  {
    title: 'Dyskusja III  Rodzicielstwo, a niepełnosprawność',
    time: '16:35 - 17:05',
    isDiscus: true,
    avatars: [
      {
        name: 'Natalia Prokaziuk',
        owner: 'Prowadzący',
        img: NataliaP,
      },
      {
        name: 'Ewa Żak-Lisewska',
        img: EmptyImagePNG,
      },
      {
        name: 'Grażyna Zgliński-Brzózy',
        img: GrazynaZ,
      },
      {
        name: 'Julia Małecka',
        img: JuliaMałecki,
      },
      {
        name: 'Katarzyna Michaelis',
        img: KatarzynaMichaelis,
      },
    ],
  },
  {
    title: 'Goście specjalni - Michał i Karolina Jach',
    time: '17:20 - 17:35',
    isDiscus: true,
    avatars: [
      {
        name: 'Karolina i Michał Jach',
        img: MMjach,
      },
    ],
  },

  {
    title: 'Przyznanie nagrody',
    time: '17:35 - 17:45',
    isSmall: true,
  },
  {
    title: 'Przemowa końcowa',
    time: '17:45 - 17:55',
    alone: true,
    avatars: [
      {
        name: 'Juliusz Zgliński',
        img: JuliuszZ,
      },
    ],
  },
  {
    title: 'Przyznanie dyplomów',
    time: '17:55 - 18:00',
    isSmall: true,
  },
  {
    title: 'Zakończenie konferencji',
    time: '18:00',
    isSmall: true,
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
