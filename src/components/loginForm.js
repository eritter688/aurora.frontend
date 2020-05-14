import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react';
import auth from '../services/authService'
import {useDispatch} from 'react-redux'
import {LOGIN_REQUEST, LOGIN_SUCCESS,} from "../reducers/authSlice";

/*
TODO:
Auth not found -> bad email/password combo
Forgot email.
Forgot password.
*/
export default function LoginForm() {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault(); // why?
        dispatch(LOGIN_REQUEST());
        auth.login(email, password);
        dispatch(LOGIN_SUCCESS());
    };

    const loginFormStyle = {
        fontVariant: "all-small-caps",

        width: "45%",
        height: "35%",

        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",
    };

    const inputAreaStyle = {
        padding: "5%",
    };

    return (
        <div style={loginFormStyle}>
            <div style={inputAreaStyle}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="loginFormEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      name="email"
                                      autoFocus
                                      required
                                      onChange={event => setEmail(event.target.value)}
                                      style={inputAreaStyle}/>
                    </Form.Group>
                    <a href={""}>Forgot Email?</a>
                    <Form.Group controlId="loginFormPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      name="password"
                                      required
                                      onChange={event => setPassword(event.target.value)}
                                      style={inputAreaStyle}/>
                    </Form.Group>
                    <a href={""}>Forgot Password?</a>
                    <p/>
                    {/*// TODO*/}
                    {/*// This isn't firing on phone/tablet.*/}
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                    <Button variant="danger" onClick={auth.logout}>
                        LOGOUT
                    </Button>

                </Form>
            </div>
        </div>

    );
}
