import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetching: false,
        isAuthenticated: false,
        access_token: null,
        refresh_token: null,
    },
    reducers: {
        success: state => {
            state.auth = 'success';
        },
        fail: state => {
            state.auth = "fail";
        }

    },
});

export const { success, fail } = authSlice.actions;

export const currentAuth = state => state.auth;

export default authSlice.reducer;

