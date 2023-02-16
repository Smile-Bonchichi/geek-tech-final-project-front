import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../app/api/axios.js';

export const signUp = createAsyncThunk(
    'signUp',
    async (data, { dispatch }) => {
        axios.post('/user/auth/sign-up', data).then(() => {
            dispatch(
                updateRegistrationStatus(true)
            );
            
            dispatch(
                clearRegistrationModel
            );
        }).catch(err => {
            dispatch(
                setAlert(err.response.data)
            );
        });
    }
);

export const confirm = createAsyncThunk(
    'confirm',
    async (data, { dispatch }) => {
        axios.get('/user/confirm').catch(err => {
            dispatch(
                setAlert(err.response.data)
            );
        });
    }
);

export const signIn = createAsyncThunk(
    'signIn',
    async (data, { dispatch }) => {
        axios.post('/user/auth/sign-in', data).then(res => {
            dispatch(setToken(
                {
                    token: res.token,
                    role: res.role
                }
            ));
        });
    }
);

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        registrationModel: {
            fullName: '',
            pin: '',
            email: '',
            phoneNumber: '',
            password: ''
        },
        registrationStatus: false,
        alert: false
    },
    reducers: {
        setTokenAndRole: (state, action) => {
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.role);
        },
        setRegistrationModel: (state, action) => {
            switch (action.payload.type) {
                case 'fullName':
                    state.registrationModel.fullName = action.payload.value;
                    break;
                case 'pin':
                    state.registrationModel.pin = action.payload.value;
                    break;
                case 'email':
                    state.registrationModel.email = action.payload.value;
                    break;
                case 'phone':
                    state.registrationModel.phoneNumber = action.payload.value;
                    break;
                case 'password':
                    state.registrationModel.password = action.payload.value;
                    break;
                default:
            }
        },
        updateRegistrationStatus: (state, action) => {
            state.registrationStatus = action.payload;
        },
        clearRegistrationModel: (state) => {
            state.registrationModel = {
                fullName: '',
                pin: '',
                email: '',
                phoneNumber: '',
                password: ''
            };
        },
        setAlert: (state, action) => {
            state.alert = action.payload.details;
        }
    }
});

export const {
    setToken,
    setRegistrationModel,
    updateRegistrationStatus,
    clearRegistrationModel,
    setAlert
} = authSlice.actions;

export default authSlice.reducer;