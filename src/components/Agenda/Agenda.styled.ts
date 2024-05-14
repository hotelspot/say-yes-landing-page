import styled from 'styled-components';
import {
  Display01, Display02, Display03, H2t700, H3t700, H4t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';
import { rwd } from '../../styles/rwd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1196px;
`;

export const Header = styled.h1`
  ${Display01};
  opacity: .25;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  text-align: center;
  @media (${rwd.maxSmallDesktop}){
    ${Display02};
  }
  @media (${rwd.maxPhone}){
    ${Display03};
  }
  color:#0C5;
`;

export const Title = styled.h1`
  ${H2t700};
  color:${colors.typography[900]};
  text-align: center;
  @media (${rwd.maxSmallDesktop}){
    ${H4t700};
  }
  @media (${rwd.maxPhone}){
    ${Display03};
  }
`;

export const AgendaList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap:24px;
  padding:40px;
  top:-80px;
  border-radius: 25px;
  background: var(--Typography-100, #FFF);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
  @media (${rwd.maxSmallDesktop}){
    gap:16px;
    top:0;
    margin:24px;
    padding: 32px;
  }
  @media (${rwd.maxPhone}){
    gap:12px;
    top:0;
    margin:24px;
    padding: 12px;
  }
`;
