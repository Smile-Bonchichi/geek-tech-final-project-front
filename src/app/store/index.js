import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../pages/auth/slice/authSlice.js';
import userReducer from '../../pages/user/slice/UserSlice.js';

export const store = configureStore({
    reducer: {
        authReducer,
        userReducer
    }
});