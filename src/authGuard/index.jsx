import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = () => {
  const { userToken } = useSelector(state => state.auth);

  if (!userToken) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default AuthGuard;