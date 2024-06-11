import { createBrowserRouter, RouterProvider, Outlet, Navigate, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from "./pages/home/Home";
import Appointments from "./pages/Appointments";
import Doctors from "./pages/Doctors";
import Specialities from "./pages/Specialities";
<meta name="viewport" content="initial-scale=1, width=device-width" />


const Layout = () => {
    const location = useLocation();
    const isAuthRoute = location.pathname === '/auth/login' || location.pathname === '/auth/register';

    return (
        <>
            {!isAuthRoute ? <Dashboard element={<Outlet />} /> : <Outlet />}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/appointments',
                element: <Appointments />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: '/specialities',
                element: <Specialities />,
            },
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'auth/login',
                element: <Login />,
            },
            {
                path: 'auth/register',
                element: <Register />,
            },
        ]
    }
]);

function App () {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
