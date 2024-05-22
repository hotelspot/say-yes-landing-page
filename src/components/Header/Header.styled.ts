import styled from 'styled-components';
import { Link } from 'gatsby';
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
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  @media (${rwd.maxSmallDesktop}){
    ${H2t700};
  }
  @media (${rwd.maxPhone}){
    ${H3t700};
  }
`;

export const Subtitle = styled.h1`
 ${H1t500};
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
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
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  @media (${rwd.maxSmallDesktop}){
      height: 100%;
  }
  @media (${rwd.maxPhone}){
      height: 100%;   
  } 
`;

export const SayYes = styled.h3`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 7%;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
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

export const Arrow = styled(Link)` 
    background: #fff;
    border-radius: 100%;
    margin: 50px auto;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (${rwd.maxSmallDesktop}){
        width: 80px;
        height: 80px;
        margin: 50px auto;
    }
    @media (${rwd.maxTablet}){
        width: 50px;
        height: 50px;
        margin: 50px auto;
    }
`;
export const Time = styled.div`
  box-sizing: border-box; 
  position: relative;
  background: ${colors.typography[100]};
  border-radius: 35px;
  left: 50%;
  transform: translate(-50%,-30%);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15), 0px 25px 40px 0px rgba(0, 0, 0, 0.15);
  padding: 48px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  bottom: 50px;
  width: 100%;
  max-width: 1196px; 
  @media (${rwd.maxSmallDesktop}){
      padding: 24px 40px;
      width: 90%;
      border-radius: 25px;
  }
  @media (${rwd.maxTablet}){
      padding: 24px 15px;
      width: 80%;
      border-radius: 15px;
  } 
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
    @media (${rwd.maxTablet}){
        width: 50%;
        padding: 20px 0;
        flex-direction: column;
        align-items: center;
    }
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
  position: absolute;
  transform: translate(-50%,-80%);
  width: 234px; 
  height: 106px;
    @media (${rwd.maxSmallDesktop}){
        width: 192px;
        height: 96px;
    }
    @media (${rwd.maxTablet}){
        width: 117px;
        height: 53px;
        transform: translate(-50%,-160%);
    }
`;
