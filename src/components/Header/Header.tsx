import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Count,
  HeaderStyled, Hero, LogoFloat, SayYes, Subtitle, Time, TimeContainer, TimeLabel, Title,
} from './Header.styled';
import { HeroImg, Logo } from '../../assets';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  const [count, setCount] = useState<{
    days:number;
    hours:number;
    minutes:number;
    seconds:number;
  }>(0);
  const targetDate = moment('2024-06-08');
  useEffect(() => {
    // Implementing the setInterval method
    const interval = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now, 'seconds'); // Oblicz różnicę w sekundach.
      const days = Math.floor(diff / 86400); // Oblicz liczbę dni.
      const hours = Math.floor((diff % 86400) / 3600); // Oblicz liczbę godzin.
      const minutes = Math.floor((diff % 3600) / 60); // Oblicz liczbę minut.
      const seconds = diff % 60; // Oblicz liczbę sekund.
      setCount({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

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
            {count.days}
          </Count>
          <TimeLabel>
            Dni
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            {count.hours}
          </Count>
          <TimeLabel>
            Godz.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            {count.minutes}
          </Count>
          <TimeLabel>
            Min.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            {count.seconds}
          </Count>
          <TimeLabel>
            Sec.
          </TimeLabel>
        </TimeContainer>
      </Time>
    </HeaderStyled>
  );
};
