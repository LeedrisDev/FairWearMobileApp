import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import { Button, Form } from 'react-bootstrap';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import bigLogo from '../../../assets/FairWearBig.png';
import './LoginPage.css';

interface LoginFormStateProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginFormState, setLoginState] = useState<LoginFormStateProps>({
    email: '',
    password: '',
  });

  const [validated, setValidated] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          loginFormState.email,
          loginFormState.password,
        );
        // handle Phone and username
        navigate('/');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
    setValidated(true);
  };

  return (
    <div className="login-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <Link className="nav-link back" to="/auth">
        <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
      </Link>
      <div className="main-container">
        <div className="logo-container">
          <img className="logo" src={bigLogo} alt={bigLogo} />
        </div>

        <Form className="login-form buttons-container" noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group className="form-group" controlId="emailField">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="login"
              className="form-control"
              required
              type="email"
              placeholder="Enter email"
              value={loginFormState.email}
              onChange={(event) => setLoginState(
                { ...loginFormState, email: event.target.value },
              )}
            />
          </Form.Group>
          <Form.Group className="form-group" controlId="passwordField">
            <Form.Label>Password</Form.Label>
            <Form.Control
              id="password"
              required
              type="password"
              placeholder="Enter password"
              value={loginFormState.password}
              onChange={(event) => setLoginState(
                { ...loginFormState, password: event.target.value },
              )}
            />
          </Form.Group>
          <Button className="button-container login-button" type="submit">
            <span>LOG IN</span>
          </Button>
        </Form>
      </div>
    </div>
  );
}
