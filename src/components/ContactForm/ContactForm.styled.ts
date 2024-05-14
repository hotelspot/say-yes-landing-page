import styled from 'styled-components';
import {
  Display01, Display02, Display03, H2t700, H3t700, H4t700,
} from '../../styles/typography';
import { colors } from '../../styles/colors';
import { ContactForm } from './ContactForm';
import { ContactFormBanner } from '../../assets';
import { rwd } from '../../styles/rwd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 320px;
  max-width: 1196px;
`;

export const Header = styled.h1`
  ${Display01};
  opacity: .25;
  text-align: center;
  @media (max-width: 992px){
    ${Display03};
  }
  @media(${rwd.maxTablet}){
    ${Display02}
  }
  @media (${rwd.maxPhone}){
    ${H4t700}
  }
  color:#0C5;
`;

export const Title = styled.h1`
  ${H2t700};
  color:${colors.typography[900]};
  text-align: center;
  @media(${rwd.maxTablet}){
    ${H3t700}
  }
  @media (${rwd.maxPhone}){
    ${H4t700}
  }
`;

export const FormWrapper = styled.div`
  padding: 32px;
  margin:24px;
  position: relative;
  display: flex;
  top:-80px;
  gap:64px;
  border-radius: 35px;
  background: var(--Typography-100, #FFF);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
  @media(${rwd.maxTablet}){
    top:-60px;
    flex-direction: column;
    padding: 32px;
  }
`;

export const Banner = styled.section`
  gap:16px;
  background: url(${ContactFormBanner}) center;
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 384px;
  padding: 36px 6px 36px 6px;
  border-radius: 25px;
  @media(max-width: 992px){
    padding: 24px 16px;
    width: 100%;
  }
`;

export const Information = styled.section`
  display: flex;
  gap:12px;
  max-width: 1186px;
  justify-content: space-between;
  margin: 0 24px;
  width: 100%;
  flex-wrap: wrap;
 
  @media (${rwd.maxTablet}){
    padding:0 24px;
    a{
      padding:14px 16px;
      justify-content: flex-start;
      flex-basis: 45%;
    }
  }
  @media (${rwd.maxPhone}){
    padding:0 36px;
    flex-direction: column;
  }
`;
