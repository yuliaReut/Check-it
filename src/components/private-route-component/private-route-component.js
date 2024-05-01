import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, path }) => {
  const { authorizationStatus } = useSelector((state) => state.USER);

  return (
    <Route
      path={path}
      element={
        authorizationStatus === AuthorizationStatus.AUTH
          ? children
          : <Navigate to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string,
  children: PropTypes.node,
};

export default PrivateRoute;
