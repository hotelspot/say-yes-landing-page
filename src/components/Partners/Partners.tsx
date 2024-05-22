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
} from '../../assets/partners';

const commonPartners = [
  { src: Hotelspot, link: 'https://www.hotelspot.pl/' },
  { src: BoCerba, link: '#' },
  { src: PrimeTime, link: '#' },
  { src: CentrumUbezpieczenPolskich, link: '#' },
  { src: Kancelaria, link: '#' },
];

const commonMediaPartners = [
  { src: Integracja, link: '#' },
  { src: BusinessWoman, link: '#' },
  { src: Ngo, link: '#' },
  { src: Dobryhasztag, link: '#' },
  { src: RMF, link: 'https://www.rmf24.pl/' },
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
