import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Hello } from '../components';

const NotFoundPage: FC<PageProps> = () => (
  <Hello label="404" />
);

export default NotFoundPage;
