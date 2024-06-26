import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const.js';
import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';

const Page404Component = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>
      </header>
      <section className="catalog">
        <Link to={AppRoute.ROOT} className="page-title non-page">
          Вернитесь на главную страницу
        </Link>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default Page404Component;
