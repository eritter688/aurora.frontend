import jwt_decode from 'jwt-decode';
import {asyncRefresh} from '../reducers/authSlice'

const hasAccessToken = () => {
    return !!localStorage.getItem('accessToken');
};
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};
const hasValidAccessToken = () => {
    return hasAccessToken() && !hasTokenExpired(getAccessToken());
}

const hasRefreshToken = () => {
    return !!localStorage.getItem('refreshToken');
};
const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
};
const hasValidRefreshToken = () => {
    return hasRefreshToken() && !hasTokenExpired(getRefreshToken());
}

const hasTokenExpired = (token) => {
    const currentTime = Math.round(new Date().getTime() / 1000);
    const tokenExpiryTime = jwt_decode(token).exp;
    return (tokenExpiryTime < currentTime);
}

const hasAuthTokens = () => {
    return hasAccessToken() && hasRefreshToken();
};

const checkAuth = (dispatch) => {
    if (hasAuthTokens()) {
        let aToken = localStorage.getItem('accessToken');
        let rToken = localStorage.getItem('refreshToken');
        // console.log(jwt_decode(aToken));
        // console.log(jwt_decode(rToken));
        console.log("Checking Access Expired: " + hasTokenExpired(aToken));
        console.log("Checking Refresh Expired: " + hasTokenExpired(rToken));
        if (hasTokenExpired(aToken)) {
            console.log("Refreshing Access Token:");
            dispatch(asyncRefresh({refresh: rToken}));
        }
        // if (1) {
        //     console.log("Verifying New Access Token:");
        //     dispatch(asyncVerify({token: aToken}));
        // }
    }

    return hasAuthTokens();
}


export default {
    hasAccessToken,
    getAccessToken,
    hasValidAccessToken,
    hasRefreshToken,
    getRefreshToken,
    hasValidRefreshToken,
    hasTokenExpired,
    hasAuthTokens,
    checkAuth,
};