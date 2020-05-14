import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react';
import auth from '../services/authService'

/*
TODO:
Auth not found -> bad email/password combo
Forgot email.
Forgot password.
*/
export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    inputHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({[key]: value});
    }

    submitHandler = (event) => {
        event.preventDefault(); // why?
        auth.login(this.state.email, this.state.password);
    }

    render() {

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

        const buttonPaddingStyle = {
            paddingLeft: "5%",
            paddingRight: "5%",
        };

        return (
            <div style={loginFormStyle}>
                <div style={inputAreaStyle}>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group controlId="loginFormEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                          name="email"
                                          autoFocus
                                          required
                                          onChange={this.inputHandler}
                                          style={inputAreaStyle}/>
                        </Form.Group>
                        <a href={""}>Forgot Email?</a>
                        <Form.Group controlId="loginFormPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                          name="password"
                                          required
                                          onChange={this.inputHandler}
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

}
