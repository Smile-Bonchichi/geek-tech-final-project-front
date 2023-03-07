import React from 'react';
import { ButtonAuth, Error, Href, Success, Text } from '../../ui/index.js';
import { InputAuthList, TextList } from '../../util/index.js';
import { inputsPreSignUp, textsPreSignUp } from './constants/index.js';
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
                inputProps={ inputsPreSignUp }
            />
            
            <ButtonAuth
                style={ {
                    marginTop: 30, border: `2px solid #FFCC3D`, borderRadius: 5
                } }
                method={ registration }
                text={ 'Зарегистрироваться' }
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
                text={ 'У вас уже есть аккаунт? Логин!' }
                url={ '/sign-in' }
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
                text={ 'Теперь у вас есть аккаунт!:) Войти!' }
                url={ '/sign-in' }
            />
            
            <Text
                style={ {
                    marginTop: 50,
                    fontFamily: `Comfortaa`,
                    fontStyle: `normal`,
                    fontWeight: 400,
                    fontSize: 26,
                    
                    color: `#392250`
                } }
                text={ 'Пожалуйста. Подтвердите свою почту' }
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
