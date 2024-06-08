import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ArrowDown } from 'feather-icons-react';
import {
  Count,
  HeaderStyled, Hero, LogoFloat, SayYes, Subtitle, Time, TimeContainer, TimeLabel, Title, Arrow,
} from './Header.styled';
import { HeroImg, Logo } from '../../assets';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {



  return (
    <HeaderStyled img={HeroImg as string}>
      <Navbar />
      <Hero>
        <div>
          <Title>Powiem TAK</Title>
          <Subtitle>Hilton Garden Inn Krakow Airport</Subtitle>
          <Arrow to="#organizator"><ArrowDown size={24} color="#00662B" /></Arrow>
        </div>
      </Hero>
      <SayYes>POWIEM TAK!</SayYes>
      <Time>
        <LogoFloat src={Logo as string} alt="logo" />
        <TimeContainer>
          <Count>
            0
          </Count>
          <TimeLabel>
            Dni
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            0
          </Count>
          <TimeLabel>
            Godz.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            0
          </Count>
          <TimeLabel>
            Min.
          </TimeLabel>
        </TimeContainer>
        <TimeContainer>
          <Count>
            0
          </Count>
          <TimeLabel>
            Sec.
          </TimeLabel>
        </TimeContainer>
      </Time>
    </HeaderStyled>
  );
};
