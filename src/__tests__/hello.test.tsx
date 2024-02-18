import React from 'react';
import { render } from '@testing-library/react';
import { Hello } from '../components';

const text = 'text1';
describe('pages.index.test', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Should display hello', () => {
    const { getByText } = render(<Hello label={text} />);
    getByText(text);
  });
});
