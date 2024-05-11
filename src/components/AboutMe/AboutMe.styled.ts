import styled from 'styled-components';
import {
  Body1t500, Body1t700, Body2t500, Body3t400, Body3t500, Body4t400, H1t500, H4t700, H5t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';
import { rwd } from '../../styles/rwd';

export const Container = styled.div`
  margin-top: 192px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:80px;
`;

export const Information = styled.section`
  display: flex;
  gap:12px;
  max-width: 1186px;
  justify-content: space-between;
  margin: 0 24px;
  width: 100%;
  flex-wrap: wrap;
 
  @media (${rwd.maxSmallDesktop}){
    padding:0 24px;
    a{
      padding:14px 16px;
      justify-content: flex-start;
     flex-basis: 45%;
    }
  }
  @media (${rwd.maxPhone}){
    padding:0 36px;
    flex-direction: column;
  }
`;

export const InformationItem = styled.a`
  display: flex;
  gap:6px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex:1;
  background: white;
  padding:16px 7px;
  border: 2px solid ${colors.typography[400]};
`;

export const InformationLabel = styled.div`
    ${Body1t500};
    color:${colors.typography[900]};
    @media (${rwd.maxSmallDesktop}){
    ${Body2t500};
    }
  @media (${rwd.maxPhone}){
    ${Body3t500};
  }
`;

export const Contact = styled.div`
  display: flex;
  max-width: 1196px;
  height: 20px;
  flex:1;
  width: 100%;
  position: relative;
  @media (${rwd.maxSmallDesktop}){
    padding:0 24px
  }
  @media (${rwd.maxPhone}){
    padding:0 36px
  }
`;

export const ContactContainer = styled.div`
  flex:1;
  margin-left: 80px;
  border-radius: 25px;
  border: 2px solid var(--Typography-400, #EBEBEB);
  background: var(--Typography-100, #FFF);
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.10), 0px 25px 50px 0px rgba(0, 0, 0, 0.10);
  padding: 32px 112px;
  display: flex;
  flex-direction: column;
  gap:24px;
  @media (${rwd.maxSmallDesktop}){
    padding: 32px 112px;
  }
  @media (${rwd.maxPhone}){
    padding: 80px 24px 24px 24px;
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const Avatar = styled.img`
  border-radius: 160px;
  position: absolute;
  @media (${rwd.maxSmallDesktop}){
    left: 24px;
  }
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
  @media(${rwd.maxPhone}){
    height: 100px;
    width: 100px;
  }
`;

export const Username = styled.h5`
  ${H5t700};
  color: ${colors.typography[1100]};
  @media (${rwd.maxSmallDesktop}) {
    ${H4t700};
  }
  @media (${rwd.maxPhone}) {
    ${Body1t700};
  }
`;
export const Description = styled.div`
  ${Body2t500};
  color:${colors.typography[800]};
 
  @media (${rwd.maxPhone}) {
    ${Body3t500};
  }
`;

export const Paragraph = styled.p`
  ${Body3t400};
  color:${colors.typography[700]};
  @media (${rwd.maxSmallDesktop}){
    ${Body3t400};
  }
  @media (${rwd.maxSmallDesktop}){
    ${Body4t400};
  }
`;

export const List = styled.div`
  display: flex;
  gap:8px;
  flex-direction: column;
`;

export const SocialsMedia = styled.div`
  display: flex;
  gap:24px;
  @media (max-width: 992px){
    justify-content: space-between;
    svg{
      width: 48px;
      height: 48px;
    }
  }
`;
