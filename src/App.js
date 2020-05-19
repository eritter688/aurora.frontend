import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import authService from './services/authService';
import {useDispatch} from "react-redux";
import {api} from "./axios/axios";
import JWTRefresher from "./components/refresh/refresh";

export default function App(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        authService.checkAuth(dispatch);
    }, []);

    api.interceptors.request.use(function (config) {
        if (authService.hasValidAccessToken()) {
            config.headers['Authorization'] = 'JWT ' + authService.getAccessToken();
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

    return (
        <div className={"App"}>
            <JWTRefresher/>
            <Router/>
            <AuroraFooter/>
        </div>
    );

}
