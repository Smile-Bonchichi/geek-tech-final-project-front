import React from 'react';
import { ButtonAuth, Href } from '../../shared/index.js';
import {
    ContactPhone, Email, FiberPin, Lock, Person
} from '@mui/icons-material';
import Container from '@mui/material/Container';
import { InputAuthList, TextList } from '../../features/index.js';

export const SignUp = () => {
    const inputs = [
        {
            id: 'name',
            type: 'TextField',
            placeholder: 'Name',
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
    
    const texts = [
        {
            style: {
                fontFamily: `Gomawo`,
                fontStyle: `normal`,
                fontWeight: 400,
                fontSize: 32,
                
                color: `#AA3423`
            },
            text: 'Welcome to ' + process.env.PROJECT_NAME
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
    
    return (
        <Container
            style={ {
                marginTop: 70,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`
            } }>
            <TextList
                textProps={ texts }
            />
            
            <InputAuthList
                inputProps={ inputs }
            />
            
            <ButtonAuth
                style={ {
                    marginTop: 30,
                    border: `2px solid #AA3423`,
                    borderRadius: 5
                } }
                method={ () => { alert('Вошел'); } }
                text={ 'Sign up' }
                textStyle={ {
                    fontFamily: `Stolzl`,
                    fontStyle: `normal`,
                    fontWeight: 400,
                    fontSize: 18,
                    
                    color: `#AA3423`
                } }
            />
            
            <Href
                style={ {
                    marginTop: 10,
                    
                    fontFamily: `Stolzl`,
                    fontStyle: `normal`,
                    fontWeight: 300,
                    fontSize: 16,
                    
                    color: `#000000`
                } }
                text={ 'Already have an account? Sign in!' }
                url={ '/login' }
            />
        </Container>
    );
};
