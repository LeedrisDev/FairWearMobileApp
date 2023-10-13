import React, { useState } from 'react';
import 'firebaseui/dist/firebaseui.css';
import auth from '../../../Utils/Auth';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface SignUpFormStateProps {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export default function SignupPage() {
  // useEffect(() => {
  //     const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
  //     ui.start("#firebaseui-auth-container", {
  //         signInOptions: [
  //             firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //             firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //         ],
  //         // Other config options...
  //     });
  //
  //     auth.onAuthStateChanged((user) => {
  //         if (user) {
  //             console.log('New user created:', user);
  //             // You can access user properties like user.displayName, user.email, etc.
  //         }
  //     });
  // }, []);
  //
  //
  // return (
  //     <>
  //         <h1 className="text-center my-3 title">Signup Page</h1>
  //         <Button variant="link" href="#">Login</Button>
  //         <div id="firebaseui-auth-container"></div>
  //     </>
  // )

  const [signUpFormState, setSignUpState] = useState<SignUpFormStateProps>({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
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
        const result = await createUserWithEmailAndPassword(auth, signUpFormState.email, signUpFormState.password);
        // handle Phone and username
        console.log('User created:', result.user);
      } catch (error) {
        console.error('Error creating user:', error);
      }
    }
    setValidated(true);
  };

  return (
    <div>
      <h1 className="text-center my-3 title">Signup Page</h1>
      <Form noValidate validated={validated} onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="usernameField">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            value={signUpFormState.username}
            onChange={(event) => setSignUpState(
              { ...signUpFormState, username: event.target.value },
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailField">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={signUpFormState.email}
            onChange={(event) => setSignUpState(
              { ...signUpFormState, email: event.target.value },
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneField">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            required
            type="tel"
            placeholder="Enter phone"
            value={signUpFormState.phone}
            onChange={(event) => setSignUpState(
              { ...signUpFormState, phone: event.target.value },
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordField">
          <Form.Label>Password</Form.Label>
          <Form.Control
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
          <Form.Control.Feedback type="invalid">
            Passwords don't match
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>
    </div>
  );
}
