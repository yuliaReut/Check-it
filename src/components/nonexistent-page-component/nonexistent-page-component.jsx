import React from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import FooterComponent from '../footer-component/footer-component';
import HeaderComponent from '../header-component/header-component';
const NonexistentPageComponent = () => {
  return (
    <div className="user-page">
      <HeaderComponent text="404 Not Found"></HeaderComponent>
      <section className="catalog">
        <Link to={AppRoute.ROOT} className="page-title non-page">
          Вернитесь на главную страницу
        </Link>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default NonexistentPageComponent;
