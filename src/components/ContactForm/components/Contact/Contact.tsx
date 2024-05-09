import { Button, cn } from '@nextui-org/react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
import { BtnContainer, InputWrapper, TextareaWrapper } from './Contact.styled';
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
        toast.success(intl.formatMessage({ id: 'messages.success' }), {
          theme: 'light',
          hideProgressBar: true,
          position: 'bottom-center',
        });
        setFormState('success');
      }
    } catch (err) {
      toast.error(intl.formatMessage({ id: 'messages.error' }), {
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
      <div className="flex flex-col gap-[30px]" style={{ gap: 15 }}>
        <div style={{ gap: 15 }} className="flex flex-col md:flex-row  justify-around md:gap-3 gap-[30px]">
          <InputWrapper
            {...register('firstName', { required: true })}
            isInvalid={checkField(!!errors.firstName)}
            errorMessage="To pole jest wymagane"
            placeholder="Name"
            labelPlacement="inside"
            label="Imię"
          />
          <InputWrapper
            {...register('lastName')}
            placeholder="Surname"
            labelPlacement="inside"
            label="Nazwisko"
          />
        </div>
        <div className="flex flex-col md:flex-row  justify-around md:gap-3 gap-[30px]" style={{ gap: 15 }}>
          <InputWrapper
            {...register('email', { required: true })}
            errorMessage="To pole jest wymagane"
            isInvalid={checkField(!!errors.email)}
            type="email"
            labelPlacement="inside"
            label="Email"
            placeholder="j.kowalski@examplemail.com"
          />
          <InputWrapper
            {...register('phoneNumber')}
            labelPlacement="inside"
            placeholder="+48 123 456 789"
            label="Numer telefonu"
          />
        </div>
        <InputWrapper
          placeholder="Subject..."
          {...register('subject')}
          label="Temat"
        />
        <div>
          <TextareaWrapper
            placeholder="Message..."
            {...register('message', { required: true })}
            errorMessage="To pole jest wymagane"
            isInvalid={checkField(!!errors.message)}
            labelPlacement="inside"
            label="Wiadomość"
          />
        </div>
        <div className="flex flex-row gap-[24px] items-center 612px:flex-col-reverse" style={{ flex: 1, justifyContent: 'space-between', gap: 15 }}>
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
        </div>
      </div>
    </StyledContactForm>
  );
};
