import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {
  Body1t400, Body1t500, Body2t400, Body3t400, H3t500, H3t700, H4t700, H5t700,
} from '../../styles/typography';
import { rwd } from '../../styles/rwd';

export const Container = styled.div`
  padding:80px 80px 0 80px;
  margin-top: -200px;
  background: ${colors.typography[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (${rwd.maxSmallDesktop}){
    padding: 24px 24px 0 24px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  top:200px;
    max-width: 1196px;
   width: 100%;
  overflow: hidden;
  background: white;
  border-radius: 25px;
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
`;

export const Section = styled.section`
  display: flex;
  height: 440px;
  
  @media(${rwd.maxSmallDesktop}){
    height: auto;
    flex-direction: column-reverse;
    &:nth-child(2n){
      flex-direction: column;
    }
  }
`;

export const SectionBox = styled.div<{img?:string}>`
  flex:1;
  background-image: url(${(props) => props.img}); 
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  gap:24px;
  
  @media(${rwd.maxSmallDesktop}){
    padding: ${(props) => (props.img ? '132px' : '32px')};
    height: 264px;
  }
  @media(${rwd.maxPhone}){
    padding: ${(props) => (props.img ? '132px' : '24px')};
    height: 264px;
  }

`;

export const Typography = styled.p`
  ${Body2t400};
  text-align: justify;
  @media (${rwd.maxSmallDesktop}){
    ${Body3t400};
    text-align: left;
  }
  @media (${rwd.maxPhone}){
    ${Body2t400};
    text-align: left;
  }
  color:${colors.typography[900]}
`;

export const Title = styled.h1`
  ${H3t700};
  @media(${rwd.maxSmallDesktop}) {
    ${H4t700}
  }
  @media(${rwd.maxSmallDesktop}) {
    ${H5t700}
  }
  color:${colors.additionals[2]}
`;
