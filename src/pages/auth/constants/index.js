import {
    ContactPhone, Email, FiberPin, Lock, Person
} from '@mui/icons-material';
import React from 'react';

export const inputs = [
    {
        id: 'fullName',
        type: 'TextField',
        placeholder: 'Full Name',
        icon: <Person/>
    },
    {
        id: 'pin',
        type: 'TextField',
        placeholder: 'Pin',
        icon: <FiberPin/>
    },
    {
        id: 'email',
        type: 'TextField',
        placeholder: 'Email',
        icon: <Email/>
    },
    {
        id: 'phone',
        type: 'TextField',
        placeholder: 'Phone',
        icon: <ContactPhone/>
    },
    {
        id: 'password',
        type: 'Password',
        placeholder: 'Password',
        icon: <Lock/>
    },
    {
        id: 'repeat your password',
        type: 'Password',
        placeholder: 'Repeat your password',
        icon: <Lock/>
    }
];

export const textsPreSignUp = [
    {
        style: {
            fontFamily: `Gomawo`,
            fontStyle: `normal`,
            fontWeight: 400,
            fontSize: 32,
            
            color: `#AA3423`
        },
        text: 'Welcome to ' + process.env.REACT_APP_PROJECT_NAME
    },
    {
        style: {
            fontFamily: `Stolzl`,
            fontStyle: `normal`,
            fontWeight: 300,
            fontSize: 18,
            
            color: `#000000`
        },
        text: 'Register your account'
    }
];

export const textsSuccessSignUp = [
    {
        style: {
            marginTop: 50,
            fontFamily: `Stolzl`,
            fontStyle: `normal`,
            fontWeight: 400,
            fontSize: 26,
            
            color: `#AA3423`
        },
        text: 'Please. Confirm your email!'
    }
];
