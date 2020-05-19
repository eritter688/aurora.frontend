import React, {Component} from 'react';
import Page from "../components/page/page";
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
            <Page>
                <div style={loginContainerStyle}>
                    <LoginForm/>
                </div>
            </Page>
        );
    };
};