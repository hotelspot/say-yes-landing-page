import React from 'react';
import {
  Column, FooterStyled, LinkIcon, Links, Wrapper,
} from './Footer.styled';
import { Logo } from '../../assets';
import Calendar from '../icons/Calendar';

export const Footer = () => (
  <FooterStyled>
    <Wrapper>
      <Column>
        <img src={Logo as string} />
        <Links>
          <LinkIcon href="#">
            <Calendar />
            <span>10.05.2024</span>
          </LinkIcon>
        </Links>
      </Column>
    </Wrapper>
  </FooterStyled>
);
