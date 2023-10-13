import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from "react-router-dom";

interface LoginFormStateProps {
    email: string;
    password: string;
}

export default function LoginPage() {
    const navigate = useNavigate()
    const [loginFormState, setLoginState] = useState<LoginFormStateProps>({
        email: '',
        password: '',
    });

    const [validated, setValidated] = useState(false);

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('invalid stuff');
            event.stopPropagation();
        } else {
            try {
                console.log('here');
                const result = await signInWithEmailAndPassword(auth, loginFormState.email, loginFormState.password);
                // handle Phone and username
                console.log('User created:', result.user);
                navigate("/Auth")
            } catch (error) {
                console.error('Error creating user:', error);
            }
        }
        setValidated(true);
    };

    return (
        <div>
            <h1 className="text-center my-3 title">Login</h1>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="emailField">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Enter email"
                        value={loginFormState.email}
                        onChange={(event) => setLoginState(
                            { ...loginFormState, email: event.target.value },
                        )}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordField">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter password"
                        value={loginFormState.password}
                        onChange={(event) => setLoginState(
                            { ...loginFormState, password: event.target.value },
                        )}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}
