import styled from 'styled-components';
import { Input, Textarea } from '@nextui-org/react';

export const InputWrapper = styled(Input)`
  label{
    top:-5px
  }
  margin-bottom: 22px;
  height: 48px;
  display: flex;
  align-items: center; /* Align vertically */
  justify-content: center; /* Align horizontally */
  position: relative;
  > div {
    height: 48px;
    border-radius: 16px;
    padding-left: 15px;
    padding-bottom: 12px;
  }
`;
export const BtnContainer = styled.div`
  button{
  max-width: 250px;
  @media (max-width: 992px) {
    width: 100%;
  }
  }
`;
export const TextareaWrapper = styled(Textarea)`
  div {
    position: relative;
    label {
      top:-28px;
      margin-top: 5px;
    }
    textarea {
      margin-top: -22px;
      padding: 0 15px 0 0;
    }
  }
`;
