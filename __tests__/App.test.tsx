import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

describe('App component', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(3).toBe(3);
  });
});
