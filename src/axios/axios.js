import axios from 'axios';
import authService from '../services/authService';

const BASE_URL = 'http://localhost:8000/api/v1/';

export const api = axios.create({
    baseURL: BASE_URL,
})

api.interceptors.request.use(function (config) {
    console.log("REQUEST INTERCEPTED!");
    if (authService.hasValidAccessToken()) {
        config.headers['Authorization'] = 'JWT ' + authService.getAccessToken();
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    return response;  // Returned 2XX OK!
}, function (error) {
    return Promise.reject(error);  // Returned NOT 2XX. Custom App wide error handler?
});
