import React, {useRef, useState} from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import {Alert, Button, Form} from 'react-bootstrap';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import bigLogo from '../../../assets/FairWearBig.png';
import './SignupPage.css';

interface SignUpFormStateProps {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface ErrorProps {
  hasError: boolean;
  message: string;
}

export default function SignupPage() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);

  const [signUpFormState, setSignUpState] = useState<SignUpFormStateProps>({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [nextPage, setNextPage] = useState(false);

  const [validated, setValidated] = useState(false);

  const [formError, setFormError] = useState<ErrorProps>({
    hasError: false,
    message: '',
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
        await createUserWithEmailAndPassword(
          auth,
          signUpFormState.email,
          signUpFormState.password,
        );
        // handle Phone and username
        navigate('/Auth?success=true');
      } catch (error) {
        console.error('Error creating user:', error);
        setFormError({
          hasError: true,
          message: 'user with this email already exist',
        });
      }
    }
    setValidated(true);
  };

  const handleNextPage = () => {
    if (signUpFormState.email !== '' && signUpFormState.username !== ''
        && signUpFormState.phone !== '') {
      setNextPage(true);
    }
  };

  const handleBack = () => {
    if (nextPage) {
      setNextPage(false);
    } else {
      navigate('/Auth');
    }
  };

  return (
    <div className="signup-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
      <div className="nav-link back" onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
      </div>
      <Alert key="warning" variant="warning" hidden={!formError.hasError}>
        {formError.message}
      </Alert>

      <div className="main-container">
        <div className="logo-container">
          <img className="logo" src={bigLogo} alt={bigLogo} />
        </div>

        <Form ref={formRef} noValidate validated={validated} onSubmit={onSubmit}>

          <div className={nextPage ? '' : 'signup-form'} hidden={nextPage}>
            <Form.Group className="form-group">
              <Form.Label>Username</Form.Label>
              <Form.Control
                id="username"
                className="form-control "
                required
                type="text"
                placeholder="Enter username"
                value={signUpFormState.username}
                onChange={(event) => setSignUpState(
                  { ...signUpFormState, username: event.target.value },
                )}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                className="form-control"
                required
                type="email"
                placeholder="Enter email"
                value={signUpFormState.email}
                onChange={(event) => setSignUpState(
                  { ...signUpFormState, email: event.target.value },
                )}
              />
            </Form.Group>
            <Form.Group className="form-group">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                id="phone"
                className="form-control"
                required
                type="tel"
                placeholder="Enter phone"
                value={signUpFormState.phone}
                onChange={(event) => setSignUpState(
                  { ...signUpFormState, phone: event.target.value },
                )}
              />
            </Form.Group>
            <Button className="signup-button" onClick={handleNextPage}>
              <span>NEXT</span>
            </Button>
          </div>

          <div className={nextPage ? 'signup-form' : ''} hidden={!nextPage}>
            <Form.Group className="form-group">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                className="form-control"
                required
                type="password"
                placeholder="Enter password"
                value={signUpFormState.password}
                onChange={(event) => setSignUpState(
                  { ...signUpFormState, password: event.target.value },
                )}
              />
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                id="confirmPassword"
                className="form-control"
                required
                type="password"
                placeholder="Confirm password"
                value={signUpFormState.confirmPassword}
                disabled={signUpFormState.password === ''}
                onChange={(event) => setSignUpState(
                  { ...signUpFormState, confirmPassword: event.target.value },
                )}
                isValid={signUpFormState.password === signUpFormState.confirmPassword}
              />
            </Form.Group>
            <Button className="button-container signup-button" type="submit">
              SIGN UP
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
