import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsSetUp from '../src/Pages/Settings/SettingsSetUp';

jest.mock('../../Business/BusinessGeneral', () => ({
    settings: {
        isConnected: true,
        personalInformations: {
            username: 'JohnDoe',
            email: 'johndoe@example.com',
            phone: '1234567890',
        },
        security: {
            password: '********',
        },
        options: {
            langage: 'English',
            theme: 'Light',
        },
    },
}));

describe('SettingsSetUp component', () => {
    it('renders the Settings component with the provided settings', () => {
        render(<SettingsSetUp />);
        const personalInformationTitle = screen.getByText('Personal Information');
        expect(personalInformationTitle).toBeInTheDocument();

        const usernameField = screen.getByText('Username');
        expect(usernameField).toBeInTheDocument();

        const optionsTitle = screen.getByText('Options');
        expect(optionsTitle).toBeInTheDocument();

        const languageField = screen.getByText('Language');
        expect(languageField).toBeInTheDocument();

        const securityTitle = screen.getByText('Security');
        expect(securityTitle).toBeInTheDocument();

        const passwordField = screen.getByText('Password');
        expect(passwordField).toBeInTheDocument();
    });
});
