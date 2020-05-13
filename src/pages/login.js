import React, {Component} from 'react';
import LoginForm from "../components/loginForm";


export default class LoginContainer extends Component {

    render() {

        const loginContainerStyle = {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        };

        return (
            <div style={loginContainerStyle}>
                <LoginForm/>
            </div>
        )
    }
}