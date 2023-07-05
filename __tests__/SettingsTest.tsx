import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Settings from '../src/Pages/Settings/Settings';

const mockSettings = {
  isConnected: true,
  personalInformations: {
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    phone: '0666666666',
  },
  security: {
    password: '********',
  },
  options: {
    langage: 'French',
    theme: 'Light',
  },
};

describe('Settings component', () => {
  it('renders personal information settings when connected', () => {
    render(
      <Router>
        <Settings settings={mockSettings} />
      </Router>,
    );

    const personalInformationTitle = screen.getByText('Personal Information');
    expect(personalInformationTitle).toBeInTheDocument();

    const usernameField = screen.getByText('Username');
    expect(usernameField).toBeInTheDocument();
  });

  it('does not render personal information settings when not connected', () => {
    const settingsWithoutConnection = {
      ...mockSettings,
      isConnected: false,
    };

    render(
      <Router>
        <Settings settings={settingsWithoutConnection} />
      </Router>,
    );

    const personalInformationTitle = screen.queryByText('Personal Information');
    expect(personalInformationTitle).toBeNull();
  });

  it('renders options settings', () => {
    render(
      <Router>
        <Settings settings={mockSettings} />
      </Router>,
    );

    const optionsTitle = screen.getByText('Options');
    expect(optionsTitle).toBeInTheDocument();

    const languageField = screen.getByText('Language');
    expect(languageField).toBeInTheDocument();
  });

  it('renders security settings', () => {
    render(
      <Router>
        <Settings settings={mockSettings} />
      </Router>,
    );

    const securityTitle = screen.getByText('Security');
    expect(securityTitle).toBeInTheDocument();

    const passwordField = screen.getByText('Password');
    expect(passwordField).toBeInTheDocument();
  });
});
