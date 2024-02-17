import { HeadFC, Link, PageProps } from 'gatsby';
import React from 'react';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const NotFoundPage: React.FC<PageProps> = () => (
  <main style={pageStyles}>
    <Link to="/">Go home</Link>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
