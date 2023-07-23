import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import College from "../components/College/College";
import Admission from "../components/Admission/Admission";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/college',
                element: <College />,
            },
            {
                path: '/admission',
                element: <Admission />,
            },
        ]
    },
]);

export default router;