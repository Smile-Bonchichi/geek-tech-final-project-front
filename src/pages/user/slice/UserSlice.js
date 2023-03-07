import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../app/api/axios.js';
import { IUser } from '../../../types/user.js';

export const getUserInfo = createAsyncThunk(
    'getUserInfo',
    async (data, { dispatch }) => {
        const res = await axios.get('/user');
        dispatch(setUser(res.result));
    }
);

export const setUserImage = createAsyncThunk(
    'setUserImage',
    async (data, { dispatch }) => {
        let formData = new FormData();
        formData.append('image', data.image);
        
        await axios.post(`/image/${ data.id }?type=${ data.type }`, formData);
        
        dispatch(getUserInfo());
    }
);

export const deleteUserProfile = createAsyncThunk(
    'setUserImage',
    async (data, { dispatch }) => {
        await axios.delete('/user');
        
        localStorage.clear();
    }
);

interface InitialStateType {
    user: IUser;
}

const initialState: InitialStateType = {
    user: {}
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {
    setUser
} = userSlice.actions;

export default userSlice.reducer;
