import React from 'react';
import {
  Container, Section, SectionBox, Title, Typography, Wrapper,
} from './Gallery.styled';
import {
  Image1, Image2, Image3, Image4, Logo,
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
            Konferencja "PT!" to wydarzenie o charakterze charytatywnym,
            skupiające się na wspieraniu osób z niepełnosprawnościami. Naszym
            celem jest tworzenie społeczności, w której każdy czuje się
            akceptowany, szanowany i ma równy dostęp do możliwości rozwoju
          </Typography>
        </SectionBox>
        <SectionBox img={Image1 as string} />
      </Section>
      <Section>
        <SectionBox img={Image2 as string} />
        <SectionBox>
          <Title>Hilton Garden Inn Krakow Airport</Title>
          <div style={{ gap: 12, display: 'flex' }}>
            <SvgPin />
            <Typography>Medweckiego 3,Balice</Typography>
          </div>
          <Typography>
            Konferencja "PT!" to wydarzenie o charakterze charytatywnym,
            skupiające się na wspieraniu osób z niepełnosprawnościami. Naszym
            celem jest tworzenie społeczności, w której każdy czuje się
            akceptowany, szanowany i ma równy dostęp do możliwości rozwoju
          </Typography>
        </SectionBox>
      </Section>
      <Section>
        <SectionBox>
          <Title>Sala "Gdańsk"</Title>

          <Typography>
            "Gdańsk" to przestronna i nowoczesna sala konferencyjna, która
            została wyposażona we wszystkie niezbędne udogodnienia, takie jak
            systemy audiowizualne, klimatyzacja i ergonomiczne meble. Dzięki
            dużej przestrzeni i elastycznemu układowi, sala ta jest idealnym
            miejscem do prowadzenia różnorodnych sesji, warsztatów i prelekcji.
          </Typography>
        </SectionBox>
        <SectionBox img={Image3 as string} />
      </Section>
      <Section>
        <SectionBox img={Image4 as string} />
        <SectionBox>
          <Title>Zapisz się na Konferencję PowiemTAK</Title>
          <Typography>
            Dołącz do nas na konferencji "PT!" i bądź częścią społeczności, która wspiera osoby z niepełnosprawnościami. Zarejestruj się, aby otrzymać dostęp do inspirujących prelekcji, praktycznych warsztatów oraz możliwości nawiązywania kontaktów z innymi uczestnikami i prelegentami
          </Typography>
          <Button label="Zapisz się" type="default" />
        </SectionBox>
      </Section>
    </Wrapper>
  </Container>
);
