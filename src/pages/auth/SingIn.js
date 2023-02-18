import React from 'react';
import { Container } from '@mui/material';
import { ButtonAuth, Error, Href, Text } from '../../ui/index.js';
import { InputAuthList } from '../../util/index.js';
import { inputsSignIn } from './constants/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from './slice/authSlice.js';

export const SingIn = () => {
    const dispatch = useDispatch();
    
    const { registrationModel, alert } = useSelector(
        state => state.authReducer
    );
    const login = () => {
        dispatch(
            signIn(registrationModel)
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
            <Text
                style={ {
                    fontFamily: `Comfortaa`,
                    fontStyle: `normal`,
                    fontWeight: 400,
                    fontSize: 32,
                    
                    color: `#392250`
                } }
                text={
                    'Добро пожаловать в ' + process.env.REACT_APP_PROJECT_NAME
                }
            />
            
            <InputAuthList
                inputProps={ inputsSignIn }
            />
            
            <ButtonAuth
                style={ {
                    marginTop: 30,
                    border: `2px solid #FFCC3D`,
                    borderRadius: 5
                } }
                method={ login }
                text={ 'Логин' }
                textStyle={ {
                    fontFamily: `Stolzl`,
                    fontStyle: `normal`,
                    fontWeight: 400,
                    fontSize: 18,
                    
                    color: `#FFCC3D`
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
                text={ 'Забыли пароль?' }
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
