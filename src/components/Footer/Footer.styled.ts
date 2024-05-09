import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {
  Body1t500, Body1t700, Body3t400, Body4t400,
} from '../../styles/typography';

export const FooterStyled = styled.footer`
  padding: 80px 0;
  background: ${colors.typography[1100]};
  gap:80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px){
    padding:48px 36px;
  }
`;

export const PoweredBy = styled.p`
  ${Body4t400};
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
  @media (max-width: 992px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Wrapper = styled.div`
  max-width: 1196px;
  width: 100%;
  display: flex;
  gap: 80px;
  @media(max-width: 992px){
    flex-direction: column;
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
  gap:24px;
`;

export const LinkIcon = styled.a`
    ${Body1t500};
    color:${colors.typography[300]};
    display: flex;
    gap:12px;
    align-items: center;
    text-decoration: none;
    
   span{
     text-decoration: none;
   }
`;

export const Title = styled.h3`
  ${Body1t700};
  color: ${colors.typography[300]}
`;

export const Link = styled.a`
  ${Body1t700};
  color: ${colors.typography[500]};
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 992px){
    flex-direction: column;
  }
  gap:48px;
`;
