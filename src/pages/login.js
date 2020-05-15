import React, {Component} from 'react';
import LoginForm from "../components/forms/loginForm";


export default class LoginContainer extends Component {

    render() {

        const loginContainerStyle = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2%",
        };

        return (
            <div style={loginContainerStyle}>
                <LoginForm/>
            </div>
        )
    }
}