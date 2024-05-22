import React from 'react';
import {
  Container, Section, SectionBox, Title, Typography, Wrapper,
} from './Gallery.styled';
import {
  Image1, Image1a, Image2, Image3, Image4, Img1JPG, Logo,
} from '../../assets';
import SvgPin from '../icons/Pin';
import { Button } from '../Button/Button';

export const Gallery = () => (
  <Container>
    <Wrapper>
      <Section>
        <SectionBox>
          <img width={240} src={Logo as string} />
          <Typography>
            Powiedzmy wprost niepełnosprawni nadal nie mają równych szans!
            W wielu przypadkach odpowiadają za to niedociągnięcia systemowe lub nieświadomość na temat niepełnosprawności.
            Dlatego cieszę się, że to już druga edycja tego wydarzenia i tak jak ostatnim razem media okazały jej duże wsparcie.
            Trzeba rozpocząć zmianę już teraz, a najlepiej zacząć ją od ludzkich serc.
            Wierzę, że ludzie wokół nas, w końcu jednym głosem powiedzą TAK dla niepełnosprawności!
          </Typography>
        </SectionBox>
        <SectionBox img={Image1a as string} />
      </Section>
      <Section>
        <SectionBox img={Image2 as string} />
        <SectionBox>
          <Title>Hilton Garden Inn Krakow Airport</Title>
          <Typography>
            Hotel znajduje się przy samym lotnisku Kraków-Balice, dzięki czemu idealnie nadaje się dla zmęczonych długą podróżą gości lub pasażerów, których lot zaplanowany jest na wczesny poranek. Centrum miasta, zamek królewski na Wawelu oraz muzea przy Rynku Głównym znajdują się w odległości 13 km od hotelu. Śniadanie, lunch i kolacja podawane w naszej restauracji.
          </Typography>
        </SectionBox>
      </Section>
      {/* <Section> */}
      {/*  <SectionBox> */}
      {/*    <Title>Sala konferencyjna</Title> */}
      {/*    <Typography> */}
      {/*      [ do uzupełneinia... ] */}
      {/*    </Typography> */}
      {/*  </SectionBox> */}
      {/*  <SectionBox img={Image3 as string} /> */}
      {/* </Section> */}
      <Section>

        <SectionBox>
          <Title>Zapisz się na Konferencję PowiemTAK</Title>
          <Typography>
            Dołącz do nas na konferencji "PT!" i bądź częścią społeczności, która wspiera osoby z niepełnosprawnościami. Zarejestruj się, aby otrzymać dostęp do inspirujących prelekcji, praktycznych warsztatów oraz możliwości nawiązywania kontaktów z innymi uczestnikami i prelegentami
          </Typography>
          <Button
            onClick={() => {
              window.open('https://app.evenea.pl/event/887847-4/');
            }}
            label="Zapisz się"
            type="default"
          />
        </SectionBox>
        <SectionBox img={Img1JPG as string} />
      </Section>
    </Wrapper>
  </Container>
);
