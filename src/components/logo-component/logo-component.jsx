import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

const LogoComponent = () => {
  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className="logo__link">
        <span className="logo__letter logo__letter--1">CHECK_IT</span>
      </Link>
    </div>
  );
};

export default LogoComponent;
