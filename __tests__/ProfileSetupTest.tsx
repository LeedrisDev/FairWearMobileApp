import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileSetUp from '../src/Pages/Profile/ProfileSetUp';

jest.mock('../../Business/BusinessGeneral', () => ({
  profile: {
    name: 'John Doe',
    isConnected: true,
    image: "profile-url",
    historic: [],
  },
}));

describe('ProfileSetUp component', () => {
  it('renders the Profile component with the provided profile', () => {
    render(<ProfileSetUp />);
    const profileElement = screen.getByText('John Doe');
    expect(profileElement).toBeInTheDocument();
  });
});
