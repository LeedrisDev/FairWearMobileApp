import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import bigLogo from '../../../assets/FairWearBig.png';
import './SignupPage.css';


interface SignUpFormStateProps {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function SignupPage() {
  const navigate = useNavigate();

  const [signUpFormState, setSignUpState] = useState<SignUpFormStateProps>({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [nextPage, setNextPage] = useState(false);

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
        const result = await createUserWithEmailAndPassword(
          auth,
          signUpFormState.email,
          signUpFormState.password,
        );
        // handle Phone and username
        console.log('User created:', result.user);
        navigate('/Auth');
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
    setValidated(true);
  };

  const handleNextPage = () => {
    if (signUpFormState.email !== "" && signUpFormState.username !== ""
        && signUpFormState.phone !== "")
    {
      setNextPage(true);
    }
  }

  const handleBack = () => {
    if (nextPage) {
      setNextPage(false);
    }
    else {
      navigate('/Auth');
    }
  }

  return (
    <div className="signup-page" style={{ width: window.innerWidth, height: window.innerHeight }}>
    <div className="nav-link back" onClick={handleBack}>
      <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation" />
    </div>

      <div className="main-container">
        <div className="logo-container">
          <img className="logo" src={bigLogo} alt={bigLogo} />
        </div>

        <Form noValidate validated={validated} onSubmit={onSubmit}>

          <div className={nextPage ? "" : "signup-form"} hidden={nextPage}>
            <Form.Group className="form-group" controlId="usernameField">
              <Form.Label>Username</Form.Label>
              <Form.Control
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
            <Form.Group className="form-group" controlId="emailField">
              <Form.Label>Email</Form.Label>
              <Form.Control
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
            <Form.Group className="form-group" controlId="phoneField">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
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

          <div className={nextPage ? "signup-form" : ""} hidden={!nextPage}>
            <Form.Group className="form-group" controlId="passwordField">
              <Form.Label>Password</Form.Label>
              <Form.Control
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
              {/* <Form.Control.Feedback type="invalid"> */}
              {/*   <span>Passwords don&apos;t match</span> */}
              {/* </Form.Control.Feedback> */}
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
