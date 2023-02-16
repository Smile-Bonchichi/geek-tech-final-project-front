import React from 'react';
import { ButtonAuth, Error, Href, Success } from '../../ui/index.js';
import { InputAuthList, TextList } from '../../util/index.js';
import {
    inputs, textsPreSignUp, textsSuccessSignUp
} from './constants/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from './slice/authSlice.js';
import { Container } from '@mui/material';

const PreSignUp = () => {
    const dispatch = useDispatch();
    
    const { registrationModel, alert } = useSelector(
        state => state.authReducer
    );
    const registration = () => {
        dispatch(
            signUp(registrationModel)
        );
    };
    
    return (
        <Container
            style={ {
                marginTop: 70,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`
            } }>
            <TextList
                textProps={ textsPreSignUp }
            />
            
            <InputAuthList
                inputProps={ inputs }
            />
            
            <ButtonAuth
                style={ {
                    marginTop: 30, border: `2px solid #AA3423`, borderRadius: 5
                } }
                method={ registration }
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
            {
                alert ?
                    <Error text={ alert }/> :
                    <></>
            }
        </Container>
    );
};

const SuccessSignUp = () => {
    return (
        <Container
            style={ {
                marginTop: 70,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`
            } }>
            
            <TextList
                textProps={ [textsPreSignUp[0]] }
            />
            
            <Success
                style={ {
                    marginTop: 60,
                    marginBottom: 30,
                    width: 200,
                    height: 200
                } }
            />
            
            <Href
                style={ {
                    marginTop: 50,
                    
                    fontFamily: `Stolzl`,
                    fontStyle: `normal`,
                    fontWeight: 300,
                    fontSize: 16,
                    
                    color: `#000000`
                } }
                text={ 'Now you have an account!:) Sign in!' }
                url={ '/login' }
            />
            
            <TextList
                textProps={ textsSuccessSignUp }
            />
        </Container>
    );
};

export const SignUp = () => {
    const { registrationStatus } = useSelector(state => state.authReducer);
    
    return (
        <>
            { !registrationStatus ? <PreSignUp/> : <SuccessSignUp/> }
        </>
    );
};
