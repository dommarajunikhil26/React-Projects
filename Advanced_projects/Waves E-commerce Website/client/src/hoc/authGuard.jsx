/* eslint-disable react/prop-types */


import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ isAuth }) => {
    if (!isAuth) {
        return <Navigate to="/sign_in" />
    } else {
        return <Outlet />
    }
};

export default AuthGuard;