import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api} from '../axios/axios'
import {counterSlice} from "../features/counter/counterSlice";

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

export const getAll = createAsyncThunk(
    'getAll',
    async (obj, thunkAPI) => {
        const response = await api.get("client/");
        console.log(response.data);
        return response.data;
    }
);
export const getSingle = createAsyncThunk();
export const createSingle = createAsyncThunk();
export const deleteSingle = createAsyncThunk();
export const updateSingle = createAsyncThunk();

const initialState = {
    busy: false,
    itemCount: 0,
    items: [],
    previousPage: null,
    nextPage: null,
};

export const clientSlice = createSlice({
        name: "client",
        initialState,
        reducers: {
            reset: state => initialState,
        },
        extraReducers: {
            [getAll.fulfilled]: (state, action) => {
                state.busy = false;
                state.itemCount = action.payload.count;
                state.items = action.payload.results;
                state.previousPage = action.payload.previous;
                state.nextPage = action.payload.next;
            }
        },
    }
);

export const selectCount = state => state.client.itemCount;
export const selectItems = state => state.client.items;
export const selectPrev = state => state.client.previousPage;
export const selectNext = state => state.client.nextPage;

export const {reset} = counterSlice.actions;

export default clientSlice.reducer;