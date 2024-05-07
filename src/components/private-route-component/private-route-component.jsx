import React from 'react';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  return AuthorizationStatus ? <Outlet /> : <Navigate to={AppRoute.ROOT + `signin`} />
};

export default PrivateRoute;
