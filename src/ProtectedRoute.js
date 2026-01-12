import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const { user } = useUser();

    return (
        user ? <Component {...rest} /> : <Navigate to="/login" />
    );
};

export default ProtectedRoute;
