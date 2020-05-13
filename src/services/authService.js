import React from 'react';
import {useDispatch} from 'react-redux';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,} from "../reducers/authSlice";

const apiURL = 'http://localhost:8000/api/v1/';

function Login(email, password) {

    const dispatch = useDispatch();

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    // TODO Handle anything other than 200OK!
    dispatch(LOGIN_REQUEST);
    fetch(apiURL + "token/auth/", requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
        });
    dispatch(LOGIN_SUCCESS);

    getUserData();

    return (<div></div>);

}

function getUserData() {

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + localStorage.getItem("accessToken"),
        },
    };

    fetch(apiURL + "user/1/", requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("email", data.email);
        })

}

function refresh() {

}

function Logout() {
    const dispatch = useDispatch();

    localStorage.setItem("isAuthenticated", false);
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(LOGOUT);
    return (<div></div>)
}

export default {login: Login, refresh, getUserData, logout: Logout};