// pages
import User from "./pages/Users";
import Resource from "./pages/Resources";
import UserPage from "./pages/Users/UserPage/User";
import ResourcePage from "./pages/Resources/ResourcePage/Resource";
import CreateUserPage from "./pages/UserManipulation/UserCreation";
import UserCreationCard from "./pages/UserManipulation/UserCreation/components";
import UpdateUserPage from "./pages/UserManipulation/UserUpdate";
import UserUpdateCard from "./pages/UserManipulation/UserUpdate/components";
import AuthPage from "./pages/Authentication";

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
        key: 'show-authentication-page-route',
        title: 'Authentication',
        path: '/authentication',
        enabled: false,
        component: AuthPage
    },
]