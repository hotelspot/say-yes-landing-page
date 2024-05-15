import styled from "styled-components";
import {H2t700} from "../../styles/typography";
import {colors} from "../../styles/colors";
import {rwd} from "../../styles/rwd";

export const Container = styled.section`
    margin:250px 0;
  display: flex;
  justify-content: center;
  @media (${rwd.maxTablet}){
    margin:250px 0 100px 0;
  }
`

export const Wrapper = styled.section`
  width: 1196px;
  margin:0 24px;
`

export const Strategy = styled.div`
  display: flex;
  flex-direction: column;
  gap:64px;
  margin-bottom: 64px;
`
export const StrategyTitle = styled.h1`
 font-size: 48px;
 font-style: normal;
 font-weight: 700;
  text-align: center;
  color:${colors.typography[900]};
  
  @media (${rwd.maxTablet}){
  font-size: 32px;
  line-height: 48px;
  }
  @media (${rwd.maxPhone}){
    font-size: 24px;
    line-height: 32px;
  }
`

export const StrategyImage = styled.img`
  height: 140px;
`

export const CommonPartners = styled.div`
  display: flex;
  flex-direction: column;
  gap:24px;
  margin-bottom: 48px;
`

export const PartnersTitle = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  color:${colors.typography[700]};
  @media (${rwd.maxTablet}){
    font-size: 24px;
    line-height: 32px;
  }
  @media (${rwd.maxPhone}){
    font-size: 20px;
    line-height: 28px;
  }
`

export const PartnersImages = styled.div`
  display: flex;
  row-gap: 24px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (${rwd.maxPhone}){
    flex-direction: column;
  }
`

export const Center = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    max-height: 150px;
    max-width: 150px;
  }

  @media (${rwd.maxPhone}){
    img{
      max-height: 40vw;
      max-width: 40vw;
    }
    align-self: center;
  };
  flex-basis: calc(25%);
`
