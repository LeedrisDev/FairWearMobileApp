import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../src/Pages/Profile/Profile';

describe('Profile component', () => {
  const mockProfile = {
    name: 'John Doe',
    isConnected: true,
  };

  it('renders connected profile when profile is connected', () => {
    render(<Profile profile={mockProfile} />);
    const connectedProfileElement = screen.getByText(mockProfile.name);
    expect(connectedProfileElement).toBeInTheDocument();
  });

  it('renders unconnected profile when profile is not connected', () => {
    const unconnectedProfile = {
      ...mockProfile,
      isConnected: false,
    };
    render(<Profile profile={unconnectedProfile} />);
    const unconnectedProfileElement = screen.getByText('Connectez-vous');
    expect(unconnectedProfileElement).toBeInTheDocument();
  });

  it('navigates to settings when settings button is clicked', () => {
    render(<Profile profile={mockProfile} />);
    const settingsButton = screen.getByRole('button', { name: 'Settings' });
    settingsButton.click();
    expect(screen.getByText('Options')).toBeInTheDocument();
  });
});
