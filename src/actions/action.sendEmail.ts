import emailjs from '@emailjs/browser';

export const actionSendEmailContactForm = async (data: any) => await emailjs.send(
  '',
  '',
  { data },
  '',
);
