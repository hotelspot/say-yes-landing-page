import type { HeadFC, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Header } from '../components/Header';
import { GlobalStyled } from '../styles/globalStyled';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Agenda } from '../components/Agenda/Agenda';
import { Gallery } from '../components/Gallery/Gallery';
import { Footer } from '../components/Footer/Footer';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Layout } from '../components/Layout';
import { Partners } from '../components/Partners';

export const IndexPage: FC<PageProps> = () => (
  <Layout>
    <GlobalStyled />
    <Header />
    <AboutMe />
    <Agenda />
    <Gallery />
    <Partners />
    <ContactForm />
    <Footer />
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
