import styled from 'styled-components';
import {
  Display01, Display03, H2t700, H4t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1196px;
`;

export const Header = styled.h1`
  ${Display01};
  opacity: .25;
  text-align: center;
  @media (max-width: 992px){
    ${Display03};
  }
  color:#0C5;
`;

export const Title = styled.h1`
  ${H2t700};
  color:${colors.typography[900]};
  text-align: center;
  @media (max-width: 992px){
    ${H4t700};
  }
`;

export const AgendaList = styled.div`
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  top:-100px;
  gap:24px;
  border-radius: 35px;
  background: var(--Typography-100, #FFF);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
  @media (max-width: 992px){
    top:0;
    margin:24px;
    padding: 12px;
  }
`;
