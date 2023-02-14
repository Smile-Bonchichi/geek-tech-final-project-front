import { MainPage } from '../../pages/MainPage.js';
import { SignUp } from '../../pages/auth/SignUp.js';

export const routes = [
    { url: '/', element: <MainPage/> },
    { url: '/sign-up', element: <SignUp/> }
];