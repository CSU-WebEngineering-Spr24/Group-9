import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeDashboard from "./components/HomeDashboard";
import AppContainer from "./containers/AppContainer";
import WeatherDashboard from "./containers/WeatherDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <WeatherDashboard />
            },
        ]
    },

])

createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)