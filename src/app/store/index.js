import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../pages/auth/slice/authSlice.js';

export const store = configureStore({
    reducer: {
        authReducer
    }
});