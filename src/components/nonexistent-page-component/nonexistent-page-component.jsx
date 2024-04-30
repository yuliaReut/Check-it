import React from "react";
import {AppRoute} from "../../const";
import {Link} from "react-router-dom";

const NonexistentPageComponent = () => {
  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">404 Not Found</h1>

      </header>
      <section className="catalog">
        <Link to={AppRoute.ROOT} className="page-title " style = {{margin: `30%`}}>
            Вернитесь на главную страницу
        </Link>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </React.Fragment>;
};

export default NonexistentPageComponent;
