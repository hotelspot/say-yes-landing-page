import React from 'react';
import { render } from '@testing-library/react';

import { Hello } from '../components/Hello/Hello';

describe('Index', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('contains a greeting', () => {
    render(<Hello />);
  });
});
