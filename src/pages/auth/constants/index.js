import {
    ContactPhone, Email, FiberPin, Lock, Person
} from '@mui/icons-material';

export const inputsPreSignUp = [
    {
        id: 'fullName',
        type: 'TextField',
        placeholder: 'ФИО',
        icon: <Person/>
    },
    {
        id: 'pin',
        type: 'TextField',
        placeholder: 'ИНН',
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
        placeholder: 'Номер телефона',
        icon: <ContactPhone/>
    },
    {
        id: 'password',
        type: 'Password',
        placeholder: 'Пароль',
        icon: <Lock/>
    },
    {
        id: 'repeat your password',
        type: 'Password',
        placeholder: 'Повторите пароль',
        icon: <Lock/>
    }
];

export const inputsSignIn = [
    {
        id: 'email',
        type: 'TextField',
        placeholder: 'Email',
        icon: <Email/>
    },
    {
        id: 'password',
        type: 'Password',
        placeholder: 'Пароль',
        icon: <Lock/>
    },
];

export const textsPreSignUp = [
    {
        style: {
            fontFamily: `Comfortaa`,
            fontStyle: `normal`,
            fontWeight: 400,
            fontSize: 32,
            
            color: `#392250`
        },
        text: 'Добро пожаловать в ' + process.env.REACT_APP_PROJECT_NAME
    },
    {
        style: {
            marginTop: 10,
            fontFamily: `Raleway`,
            fontStyle: `normal`,
            fontWeight: 300,
            fontSize: 18,
            
            color: `#000000`
        },
        text: 'Для регистрации заполните поля'
    }
];
