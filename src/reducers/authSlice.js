import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'

export const asyncLogin = createAsyncThunk(
    'asyncLogin',
    async (creds, thunkAPI) => {
        const response = await api.post("token/auth/", creds);
        // console.log(response);
        localStorage.setItem('accessToken', response.data['access']);
        localStorage.setItem('refreshToken', response.data['refresh']);
    }
);

export const asyncRefresh = createAsyncThunk(
    'asyncRefresh',
    async (rTokenObj, thunkAPI) => {
        const response = await api.post("token/refresh/", rTokenObj);
        // console.log(response);
        localStorage.setItem('accessToken', response.data['access']);
    }
);

// export const asyncVerify = createAsyncThunk(
//     'asyncVerify',
//     async (tokenObj, thunkAPI) => {
//         const response = await api.post("token/verify/", tokenObj);
//         console.log(response);
//     }
// );

export const asyncLogout = createAsyncThunk(
    'asyncLogout',
    async (obj, thunkAPI) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('currentUser');
    }
);

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

