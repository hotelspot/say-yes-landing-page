import React from 'react';
import {
  Center, CenterHilton,
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
  PRZEDSIEBIORCY, R17, WISLA, CHARAKTERY, Doltrans, Pieknizdrowi, UJ_fm, NowaSquad, SymposiumCracovience, Artim,
} from '../../assets/partners';

const commonPartners = [
  { src: Hotelspot, link: 'https://www.hotelspot.pl/' },
  { src: BoCerba, link: 'https://www.bocerba.com/' },
  { src: PrimeTime, link: 'https://primetimepr.pl/' },
  { src: CentrumUbezpieczenPolskich, link: 'https://ctu.pl' },
  { src: Kancelaria, link: 'https://kancelariamj.pl/' },
  { src: Doltrans, link: 'https://doltrans.pl/' },
  { src: Pieknizdrowi, link: 'https://pieknizdrowi.life/' },
  { src: NowaSquad, link:'https://novasquad.pl' },
  { src: SymposiumCracovience, link:'https://www.symposium.pl' },
  {src:Artim,link:'https://artim.com.pl/'}
];

const commonMediaPartners = [
  { src: RMF, link: 'https://www.rmf24.pl' },
  { src: WYBORCZA, link: 'https://wyborcza.pl' },
  { src: CHARAKTERY, link: ' https://charaktery.eu/ ' },
  { src: WISLA, link: ' https://wislakrakow.com/  ' },
  { src: Ngo, link: 'https://www.ngo.pl' },
  { src: GLOS24, link: 'https://glos24.pl' },
  { src: SM, link: 'https://sprawnymarketing.pl' },
  { src: R17, link: 'https://radio17.pl/' },
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
  { src: UJ_fm, link: 'https://ujot.fm/' },
];
export const Partners = () => (
  <Container id="partners">
    <Wrapper>
      <Strategy>
        <StrategyTitle>Partner Strategiczny</StrategyTitle>

        <CenterHilton target="_blank" href="https://www.hilton.com/pl/hotels/krkapgi-hilton-garden-inn-krakow-airport/">
          <StrategyImage alt="strategy" src={HiltonGarden} />
        </CenterHilton>
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
