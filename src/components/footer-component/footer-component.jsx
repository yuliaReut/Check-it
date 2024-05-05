import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
const FooterComponent = () => {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">CHECK_IT</span>
        </Link>
      </div>
      <div className="copyright">
        <p>© Check it 2024</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
