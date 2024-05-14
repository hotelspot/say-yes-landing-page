import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Body2t500 } from '../../styles/typography';
import { colors } from '../../styles/colors';
import { rwd } from '../../styles/rwd';

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

export const Shadow = styled.div<{isOpen:boolean;}>`
  z-index: 800;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);

  display: none;
  
  @media (${rwd.maxSmallDesktop}){
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
  
  @media (${rwd.maxPhone}){
    display: none;
  }
`;

export const MobileLogo = styled.div`
  position: absolute;
  top:28px;
  left: 24px;
  @media (${rwd.maxPhone}){
    display: none;
  }
`;

export const BlackLink = styled(GatsbyLink)`
  transition: .3s;
  ${Body2t500};
  text-decoration: none;
  color:${colors.typography[1000]};
  padding: 16px;

`;

export const BlackLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex:1;
`;

export const MobileMenu = styled.div<{isOpen:boolean;}>`
  display: none;
  position: fixed;
  top: 0;
  z-index: 999;
  left: 40vw;
  padding: 80px 24px 24px 24px;
  @media (${rwd.maxSmallDesktop}){
    display: flex;
  }
  @media (${rwd.maxPhone}){
    left:0;
  }
  right: 0;
  bottom: 0;
  background: white;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  a {
    color: black !important;
  }

  gap: 24px;
  transition: .3s;
  transform: translateX(${(props) => (props.isOpen ? '0%' : '100%')});
  @media (${rwd.maxPhone}) {
    align-items: center;
    a{
      text-align: center;
    }
  }
`;

export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:16px;
  width: 100%;
`;
export const NavbarStyled = styled.nav<{scrollPosition:number}>`
  position: fixed;
  box-shadow: ${(props) => (props.scrollPosition ? '0 5px 25px 0 rgba(0, 0, 0, 0.10), 0 25px 50px 0 rgba(0, 0, 0, 0.10);' : 'none')};
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
  @media (${rwd.maxSmallDesktop}){
    background: ${(props) => (!props.scrollPosition ? 'transparent' : 'white')};
    a {
      color:white;
    }
  }
  background: ${(props) => (!props.scrollPosition ? 'transparent' : 'white')};
  a{
    color:${(props) => (props.scrollPosition ? '#5A5A5A' : 'white')};
  }
  ${(props) => (props.scrollPosition ? isScroll : null)};
`;

export const Wrapper = styled.div`
  display: flex;
  flex:1;
  max-width: 1440px;
  align-items: center;
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
  @media (${rwd.maxSmallDesktop}){
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  @media (${rwd.maxSmallDesktop}){
    display: none;
  }
  button{
    min-width: 120px;
  }
  
`;

export const HamburgerStyled = styled.div`
  display: none;
  @media (${rwd.maxSmallDesktop}){
    position: absolute;
    right: 24px;
    z-index: 1000;
    display: block;
  }
`;
