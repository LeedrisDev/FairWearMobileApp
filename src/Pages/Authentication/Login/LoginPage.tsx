import React, {useRef, useState} from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import {Button, Form} from 'react-bootstrap';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import bigLogo from '../../../assets/FairWearBig.png';
import './LoginPage.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import {Messages} from 'primereact/messages';
import {useMountEffect} from 'primereact/hooks';

interface LoginFormStateProps {
  email: string;
  password: string;
}
interface ErrorProps {
  hasError: boolean;
  message: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const msgs = React.useRef<Messages>(null);
  const [loginFormState, setLoginState] = useState<LoginFormStateProps>({
    email: '',
    password: '',
  });

  const formRef = useRef<HTMLFormElement | null>(null);
  const [validated, setValidated] = useState(false);
  const [formError, setFormError] = useState<ErrorProps>({
    hasError: false,
    message: '',
  });

  useMountEffect(() => {
    if (msgs.current) {
      msgs.current.clear();
      if (formError.hasError) {
        msgs.current.show({
          sticky: true,
          severity: 'error',
          summary: 'Error',
          detail: formError.message,
          closable: true,
        });
      }
    }
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current?.checkValidity() === false) {
      event.stopPropagation();
      setFormError({
        hasError: true,
        message: 'Please fill all the fields',
      });
    } else {
      try {
        await signInWithEmailAndPassword(
          auth,
          loginFormState.email,
          loginFormState.password,
        );
        // handle Phone and username
        navigate('/');
      } catch (error) {
        setFormError({
          hasError: true,
          message: 'user or password incorrect',
        });
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
      <Messages ref={msgs}/>
      <div className="main-container">
        <div className="logo-container">
          <img className="logo" src={bigLogo} alt={bigLogo} />
        </div>

        <Form ref={formRef} className="login-form buttons-container" noValidate validated={validated} onSubmit={onSubmit}>
          <Form.Group className="form-group">
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
          <Form.Group className="form-group">
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
          <Link to={'/Auth/Reset'} className="forgot-password">
            forgot your password ?
          </Link>
        </Form>
      </div>
    </div>
  );
}
