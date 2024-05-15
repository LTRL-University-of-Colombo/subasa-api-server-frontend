import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/css/custom_bootstrap.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TestComponent1 from "./components/TestComponent1.tsx";

const router = createBrowserRouter([{
    path: "/",
    element: <TestComponent1/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
