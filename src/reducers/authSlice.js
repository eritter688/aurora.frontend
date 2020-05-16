import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'

export const asyncLogin = createAsyncThunk(
    'asyncLogin',
    async (creds, thunkAPI) => {
        if (localStorage.getItem('currentUser')) {
            console.log("ALREADY LOGGED IN!!");
            return;
        }
        const response = await api.post("token/auth/", creds);
        console.log(response.data);
        return response.data;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isFetching: false,
    },
    reducers: {
        LOGOUT: state => {
            state.isFetching = false;
        },
    },
    extraReducers: {
        [asyncLogin.pending]: (state, action) => {
            state.isFetching = true;
        },
        [asyncLogin.fulfilled]: (state, action) => {
            state.isFetching = false;
        },
        [asyncLogin.rejected]: (state, action) => {
            state.isFetching = false;
        },
    }
});

export const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} = authSlice.actions;

export default authSlice.reducer;

