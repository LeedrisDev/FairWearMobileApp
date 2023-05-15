import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('App component', () => {
  test('renders the initial count as 0', () => {
    render(<App />);
    const countElement = screen.getByText(/count is 0/i);
    expect(countElement).toBeInTheDocument();
  });

  test('increments the count when the button is clicked', () => {
    render(<App />);
    const countButton = screen.getByText(/count is 0/i);
    fireEvent.click(countButton);
    const updatedCountElement = screen.getByText(/count is 1/i);
    expect(updatedCountElement).toBeInTheDocument();
  });

});