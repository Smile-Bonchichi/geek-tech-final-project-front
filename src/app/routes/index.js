import { Main } from '../../pages/Main.jsx';
import { SignUp } from '../../pages/auth/SignUp.jsx';
import { SingIn } from '../../pages/auth/SingIn.jsx';
import { Confirm } from '../../pages/auth/Confirm.jsx';
import { Profile } from '../../pages/user/Profile.jsx';

export const routes = [
    { url: '/', element: <Main/> },
    { url: '/profile', element: <Profile/> },
    { url: '/sign-up', element: <SignUp/> },
    { url: '/sign-in', element: <SingIn/> },
    { url: '/confirm/:token', element: <Confirm/> }
];