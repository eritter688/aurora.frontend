import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer";
import Router from "./router/router";
import authService from './services/tokenService';
import {useDispatch} from "react-redux";
import {api} from "./axios/axios";
import {asyncLogout} from "./slices/authSlice";
import {useHistory} from "react-router";

export default function App(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    // TODO
    // 'JWT' should be in config file.
    api.interceptors.request.use(request => {
        if (authService.hasValidAccessToken()) {
            request.headers['Authorization'] = `JWT ${authService.getAccessToken()}`;
        }
        return request;
    });

    // TODO
    // What if the user spams the request button?
    // API should perhaps have a slice with busy flag?
    api.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status === 401 && authService.hasValidRefreshToken()) {
            // dispatch async refresh and then refire original request with updated tokens
        } else if (error.response.status === 401 && !authService.hasValidRefreshToken()) {
            dispatch(asyncLogout()).then(() => {
                history.push("/login/");
            })
        } else {
            // some other error/status not 2XX. custom app error handler ??
        }
        return Promise.reject(error);
    });

    return (
        <div className={"App"}>
            <Router/>
            <Footer/>
        </div>
    );

}
