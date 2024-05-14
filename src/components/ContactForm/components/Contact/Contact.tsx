import { Button, cn } from '@nextui-org/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import {
  BtnContainer, Column, InputWrapper, RowButtons, TextareaWrapper,
} from './Contact.styled';
import { actionSendEmailContactForm } from '../../../../actions/action.sendEmail';

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  subject: string;
};

export const StyledContactForm = styled.form`
  margin-top: 24px;
  font-size: 12px;
  flex:1;
  color: #2e3a59;

`;

export const Form = () => {
  const [formState, setFormState] = useState<
    'ready' | 'loading' | 'success' | 'error'
  >('ready');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setFormState('loading');
      const { status } = await actionSendEmailContactForm(data);
      if (status === 200) {
        toast.success('Wysłano poprawnie', {
          theme: 'light',
          hideProgressBar: true,
          position: 'bottom-center',
        });
        setFormState('success');
      }
    } catch (err) {
      toast.error('Wystąpił błąd', {
        theme: 'light',
        hideProgressBar: true,
        position: 'bottom-center',
      });
      setFormState('error');
    }
  };

  const checkField = (e: boolean) => e;

  return (
    <StyledContactForm onSubmit={handleSubmit(onSubmit)}>
      <Column>
        <RowButtons>
          <InputWrapper
            {...register('firstName', { required: true })}
            isInvalid={checkField(!!errors.firstName)}
            placeholder="Przykład: Jan"
            labelPlacement="inside"
            label="Imię"
            variant="bordered"
          />
          <InputWrapper
            variant="bordered"
            {...register('lastName')}
            placeholder="Przykład: Kowalski"
            labelPlacement="inside"
            label="Nazwisko"
          />
        </RowButtons>
        <RowButtons>
          <InputWrapper
            variant="bordered"
            {...register('email', { required: true })}
            isInvalid={checkField(!!errors.email)}
            type="email"
            labelPlacement="inside"
            label="Email"
            placeholder="Przykład: j.kowalski@gmail.com"
          />
          <InputWrapper
            variant="bordered"
            {...register('phoneNumber')}
            labelPlacement="inside"
            placeholder="+Przykład: +48 999 999 999"
            label="Numer telefonu"
          />
        </RowButtons>
        <InputWrapper
          variant="bordered"
          placeholder="Przykład: Pytanie odnośnie szczegółów wydarzenia"
          {...register('subject')}
          label="Temat"
        />
        <TextareaWrapper
          variant="bordered"
          placeholder="Przykład: Witam, nazywam się Jan Kowlaski oraz pisze w sprawie..."
          {...register('message', { required: true })}
          errorMessage="To pole jest wymagane"
          isInvalid={checkField(!!errors.message)}
          labelPlacement="inside"
          label="Wiadomość"
        />
        <RowButtons>
          <BtnContainer>
            <Button
              type="submit"
              radius="sm"
              className={cn(
                'text-white !borer-none bg-secondary rounded-full px-[88.5px] py-[12px] w-full',
                formState === 'error' && 'bg-red-500',
                formState === 'success' && 'bg-green-500',
              )}
            >
              {
              {
                ready: <>Wyślij wiadomość</>,
                loading: (
                  <RotatingLines
                    visible
                    width="96"
                    strokeColor="white"
                    strokeWidth="3"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                ),
                success: <>Send</>,
                error: <>:( Please again</>,
              }[formState]
            }
            </Button>
          </BtnContainer>
          <p className="text-[12px] leading-[18px]">
            Polityka prywatności
          </p>
        </RowButtons>
      </Column>

    </StyledContactForm>
  );
};
