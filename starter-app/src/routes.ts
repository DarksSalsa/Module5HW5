// pages
import User from "./pages/Users";
import Resource from "./pages/Resources";
import UserPage from "./pages/Users/UserPage/User";
import ResourcePage from "./pages/Resources/ResourcePage/Resource";
import CreateUserPage from "./pages/UserManipulation/UserCreation";
import UserCreationCard from "./pages/UserManipulation/UserCreation/components";
import UpdateUserPage from "./pages/UserManipulation/UserUpdate";
import UserUpdateCard from "./pages/UserManipulation/UserUpdate/components";
import Redirect from "./pages/RedirectPage/Redirect";
import LoginPage from "./pages/Authentication/LoginPage";
import RegisterPage from "./pages/Authentication/RegisterPage";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'basic-route',
        title: 'Basic',
        path: '/',
        enabled: false,
        component: Redirect
    },
    {
        key: 'user-route',
        title: 'User',
        path: '/users/',
        enabled: true,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/unknown/',
        enabled: true,
        component: Resource
    },
    {
        key: 'user-page-route',
        title: 'User',
        path: '/user/:id',
        enabled: false,
        component: UserPage
    },
    {
        key: 'resource-page-route',
        title: 'Resource',
        path: '/unknown/:id',
        enabled: false,
        component: ResourcePage
    },
    {
        key: 'create-user-page-route',
        title: 'Create new user',
        path: '/user/created',
        enabled: true,
        component: CreateUserPage
    },
    {
        key: 'show-created-user-page-route',
        title: 'Show created user page',
        path: '/user/created/:id',
        enabled: false,
        component: UserCreationCard
    },
    {
        key: 'update-user-page-route',
        title: 'Update user',
        path: '/user/updated',
        enabled: true,
        component: UpdateUserPage
    },
    {
        key: 'show-updated-user-page-route',
        title: 'Show updated user page',
        path: '/user/updated/:id',
        enabled: false,
        component: UserUpdateCard
    },
    {
        key: 'show-login-page-route',
        title: 'Sign in',
        path: '/login',
        enabled: false,
        component: LoginPage
    },
    {
        key: 'show-register-page-route',
        title: 'Register',
        path: '/register',
        enabled: false,
        component: RegisterPage
    },
]