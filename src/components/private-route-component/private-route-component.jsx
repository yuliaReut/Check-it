import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, ...rest }) => {
  const { authorizationStatus } = useSelector((state) => state.USER);
  const location = useLocation();

  return (
    <Route
      {...rest}
      element={
        authorizationStatus === AuthorizationStatus.AUTH ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
