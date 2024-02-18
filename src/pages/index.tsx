import type { HeadFC, PageProps } from 'gatsby';
import React, { FC } from 'react';
import { Hello } from '../components';

export const IndexPage: FC<PageProps> = () => (
  <Hello label="Start page" />
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
