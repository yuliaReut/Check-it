import React from 'react';
import PropTypes from 'prop-types';
import CardComponent from '../card-component/film-card-component';
import FilmProp from '../../props/film.prop';
import {useDispatch} from 'react-redux';
import {fetchFavouriteList} from '../../store/api-actions';
import LogoComponent from '../logo-component/logo-component';
import FooterComponent from '../footer-component/footer-component';
const MyListComponent = (props) => {
  const dispatch = useDispatch();
  dispatch(fetchFavouriteList());
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>

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
          {props.films.map((filmCard) => (
            <CardComponent
              key={filmCard.id}
              film={filmCard}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
            />
          ))}
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

MyListComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default MyListComponent;
