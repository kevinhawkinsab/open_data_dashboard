import { Route } from '../models/route-type';
import Home from "../pages/home/Home";
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';

const mainRoutes: Route[] = [
    {
        path: '/home',
        component: Home,
        // exact: true,
        // title: 'Dashboard',
        // icon: 'home',
        // isPrivate: true,
    },
    {
        path: 'auth/login',
        component: Login,
        // exact: true,
        // title: 'Login',
        // icon: 'login',
        // isPrivate: false,
    },
    {
        path: 'auth/register',
        component: Register,
        // exact: true,
        // title: 'Register',
        // icon: 'register',
        // isPrivate: false,
    },
    // {
    //     path: '/forgot-password',
    //     component: ForgotPassword,
    //     exact: true,
    //     title: 'Forgot Password',
    //     icon: 'forgot-password',
    //     isPrivate: false,
    // },
    // {
    //     path: '/404',
    //     component: NotFound,
    //     exact: true,
    //     title: '404',
    //     icon: '404',
    //     isPrivate: false,
    // },
    {
        path: '/',
        component: Home,
        // exact: true,
        // title: 'Dashboard',
        // icon: 'home',
        // isPrivate: true,
    },
];

export default mainRoutes;
