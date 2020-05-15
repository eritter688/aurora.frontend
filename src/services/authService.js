import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "../reducers/authSlice";

const apiURL = 'http://localhost:8000/api/v1/';

function login(dispatch, email, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };

    dispatch(LOGIN_REQUEST());

    // TODO Handle anything other than 200OK!
    fetch(apiURL + "token/auth/", requestOptions)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("isAuthenticated", true);
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);
        });

    dispatch(LOGIN_SUCCESS());
}

function refresh(dispatch) {

}

function logout(dispatch) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    dispatch(LOGOUT());
}

export default {login, refresh, logout};