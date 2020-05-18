import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {asyncLogin} from '../../reducers/authSlice'

const formContainerStyle = {
    fontVariant: "all-small-caps",

    // TODO
    // Should be wider on mobile-vertical, looks squished.
    width: "45%",
    height: "35%",

    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightgray",

    backgroundColor: "ghostwhite",
};

const formStyle = {
    padding: "3%",
};

const formGroupStyle = {
    paddingLeft: "5%",
    paddingRight: "5%",
};

const buttonContainerStyle = {
    float: "right",
    paddingBottom: "3%",
};

export default function LoginForm() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const creds = {
            email: email,
            password: password,
            history: history,
        }
        dispatch(asyncLogin(creds)).then(() => {
            // console.log("PUSH!");
            // history.push("/dashboard/");
        });
    };

    return (
        <div style={formContainerStyle}>
            <Form style={formStyle} onSubmit={submitHandler}>
                <Form.Group style={formGroupStyle} controlId="loginFormEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  name="email"
                                  autoFocus
                                  required
                                  onChange={event => setEmail(event.target.value)}/>
                    <a href={""}>Forgot Email?</a>
                </Form.Group>
                <Form.Group style={formGroupStyle} controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  name="password"
                                  required
                                  onChange={event => setPassword(event.target.value)}/>
                    <a href={""}>Forgot Password?</a>
                </Form.Group>
                <div style={buttonContainerStyle}>
                    <Button variant="primary" type="submit">
                        LOGIN
                    </Button>
                    {/*<Button variant={"danger"} onClick={() => history.push("/dashboard/")}>PUSH</Button>*/}
                </div>
            </Form>
        </div>
    );
}
