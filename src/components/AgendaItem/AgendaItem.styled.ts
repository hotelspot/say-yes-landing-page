import styled from 'styled-components';
import {
  Body1t700,
  Body2t400, Body2t500, Body2t700, Body3t400, Body4t400, H4t700, H5t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';
import { rwd } from '../../styles/rwd';

export const Container = styled.div`
  padding:24px;
  gap:80px;
  border-radius: 15px;
  display: flex;
  background: ${colors.typography[300]};
  @media(${rwd.maxSmallDesktop}){
    padding: 24px;
    flex-direction: column;
    gap:24px;
  }
  @media(${rwd.maxPhone}){
    padding: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  gap:40px;    
`;

export const Avatars = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: 30%; 
    width: 300px;
    padding: 25px 0;
  @media(max-width: 992px){
    width: 100%; 
      display: flex;
      flex-direction: column;
      max-width: 100%;
  }
  gap:24px;
`;

export const AvatarImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  @media(max-width: 992px){
    width: 100px;
    height: 100px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  gap:16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:4px;
`;

export const ATitle = styled.div`
    ${Body2t700};
    color:${colors.typography[700]}  
`;

export const ADescription = styled.div`
    
  color:#00662B;
  font-weight: 500;
    font-size: 14px;
`;

export const Title = styled.div`
    ${H4t700};
    @media (${rwd.maxSmallDesktop}){
     ${H5t700};
    }
      @media (${rwd.maxPhone}){
        ${Body1t700};
      }
`;


export const Owner = styled.div`
  position: absolute;
    bottom: 73px;
    right: 54px;
    border-radius: 5px;
    padding: 4px 5px;
    background: #00662B;
    color: white;
    font-size: 11px;
    font-weight: 500;
  @media (${rwd.maxSmallDesktop}){
      right: 74px;
  }
`;
export const Description = styled.p`
  ${Body2t400};
    text-align: justify;
  @media (${rwd.maxSmallDesktop}){
  ${Body3t400};
      text-align: left;
  }
  @media (${rwd.maxPhone}){
    ${Body4t400};
      text-align: left;
  }
`;

export const Time = styled.div`
  flex:1;
  ${H4t700};
  color:#00662B;
  @media (${rwd.maxSmallDesktop}){
    ${H5t700};
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex:1;
  justify-content: flex-end;
  align-items: flex-end;
`;
