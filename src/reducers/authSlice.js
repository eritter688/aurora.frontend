import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: 'NO AUTH',
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

