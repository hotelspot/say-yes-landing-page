import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
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

export const MobileMenu = styled.div<{isOpen:boolean;}>`
  position: fixed;
  top:80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    color:black !important;
  }
  gap:24px;
  transition: .3s;
  transform:translateX(${(props) => (props.isOpen ? '0%' : '100%')});
`;

export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:16px;
`;
export const NavbarStyled = styled.nav<{scrollPosition:number}>`
  position: fixed;
  box-shadow: 0   5px 25px 0px rgba(0, 0, 0, 0.10), 0px 25px 50px 0px rgba(0, 0, 0, 0.10);
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
  ${(props) => (props.scrollPosition ? isScroll : null)};
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
  align-items: center;
  @media (max-width: 992px){
    display: none;
  }
  button{
    min-width: 150px;
  }
  
`;

export const HamburgerStyled = styled.div`
  display: none;
  @media (max-width: 992px){
    display: block;
  }
`;
