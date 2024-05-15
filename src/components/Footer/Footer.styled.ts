import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {
  Body1t400,
  Body1t500, Body1t700, Body3t400, Body4t400,
} from '../../styles/typography';
import { rwd } from '../../styles/rwd';

export const FooterStyled = styled.footer`
  padding: 40px 16px;
  background: ${colors.typography[1100]};
  gap:40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${rwd.maxTablet}){
    padding: 64px 24px;
    gap:64px;
  }
  @media (${rwd.maxPhone}){
    padding: 48px 36px;
    gap:64px;
  }
`;

export const PoweredBy = styled.p`
  font-size: 12px;
    letter-spacing: 1px;
  color:${colors.typography[100]};
  a{
    font-weight: 600;
    color:${colors.typography[100]};
  }
`;

export const Line = styled.div`
    height: 1px;
    background: ${colors.typography[700]};
    flex:1;
  @media(${rwd.maxPhone}){
    width: 100%;
    flex: unset;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  gap:8px;
  align-items: center;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:32px;
  max-width: 1196px;
  width: 100%;
  @media(${rwd.maxPhone}){
    flex-direction: column;
    align-items: flex-start;
    gap:32px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1196px;
  width: 100%;
  display: flex;
  gap: 80px;
  @media (${rwd.maxTablet}){
    flex-direction: column;
    gap:64px;
  }

`;

export const Column = styled.aside`
  display: flex;
  gap:32px;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap:12px;
  @media(${rwd.maxPhone}){
    flex-direction: column;
    gap:12px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  @media(${rwd.maxTablet}){
    flex-direction: row;
    justify-content: space-between;
    column-gap: 24px;
 
    flex-wrap: wrap;
    a {
      flex-basis: 45%;
    }
  }
  @media(${rwd.maxPhone}){
    flex-direction: column;
  }
`;

export const LinkIcon = styled.a`
  
    color:${colors.typography[300]};
    display: flex;
    gap:5px;
    align-items: center;
    text-decoration: none;
   span{
     text-decoration: none;
       font-size: 14px;
   }
`;

export const Title = styled.h3`
  ${Body1t700};
  color: ${colors.typography[300]}
`;

export const Link = styled.a`
 font-size: 12px;
  color: ${colors.typography[500]};
    &:hover{
        text-decoration: underline;
    }
`;

export const Row = styled.div`
  display: flex;
  gap:48px;
  @media(${rwd.maxTablet}){
    gap:80px;
  }
  @media(${rwd.maxPhone}){
    flex-direction: column;
    gap:32px;
  }
  
`;
