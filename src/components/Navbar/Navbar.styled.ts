import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Hamburger from 'hamburger-react';
import { Body2t500 } from '../../styles/typography';
import { colors } from '../../styles/colors';

const isScroll = css`
  div{
    button:nth-child(1){
      color: black;
    }
    button:nth-child(2){
      background: #00662B;
      color:white;
      border-color: #00662B;
    }
  }
`;
export const NavbarStyled = styled.nav<{scrollPosition:number}>`
  position: fixed;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.10), 0px 25px 50px 0px rgba(0, 0, 0, 0.10);
  right: 0;
  z-index: 9999;
  left: 0;
  display: flex;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  flex:1;
  height: 80px;
  transition: .3s;
  background: ${(props) => (!props.scrollPosition ? 'transparent' : 'white')};
  a{
    color:${(props) => (props.scrollPosition ? '#5A5A5A' : 'white')};
  }
  ${(props) => (props.scrollPosition ? isScroll : null)}
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
  transition: .3s;
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
