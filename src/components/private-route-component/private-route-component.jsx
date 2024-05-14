import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

import {AuthorizationStatus, AppRoute} from '../../const';
import {getAuthStatus} from '../../utils/utils.js';
const PrivateRoute = () => {
  const authStatus = getAuthStatus();
  return authStatus === AuthorizationStatus.AUTH ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoute.ROOT + `signin`} />
  );
};

export default PrivateRoute;
