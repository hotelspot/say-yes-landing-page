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

      <Section>
        <SectionBox>
          <Title>Krzysiek Grabara</Title>
          <Typography>
            Krzysiek Grabara urodził się w 1985 roku w Kościanie. Jest samoukiem. Malarstwem zajął się w lutym 2019
            roku. Udziela także warsztatów i konsultacji z zakresu fotografii. W 2018 roku, na dwa lata przed emeryturą,
            w związku z upokorzeniem i dehumanizacją rzucił pracę jako policjant by zająć się tworzeniem. Po roku
            malowania został wyróżniony przez Polish Masters of Art w kategorii #youngmasters za obraz wykonany techniką
            akrylu oraz dwukrotnie w roku następnym za prace wykonane w technice pasteli olejnej.
            <br />
            <br />
            Największym sukcesem jest wystawa indywidualna w Ochorowiczówce – Muzeum Magicznego realizmu w Wiśle oraz
            uczestnictwo obrazu “Tkanka” z cyklu Messenger w aukcji surrealizmu organizowanej przez Desa Unicum obok
            Zdzisława Beksińskiego, Rafała Olbińskiego, Tomasza Sętowskiego, Maksymiliana Novaka-Zemplińskiego i innych.
            <br />
            <br />
            Już prawie 700 prac artysty znajduje się w kolekcjach prywatnych i instytucjonalnych ( Muzeum Magicznego
            Realizmu w Wiśle) w Polsce, Austrii, Finlandii, Irlandii, Wielkiej Brytanii, Szwajcarii, Francji, Hiszpanii,
            Włoszech, Belgii, Holandii, Niemczech, Portugalii oraz Chinach i USA.
          </Typography>
        </SectionBox>
        <SectionBox img={Image4 as string} />
      </Section>

      <Section>
        <SectionBox img={Img1JPG as string} />
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

      </Section>
    </Wrapper>
  </Container>
);
