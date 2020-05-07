import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {Component} from 'react';
import login from '../services/authService'

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    inputHandler = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({[key]: value});
    }

    submitHandler = (event) => {
        event.preventDefault(); // why?
        login(this.state.email, this.state.password);
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="loginFormEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  onChange={this.inputHandler}/>
                </Form.Group>
                <Form.Group controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  onChange={this.inputHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    LOGIN
                </Button>
            </Form>
        );
    }

}
