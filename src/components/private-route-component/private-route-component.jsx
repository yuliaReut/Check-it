import React from 'react';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const authStatus = localStorage.getItem('authStatus');
  console.log(authStatus);
  return authStatus=== AuthorizationStatus.AUTH ? <Outlet/> : <Navigate to={AppRoute.ROOT + `signin`} />
};

export default PrivateRoute;
