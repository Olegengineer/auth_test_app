import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RequireAuth = ({ children }) => {
  // move to useAuth hook and check if token isExpired or smth.
  const isAuthenticated = localStorage.getItem('access_token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return children;
};

export default RequireAuth;
