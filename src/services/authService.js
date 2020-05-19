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

const getUserID = () => {
    return jwt_decode(getAccessToken()).user_id;
}

const getUserEmail = () => {
    return jwt_decode(getAccessToken()).user.email;
}

const getUserName = () => {
    const decoded = jwt_decode(getAccessToken());
    return decoded.user.first_name + " " + decoded.user.last_name;
}

const hasTokenExpired = (token) => {
    const currentTime = Math.round(new Date().getTime() / 1000);
    const tokenExpiryTime = jwt_decode(token).exp;
    if (isNaN(tokenExpiryTime) || tokenExpiryTime === null) {
        return true;
    }
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
        // console.log(getUserID());
        // console.log(getUserEmail());
        // console.log(getUserName());
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
    getUserID,
    getUserName,
    getUserEmail,
};