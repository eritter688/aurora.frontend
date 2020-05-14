import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        isFetching: false,
        accessToken: null,
        refreshToken: null,
    },
    reducers: {
        LOGIN_REQUEST: state => {
            state.isAuthenticated = false;
            state.isFetching = true;
            state.accessToken = null;
            state.refreshToken = null;
        },
        LOGIN_SUCCESS: state => {
            state.isAuthenticated = true;
            state.isFetching = false;
            state.accessToken = localStorage.getItem("accessToken");
            state.refreshToken = localStorage.getItem("refreshToken");
        },
        LOGIN_FAILURE: state => {
            state.isAuthenticated = false;
            state.isFetching = false;
            state.accessToken = null;
            state.refreshToken = null;
        },
        LOGOUT: state => {
            state.isAuthenticated = false;
            state.isFetching = false;
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} = authSlice.actions;

export const isAuthenticated = state => state.auth.isAuthenticated;

export default authSlice.reducer;

