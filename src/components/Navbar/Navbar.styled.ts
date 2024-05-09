import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Hamburger from 'hamburger-react';
import { Body2t500 } from '../../styles/typography';
import { colors } from '../../styles/colors';

export const NavbarStyled = styled.nav`
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  flex:1;
  height: 80px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex:1;
  max-width: 1460px;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

`;

export const Link = styled(GatsbyLink)`
  ${Body2t500};
  text-decoration: none;
  color:${colors.typography[100]};
  @media (max-width: 992px){
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 992px){
    display: none;
  }
  
`;

export const HamburgerStyled = styled.div`
  display: none;
  @media (max-width: 992px){
    display: block;
  }
`;
