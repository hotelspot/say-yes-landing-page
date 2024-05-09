import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {
  Body1t400, Body1t500, H3t500, H3t700,
} from '../../styles/typography';

export const Container = styled.div`
  padding:80px 80px 0 80px;
  margin-top: -200px;
  background: ${colors.typography[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 992px){
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
  border-radius: 35px;
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
`;

export const Section = styled.section`
  display: flex;
  height: 440px;
  
  @media(max-width: 992px){
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
  
  @media(max-width: 992px){
    padding: ${(props) => (props.img ? '132px' : '40')};
    height: 264px;
  }

`;

export const Typography = styled.p`
  ${Body1t400};
  color:${colors.typography[900]}
`;

export const Title = styled.h1`
  ${H3t700};
  color:${colors.additionals[2]}
`;
