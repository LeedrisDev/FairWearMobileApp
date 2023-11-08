import React, {useRef, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Button, Form} from "react-bootstrap";
import {passwordReset} from "../../../Utils/Auth";
import {useMountEffect} from "primereact/hooks";
import {Messages} from "primereact/messages";
import './PasswordForgotPage.css'
import bigLogo from '../../../assets/FairWearBig.png';

interface ErrorProps {
    hasError: boolean;
    message: string;
}

export default function PasswordForgotPage() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [formError, setFormError] = useState<ErrorProps>({
        hasError: false,
        message: '',
    });
    const navigate = useNavigate();
    const msgs = React.useRef<Messages>(null);

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
                await passwordReset(email);
                setValidated(true);
                navigate('/login')
            } catch (error) {
                setFormError({
                    hasError: true,
                    message: `${error}`,
                });
            }
        }
    };

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
    return (
        <div className="password-forgot-page" style={{
            width: window.innerWidth,
            height: window.innerHeight
        }}>
            <Link className="nav-link back" to="/login">
                <FontAwesomeIcon icon={faArrowLeft} className="icon-navigation"/>
            </Link>
            <Messages ref={msgs}/>
            <div className="main-container">
                <div className="logo-container">
                    <img className="logo" src={bigLogo} alt={bigLogo}/>
                </div>
                <Form ref={formRef} className="email-form buttons-container" noValidate
                      validated={validated} onSubmit={onSubmit}>
                    <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            className="form-control"
                            required
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => setEmail(
                                event.target.value
                            )}/>
                    </Form.Group>
                    <Button className="button-container send-button" type="submit">
                        <span>Reset Password</span>
                    </Button>
                </Form>
            </div>
        </div>
    )
}
