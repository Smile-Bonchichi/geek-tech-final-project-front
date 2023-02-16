import { MainPage } from '../../pages/MainPage.js';
import { SignUp } from '../../pages/auth/SignUp.js';
import { SingIn } from '../../pages/auth/SingIn.js';
import Confirm from '../../pages/auth/Confirm.js';

export const routes = [
    { url: '/', element: <MainPage/> },
    { url: '/sign-up', element: <SignUp/> },
    { url: '/sign-in', element: <SingIn/> },
    { url: '/confirm/:token', element: <Confirm/> }
];