import styled from 'styled-components';
import {
  Body2t400, Body2t500, Body2t700, Body3t400, H4t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding:24px;
  gap:80px;
  border-radius: 15px;
  display: flex;
  background: ${colors.typography[300]};
  @media(max-width: 992px){
    padding: 12px;
    flex-direction: column;
    gap:24px;
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
  flex:1;
  flex-direction: column;
  max-width: 35%;
  gap:24px;
`;

export const AvatarImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 160px;
`;

export const Avatar = styled.div`
  display: flex;
  gap:16px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:4px;
`;

export const ATitle = styled.div`
    ${Body2t700};
    color:${colors.typography[700]}
`;

export const ADescription = styled.div`
  // ${Body3t400}
  // color:${colors.typography[700]}
  ${H4t700};
  color:#00662B;
  font-weight: 700;
    
`;

export const Title = styled.div`
    ${H4t700}
    
`;

export const Description = styled.p`
  ${Body2t400}
`;

export const Time = styled.div`
  flex:1;
   ${H4t700};
   color:#00662B;
  font-weight: 700;
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex:1;
  justify-content: flex-end;
  align-items: flex-end;
`;
