import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
]);


const AppRouter: React.FC = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;
