import React from 'react';
import { PropTypes } from 'prop-types';
import FilmProp from '../../props/film.prop';
import VideoComponent from '../video-component/video-component';
import { NavLink, useLocation } from 'react-router-dom';

function CardComponent(props) {
  const { film } = props;
  const { nameRu, posterUrlPreview, filmId } = film;
  const location = useLocation();
  const isMainPage = location.pathname === '/Check-it';
  const isFilmDetailsPage = location.pathname.includes('/films/');
  let linkUrl;
  if (isMainPage) {
    linkUrl = `/Check-it/films/${filmId}`;
  } else if (isFilmDetailsPage) {
    const currentFilmId = location.pathname.split('/').pop();
    linkUrl = currentFilmId === filmId.toString() ? location.pathname : `${location.pathname.replace(/\/\d+$/, '')}/${filmId}`;
  } else {
    linkUrl = `/Check-it/films/${filmId}`;
  }
  return (
    <article className="small-movie-card catalog__movies-card active">
      <NavLink to={linkUrl} className="small-movie-card__image">
        <div className="small-movie-card__image">
          <VideoComponent
            className="player__video"
            previewImage={posterUrlPreview}
          ></VideoComponent>
        </div>
        <h3 className="small-movie-card__title">{nameRu}</h3>
      </NavLink>
    </article>
  );
}
CardComponent.propTypes = {
  film: FilmProp,

};

export default CardComponent;
