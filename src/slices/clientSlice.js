import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'

export const getAllClients = createAsyncThunk(
    'getAllClients',
    async (obj, thunkAPI) => {
        const response = await api.get("client/");
        console.log(response.data);
    }
);

export const clientSlice = createSlice({
        name: "client",
        initialState: {},
        reducers: {},
        extraReducers: {},
    }
);

export default clientSlice.reducer;