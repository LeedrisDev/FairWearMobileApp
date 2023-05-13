import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../src/App';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
  it('renders the app and increments count on button click', () => {
    const { getByText } = render(<App />);

    // Check if the initial count is rendered
    const countText = getByText(/count is/i);
    expect(countText).toHaveTextContent('count is 0');

    // Simulate a button click
    const button = getByText(/count is/i).closest('button');
    fireEvent.click(button!);

    // Check if the count has incremented
    expect(countText).toHaveTextContent('count is 1');
  });
});
