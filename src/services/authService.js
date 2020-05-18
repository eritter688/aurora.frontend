const hasAccessToken = () => {
    return !!localStorage.getItem('accessToken');
};
const hasRefreshToken = () => {
    return !!localStorage.getItem('refreshToken');
};

const hasAuthTokens = () => {
    return hasAccessToken() && hasRefreshToken();
};

const checkAuth = () => {
    console.log('checking auth!');
    return hasAuthTokens();
}


export default {checkAuth, hasAuthTokens};