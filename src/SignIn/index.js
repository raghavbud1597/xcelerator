import React, {useState} from 'react';
import {
    Row, 
    Col,
    Form,
    Button
} from 'react-bootstrap';
import Login from './../images/login.png';
import { useDispatch } from 'react-redux';
import {login, userDetails} from './../actions';
import {
    AdminPayload,
    ConsumerPayload,
    OperationPayload
} from './../constants/UserPayload';

import translate from './../i18n/Translations/translate'

export default function Signin(props) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = () => {
        if(email === 'consumer@abc.com' && pass === '123') {
            dispatch(login());
            dispatch(userDetails(ConsumerPayload));
            props.history.push('./dashboard');  
        } else if (email === 'operations@abc.com' && pass === '123') {
            dispatch(login());
            dispatch(userDetails(OperationPayload));
            props.history.push('./dashboard');
        } else if (email === 'admin@abc.com' && pass === '123') {
            dispatch(login());
            dispatch(userDetails(AdminPayload));
            props.history.push('./dashboard');
        } else {
            setError(true);
        }
      };

    return (
        <Row className="align-items-center">
            <Col md={7} sm={12}>
                <img src={Login} alt="Login Image" className="w-100 vh-100"/>
            </Col>
            <Col md={5} sm={12} className="px-5">
                <Row className="justify-content-start">
                    <Col md={8} >
                        <Form>
                            <Form.Group controlId="signinEmail">
                                <Form.Label>
                                    Email Address
                                </Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password"
                                    value={pass}
                                    onChange={e => setPass(e.target.value)} 
                                />
                                {
                                    error ? (
                                    <Form.Text className="text-danger">
                                        Invalid Username Password
                                    </Form.Text>) : ''
                                }
                            </Form.Group>
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
