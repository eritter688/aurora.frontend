import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        isFetching: false,
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: localStorage.getItem("refreshToken"),
    },
    reducers: {
        LOGIN_REQUEST: state => {
            state.isFetching = true;
        },
        LOGIN_SUCCESS: state => {
            state.isAuthenticated = true;
            state.isFetching = false;
        },
        LOGIN_FAILURE: state => {
            state.isFetching = false;
        },
        LOGOUT: state => {
            state = this.initialState;
        },
    },
});

export const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} = authSlice.actions;

export const isAutenticated = state => state.isAuthenticated;

export default authSlice.reducer;

