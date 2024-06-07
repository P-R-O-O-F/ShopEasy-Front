import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const withAuth = (Component) => {
  return () => {
    const token = Cookies.get('access_token');
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        navigate('/login');
      }
    }, [token, navigate]);

    return <Component />;
  };
};

export default withAuth;