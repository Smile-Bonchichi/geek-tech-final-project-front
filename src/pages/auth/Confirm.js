import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { confirm } from './slice/authSlice.js';

export const Confirm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token } = useParams();
    
    const confirmEmail = () => {
        localStorage.setItem(
            'token',
            token
        );
        
        dispatch(confirm());
    };
    
    useEffect(() => {
        confirmEmail();
        
        navigate('/sign-in');
    }, []);
    
    return (
        <>
        </>
    );
};

export default Confirm;