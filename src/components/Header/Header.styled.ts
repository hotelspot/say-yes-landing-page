import styled from 'styled-components';
import {
  Display01, Display03, H1t500, H1t700, H3t500, H3t700, H5t500, H5t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';

export const HeaderStyled = styled.header<{img:string}>`
  height: 800px;
  background: lightgreen;
  background: url(${(props) => props.img}) center;
  padding-bottom: 40px;
  position: relative;
`;

export const Title = styled.h1`
 ${H1t700};
 color:${colors.typography[100]};
 text-align: center;
`;

export const Subtitle = styled.h1`
 ${H1t500};
 text-align: center;
 color:${colors.typography[100]};
`;

export const Hero = styled.div`
  padding:0 24px;
  display: flex;
  flex-direction: column;
  gap:16px;
  height: 380px;
  justify-content: center;
`;

export const SayYes = styled.h3`
  ${Display01};
  @media(max-width: 992px){
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
  transform: translate(-50%);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
  padding: 48px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 992px){
    flex-wrap: wrap;
    width: 80%;
    div{
      flex-basis: 50%;
    }
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.h3`
  ${H1t700};
  @media (max-width: 992px){
    ${H3t700};
  }
  color:#00662B;
`;
export const TimeLabel = styled.div`
  ${H3t500};
  @media (max-width: 992px){
    ${H5t500};
  }
  color:${colors.typography[1000]}
`;

export const LogoFloat = styled.img`
  left: 50%;
  top: 20%;
  transform: translate(-50%,-100%);
  width: 234.667px;
  position: absolute;
  height: 106.667px;
`;
