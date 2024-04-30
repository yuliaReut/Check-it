import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const PrivateRoute = ({render, path, exact}) => {
  const {status} = useSelector((state)=>state.USER);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          status === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
