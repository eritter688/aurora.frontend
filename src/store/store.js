import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../slices/authSlice'
import clientReducer from '../slices/clientSlice'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        client: clientReducer,
    },
});

export default store;