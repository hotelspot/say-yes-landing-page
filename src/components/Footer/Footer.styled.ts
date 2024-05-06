import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { Body1t500 } from '../../styles/typography';

export const FooterStyled = styled.footer`
    padding: 0 80px;
  height: 500px;
  background: ${colors.typography[1100]}
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 80px;
`;

export const Column = styled.aside`
  display: flex;
  gap:32px;
  flex-direction: column;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkIcon = styled.a`
    ${Body1t500};
    color:${colors.typography[300]};
    display: flex;
    gap:12px;
  align-items: center;
   span{
     text-decoration: none;
   }
`;
