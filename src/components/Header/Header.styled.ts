import styled from 'styled-components';
import {
  Display01, Display02, Display03, H1t500, H1t700, H2t500, H2t700, H3t500, H3t700, H4t500, H5t500, H5t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';
import { rwd } from '../../styles/rwd';

export const HeaderStyled = styled.header<{ img: string }>`
  height: 800px;
  background: lightgreen;
  background: url(${(props) => props.img}) center;
  position: relative;
  @media (${rwd.maxSmallDesktop}) {
    height: 600px;
  }
  @media (${rwd.maxPhone}){
    height: 556px;
  }
  
`;

export const Title = styled.h1`
 ${H1t700};
 color:${colors.typography[100]};
 text-align: center;
  @media (${rwd.maxSmallDesktop}){
    ${H2t700};
  }
  @media (${rwd.maxPhone}){
    ${H3t700};
  }
`;

export const Subtitle = styled.h1`
 ${H1t500};
 text-align: center;
 color:${colors.typography[100]};
  @media (${rwd.maxSmallDesktop}){
    ${H2t500};
  }
  @media (${rwd.maxPhone}){
    ${H3t500};
  }
`;

export const Hero = styled.div`
  padding:0 24px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: center;
  @media (${rwd.maxSmallDesktop}){
    height: 280px;
    padding-top: 48px;
  }
  @media (${rwd.maxPhone}){
    height: 260px;
    padding-top: 40px;
    
  }

`;

export const SayYes = styled.h3`
  ${Display01};
  @media(${rwd.maxSmallDesktop}){
    ${Display02};
  }
  @media(${rwd.maxTablet}){
    ${Display03};
  }
  text-align: center;
  opacity: 0.25;
  color: ${colors.typography[100]};
`;

export const Time = styled.div`
  box-sizing: border-box;
  width: 1196px;
  position: relative;
  background: ${colors.typography[100]};
  border-radius: 35px;
  left: 50%;
  transform: translate(-50%,-30%);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
  padding: 48px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  bottom: -50px;
  max-width: 1196px;
  
  @media (${rwd.maxSmallDesktop}){
    width: Calc(100vw - 48px);
  }
  @media (${rwd.maxTablet}){
    padding:24px 0;
    transform: translate(-50%,-10%);
    width: Calc(100vw - 112px);
      div{
        flex-basis: 50%;
      }
    
  }
  //@media (max-width: 992px){
  //  bottom: -250px;
  //  padding: 24px;
  //  flex-wrap: wrap;
  //  width: 80%;
  //  div{
  //    flex-basis: 50%;
  //  }
  //}
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.h3`
  ${H1t700};
  color:#00662B;
  @media (${rwd.maxSmallDesktop}){
    ${H2t700}
  }
  @media (${rwd.maxTablet}){
    ${H3t700}
  }
`;
export const TimeLabel = styled.div`
  ${H3t500};
  @media (${rwd.maxSmallDesktop}){
   ${H4t500}
  }
  color:${colors.typography[1000]};
  @media (${rwd.maxTablet}){
    ${H5t500}
  }
`;

export const LogoFloat = styled.img`
  left: 50%;
  top: 20%;
  transform: translate(-50%,-100%);
  width: 234.667px;
  position: absolute;
  height: 106.667px;
`;
