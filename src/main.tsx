import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/custom_bootstrap.css'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import ApiInfoPage from './pages/ApiInfoPage.tsx';
import UserSignupForm from './forms/UserSignupForm.tsx';
import OrgSingupForm from './forms/OrgSingupForm.tsx';
import UserServices from './pages/UserServices.tsx';
import ChangePasswordPage from './pages/ChangePasswordPage.tsx';
import PrivateAuthProvider from './Auth/PrivateAuthProvider.tsx';
import RequestApiAccessPage from './pages/RequestApiAccessPage.tsx';
const router = createBrowserRouter([
    {
        element: <PrivateAuthProvider />,
        children: [
            {
                path: "/api/:id",
                element: <ApiInfoPage />,
            },
            {
                path: "/api/:id/request-access",
                element: <RequestApiAccessPage />
            },
            {
                path: "/services",
                element: <UserServices />
            },
            {
                path: "/change-password",
                element: <ChangePasswordPage />
            }
        ]
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <SignUpPage />,
        children: [
            { index: true, element: <Navigate replace to="user" /> },
            {
                path: "user",
                element: <UserSignupForm />
            },
            {
                path: "organization",
                element: <OrgSingupForm />
            }
        ]
    },
    {
        path: "/test",
        element: <PrivateAuthProvider />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
