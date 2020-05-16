import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'

export const asyncLogin = createAsyncThunk(
    'asyncLogin',
    async (creds, thunkAPI) => {
        console.log("LOGIN");
        const response = await api.post("token/auth/", creds);
        console.log(response.data);
        localStorage.setItem('accessToken', response.data['access']);
        localStorage.setItem('refreshToken', response.data['refresh']);
        localStorage.setItem('currentUser', 'TEST');
    }
)

export const asyncLogout = createAsyncThunk(
    'asyncLogout',
    async (obj, thunkAPI) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('currentUser');
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        busy: false,
    },
    reducers: {},
    extraReducers: {
        [asyncLogin.pending]: (state, action) => {
            state.busy = true;
        },
        [asyncLogin.fulfilled]: (state, action) => {
            state.busy = false;
        },
        [asyncLogin.rejected]: (state, action) => {
            state.busy = false;
            console.log(action);
        },
        [asyncLogout.pending]: (state, action) => {
            state.busy = true;
        },
        [asyncLogout.fulfilled]: (state, action) => {
            state.busy = false;
        },
        [asyncLogout.rejected]: (state, action) => {
            state.busy = false;
        },
    }
});

export default authSlice.reducer;

