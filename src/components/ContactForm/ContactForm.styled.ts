import styled from 'styled-components';
import { Display01, H2t700 } from '../../styles/typography';
import { colors } from '../../styles/colors';
import { ContactForm } from './ContactForm';
import { ContactFormBanner } from '../../assets';

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
  color:#0C5;}
`;

export const Title = styled.h1`
  ${H2t700};
  color:${colors.typography[900]};
  text-align: center;
`;

export const FormWrapper = styled.div`
  padding: 48px;
  position: relative;
  display: flex;
  top:-80px;
  gap:64px;
  border-radius: 35px;
  background: var(--Typography-100, #FFF);
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
`;

export const Banner = styled.section`
  gap:16px;
  background: url(${ContactFormBanner}) center;
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 384px;
  padding: 48px;
  border-radius: 25px;
  
`;
