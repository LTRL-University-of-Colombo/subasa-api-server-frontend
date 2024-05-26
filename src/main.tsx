import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/custom_bootstrap.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import ApiInfoPage from './pages/ApiInfoPage.tsx';

const router = createBrowserRouter([
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
        element: <SignUpPage />
    },
    {
        path: "/api",
        element: <ApiInfoPage />
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
