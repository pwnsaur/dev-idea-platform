import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  user?: any;
  children?: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
