import styled from 'styled-components';
import { Body2t600 } from '../../styles/typography';
import { colors } from '../../styles/colors';

export const ButtonStyled = styled.button<{type:'ghost'|'secondary'}>`
  ${Body2t600};
  padding:14px 28px;
  outline: 0;
  border-radius: 100px;
  border: 2px solid ${colors.typography[500]};
  background: ${(props) => ({ ghost: 'transparent', secondary: colors.typography[100] }[props.type])};
  color: ${(props) => ({ ghost: colors.typography[100], secondary: colors.typography[900] }[props.type])};
  &:hover{
    cursor: pointer;
  }
`;
