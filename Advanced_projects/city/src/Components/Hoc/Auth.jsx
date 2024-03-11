
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, children }) => {
    const location = useLocation();

    if (!isAuth) {
        console.log("Redirecting to /sign_in...");
        return <Navigate to="/sign_in" replace />;
    }

    return children;
};

export default ProtectedRoute;
