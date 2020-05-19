import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'

// TODO
// 0 clients
// 1 client
// many clients
// pagination
// response data:
//     count: int
//     next: link
//     prev: link
//     results: array
//           contact_details: pk (should nest serializer?)
//           organization: pk (should nest serializer?)
//           owner: pk   (not necessary)
//           created: timestamp
//           updated: timestamp
//           first_name: string
//           last_name: string
//           year_of_birth: int
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