import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.tsx'
import Login from './routes/login.tsx'
import Register from './routes/register.tsx'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar.tsx";
import {ThemeProvider} from "@mui/material";
import theme from "./components/theme.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    }
]);


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Navbar/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </StrictMode>,
)


