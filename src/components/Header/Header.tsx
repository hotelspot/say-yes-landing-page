import React, { useEffect, useState } from 'react';
import {
  Count,
  HeaderStyled, Hero, LogoFloat, SayYes, Subtitle, Time, TimeContainer, TimeLabel, Title,
} from './Header.styled';
import { HeroImg, Logo } from '../../assets';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Implementing the setInterval method
    const interval = setInterval(() => {

    }, 1000);

    // Clearing the interval
    return () => clearInterval(interval);
  }, [count]);
  const r = 'r';
  return (
    <HeaderStyled img={HeroImg as string}>
      <Navbar />
      <Hero>
        <Title>Powiem TAK</Title>
        <Subtitle>Hilton Garden Inn Krakow Airport</Subtitle>
      </Hero>
      <SayYes>POWIEM TAK!</SayYes>
      <Time>
        <LogoFloat src={Logo as string} alt="logo" />
        <TimeContainer>
          <Count>
            15
          </Count>
          <TimeLabel>
            Dni
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            07
          </Count>
          <TimeLabel>
            Godz.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            46
          </Count>
          <TimeLabel>
            Min.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            09
          </Count>
          <TimeLabel>
            Sec.
          </TimeLabel>
        </TimeContainer>
      </Time>
    </HeaderStyled>
  );
};
