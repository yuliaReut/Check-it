import React from "react";
import PropTypes from "prop-types";
import CardComponent from "../card-component/film-card-component";
import FilmProp from "../../props/film.prop";
import {useDispatch} from "react-redux";
import {fetchFavouriteList} from "../../store/api-actions";
const MyListComponent = (props) => {
  const dispatch = useDispatch();
  dispatch(fetchFavouriteList());
  return <React.Fragment>
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {props.films.map((filmCard) => <CardComponent
            key={filmCard.id}
            film={filmCard}
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}} />)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>

  </React.Fragment>;
};

MyListComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp)
};

export default MyListComponent;
