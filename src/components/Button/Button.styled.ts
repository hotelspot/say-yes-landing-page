import styled from 'styled-components';
import { Body2t600 } from '../../styles/typography';
import { colors } from '../../styles/colors';

export const ButtonStyled = styled.button<{type:'ghost'|'secondary'|'default'}>`
  ${Body2t600};
  padding:8px 15px;
  outline: 0;
  border-radius: 100px;
  border: 2px solid ${(props) => props.type !== 'default' && colors.typography[100]};
  background: ${(props) => ({ ghost: 'transparent', secondary: colors.typography[100], default: colors.additionals[1] }[props.type])};
  color: ${(props) => ({ ghost: colors.typography[100], secondary: colors.typography[900], default: colors.typography[100] }[props.type])};
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.10), 0px 25px 50px 0px rgba(0, 0, 0, 0.10);
  &:hover{
    cursor: pointer;
  }
`;
