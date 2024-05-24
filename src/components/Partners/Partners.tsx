import React from 'react';
import {
  Center,
  CommonPartners,
  Container, PartnersImages,
  PartnersTitle,
  Strategy,
  StrategyImage,
  StrategyTitle,
  Wrapper,
} from './Partners.styled';
import {
  BoCerba, BusinessWoman,
  CentrumUbezpieczenPolskich,
  HiltonGarden,
  Hotelspot, Integracja,
  Kancelaria, Ngo,
  PrimeTime, RMF, Dobryhasztag,
  WYBORCZA, GLOS24, SM, niewidzacprzeszkodPNG, goal, Chance, FOB, faktywizacja,
  FIRR_logo_m,
  PRZEDSIEBIORCY,
} from '../../assets/partners';

const commonPartners = [
  { src: Hotelspot, link: 'https://www.hotelspot.pl/' },
  { src: BoCerba, link: '#' },
  { src: PrimeTime, link: '#' },
  { src: CentrumUbezpieczenPolskich, link: '#' },
  { src: Kancelaria, link: '#' },
];

const commonMediaPartners = [
  { src: RMF, link: 'https://www.rmf24.pl' },
  { src: WYBORCZA, link: 'https://wyborcza.pl' },
  { src: Ngo, link: 'https://www.ngo.pl' },
  { src: GLOS24, link: 'https://glos24.pl' },
  { src: SM, link: 'https://sprawnymarketing.pl' },
  { src: niewidzacprzeszkodPNG, link: 'https://www.niewidzacprzeszkod.pl' },
  { src: goal, link: 'https://www.goal.pl/' },
  { src: Integracja, link: 'https://integracja.org/' },
  { src: BusinessWoman, link: 'https://businesswomanlife.pl' },
  { src: PRZEDSIEBIORCY, link: 'https://poradnikprzedsiebiorcy.pl/' },
  { src: Chance, link: 'https://www.szansadlaniewidomych.org/' },
  { src: Dobryhasztag, link: 'https://dobryhasztag.pl/' },
  { src: FOB, link: 'https://odpowiedzialnybiznes.pl/karta-roznorodnosci/' },
  { src: FIRR_logo_m, link: 'https://firr.org.pl/' },
  { src: faktywizacja, link: 'https://aktywizacja.org.pl/' },

  // { src: RMF, link: ' https://sprawnymarketing.pl' }, //  https://sprawnymarketing.pl/
  // { src: RMF, link: ' https://sprawnymarketing.pl' }, //  https://sprawnymarketing.pl/



  // { src: Dobryhasztag, link: '#' },

];
export const Partners = () => (
  <Container id="partners">
    <Wrapper>
      <Strategy>
        <StrategyTitle>Partner Strategiczny</StrategyTitle>
        <StrategyImage alt="strategy" src={HiltonGarden} />
      </Strategy>
      <CommonPartners>
        <PartnersTitle>Partnerzy & Sponsorzy</PartnersTitle>
        <PartnersImages>
          {commonPartners.map((e) => (
            <Center target="_blank" href={e.link} key={e.src}>
              <img alt="" src={e.src} />
            </Center>
          ))}
        </PartnersImages>
      </CommonPartners>
      <CommonPartners>
        <PartnersTitle>Patronat medialny nad konferencją sprawują</PartnersTitle>
        <PartnersImages>
          {commonMediaPartners.map((e) => (
            <Center target="_blank" href={e.link} key={e.src}>
              <img src={e.src} alt="" />
            </Center>
          ))}
        </PartnersImages>
      </CommonPartners>
    </Wrapper>
  </Container>
);
