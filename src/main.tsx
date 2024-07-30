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
import AdminAuthProvider from './Auth/AdminAuthProvider.tsx';
import RequestApiAccessPage from './pages/RequestApiAccessPage.tsx';
import AdminRootPage from './pages/AdminRootPage.tsx';
import AdminRequests from './components/AdminRequests.tsx';
import AdminUsers from './components/AdminUsers.tsx';
import AdminApiInfo from './components/AdminApiInfo.tsx';
import AdminUserInfo from './components/AdminUserInfo.tsx';
import AddNewService from './components/AddNewService.tsx';
import AdminApi from './components/AdminApi.tsx';
import UpdateServiceForm from './forms/UpdateServiceForm.tsx';
import VoiceToText from './pages/ApiServiceInfoPages/VoiceToText.tsx';
const router = createBrowserRouter([
    {
        element: <PrivateAuthProvider />,
        children: [
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
        path: "/api/:id",
        element: <ApiInfoPage />,
    },
    {
        path: "/test2",
        element: <VoiceToText />
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
            },
        ]
    },
    {
        element: <AdminAuthProvider />,
        children: [
            {
                path: "/admin",
                element: <AdminRootPage />,
                children: [
                    {
                        path: "requests",
                        element: <AdminRequests />
                    },
                    {
                        path: "api",
                        element: <AdminApi />
                    },
                    {
                        path: "users",
                        element: <AdminUsers />
                    },
                    {
                        path: "users/:id",
                        element: <AdminUserInfo />
                    },
                    {
                        path: "requests/info",
                        element: <SignUpPage />
                    },
                    {
                        path: "api/:id",
                        element: <AdminApiInfo />
                    },
                    {
                        path: "api/:id/edit",
                        element: <UpdateServiceForm />
                    },
                    {
                        path: "new",
                        element: <AddNewService />
                    },
                ]
            },

        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
