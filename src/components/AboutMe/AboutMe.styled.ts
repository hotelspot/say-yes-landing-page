import styled from 'styled-components';
import {
  Body1t500, Body1t700, Body2t500, Body3t400, Body3t500, Body4t400, H1t500,
} from '../../styles/typography';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  padding-top: 200px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:80px;
`;

export const Information = styled.section`
  display: flex;
  gap:12px;
  max-width: 1196px;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  @media (max-width: 992px){
    flex-direction: column;
    
  }
`;

export const InformationItem = styled.section`
  display: flex;
  gap:12px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex:1;
  background: white;
  padding:16px 14px;
  border: 2px solid ${colors.typography[400]};
`;

export const InformationLabel = styled.div`
    ${Body1t500};
    color:${colors.typography[900]}
`;

export const Contact = styled.div`
  display: flex;
  max-width: 1196px;
  height: 20px;
  flex:1;
  width: 100%;
  position: relative;
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
  @media (max-width: 992px){
    margin: 48px 36px;
    padding: 80px 32px 32px 32px;
  }
`;

export const Avatar = styled.img`
  border-radius: 160px;
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
`;

export const Username = styled.h5`
  ${H1t500};
  color:${colors.typography[1100]};
  @media (max-width:992px){
  ${Body1t700};
  }
`;
export const Description = styled.div`
  ${Body2t500};
  color:${colors.typography[800]};
  @media (max-width:992px){
    ${Body3t500};
  }
`;

export const Paragraph = styled.p`
  ${Body3t400};
  color:${colors.typography[700]};
  @media (max-width:992px){
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
