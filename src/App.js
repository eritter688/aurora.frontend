import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import authService from './services/authService';
import {useDispatch} from "react-redux";
import {api} from "./axios/axios";
import {asyncLogin} from "./reducers/authSlice";
import {useHistory} from "react-router-dom";

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
}

export default function App(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(authService.checkAuth(dispatch));

    useEffect(() => {
        setIsAuthenticated(authService.checkAuth(dispatch));
    }, []);

    api.interceptors.request.use(function (config) {
        // console.log("REQUEST INTERCEPTED!");
        if (authService.hasValidAccessToken()) {
            config.headers['Authorization'] = 'JWT ' + authService.getAccessToken();
        } else if (authService.hasValidRefreshToken()) {
            // dispatch async refresh and then refire original request with updated tokens
        } else {
            // log out and cancel -> redirect to login page
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status === 401 && authService.hasValidRefreshToken()) {
            // dispatch async refresh and then refire original request with updated tokens
        } else if (error.response.status === 401 && !authService.hasValidRefreshToken()) {
            // log out and cancel -> redirect to login page
        } else {
            // some other error/status not 2XX. custom app error handler ??
        }
        return Promise.reject(error);
    });

    const loginHandler = (event, credentials) => {
        event.preventDefault();
        // const creds = {
        //     email: "erittery688@gmail.com",
        //     password: "22890501"
        // }
        dispatch(asyncLogin(credentials)).then(() => {
            setIsAuthenticated(true);
            console.log("LOGIN PUSH");
            history.push("/dashboard/");
        })
    };

    return (
        <div className={"App"}>
            <Router/>
            <AuroraFooter/>
        </div>
    );

}
