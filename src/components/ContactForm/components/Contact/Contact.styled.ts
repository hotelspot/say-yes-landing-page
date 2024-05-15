import styled from 'styled-components';
import { Input, Textarea } from '@nextui-org/react';
import { colors } from '../../../../styles/colors';
import { Body2t400, Body4t400 } from '../../../../styles/typography';
import { rwd } from '../../../../styles/rwd';

export const InputWrapper = styled(Input)`
  label{
    top:-15px;
      left: 0;
    ${Body4t400};
  }
  margin-bottom: 22px;
  height: 48px;
  display: flex;
  align-items: center; /* Align vertically */
  justify-content: center; /* Align horizontally */
  position: relative;
    font-size: 14px;
  > div {
    ${Body2t400};
    height: 48px;
    border-radius: 8px;
    border: 1px solid ${colors.typography[400]};
    padding-left: 15px;
    padding-bottom: 12px;
  }
`;
export const BtnContainer = styled.div`

`;

export const TextareaWrapper = styled(Textarea)`
  div[data-slot="input-wrapper"]{
    border-radius: 8px;
    border: 1px solid ${colors.typography[400]};
  }
  div {
    position: relative;
    
    label {
      top:-30px;
        left: -10px;
    }
    textarea {
      margin-top: -22px;
      padding: 0 15px 0 0;
      
    }
  }
`;

export const RowButtons = styled.div`
  display: flex;
  gap:16px;
  flex:1;
  justify-content: space-between;
  @media (${rwd.maxPhone}){
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap:16px;
`;
