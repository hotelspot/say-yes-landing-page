import React from 'react';
import { render } from '@testing-library/react';

import { Hello } from '../components';

describe('pages', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should display hello', () => {
    const { getByText } = render(<Hello label="hello" />);
    getByText('hello');
  });
});
