import styled from 'styled-components';
import { colors } from '../../styles/colors';
import {
  Body1t400, Body1t500, H3t500, H3t700,
} from '../../styles/typography';

export const Container = styled.div`
  padding:80px 80px 0 80px;
  margin-top: -200px;
  background: ${colors.typography[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;
  top:200px;
    max-width: 1196px;
   width: 100%;
  overflow: hidden;
  background: white;
  border-radius: 35px;
  box-shadow: 0px 5px 75px 0px rgba(0, 0, 0, 0.10), 0px 25px 100px 0px rgba(0, 0, 0, 0.10);
`;

export const Section = styled.section`
  display: flex;
  height: 440px;
`;

export const SectionBox = styled.div<{img?:string}>`
  flex:1;
  background: url(${(props) => props.img}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  gap:24px;
`;

export const Typography = styled.p`
  ${Body1t400};
  color:${colors.typography[900]}
`;

export const Title = styled.h1`
  ${H3t700};
  color:${colors.additionals[2]}
`;
