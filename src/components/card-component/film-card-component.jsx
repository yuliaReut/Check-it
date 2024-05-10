import React from 'react';
import FilmProp from '../../props/film.prop';
import VideoComponent from '../video-component/video-component';
import { NavLink, useLocation } from 'react-router-dom';
import {PropTypes} from "prop-types";
import FavouriteButtonComponent from '../favourite-button-component/favourite-button-component';
import { AuthorizationStatus } from '../../const';
const pageUrlCheck = (location, filmId)=>{
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
  return linkUrl;
}

function CardComponent(props) {
  const { film, isAuthenticated } = props;
  const { nameRu, posterUrlPreview, filmId } = film;
  const location = useLocation();
  let linkUrl = pageUrlCheck(location, filmId);

  return (
    <article className="small-movie-card catalog__movies-card active">
      {isAuthenticated === AuthorizationStatus.AUTH ? (<FavouriteButtonComponent filmId={filmId}></FavouriteButtonComponent>) : null}
      <NavLink to={linkUrl} className="small-movie-card__image">


          <VideoComponent
            className="player__video"
            previewImage={posterUrlPreview}
          ></VideoComponent>



      </NavLink>
      <h3 className="small-movie-card__title">{nameRu}</h3>
    </article>
  );
}
CardComponent.propTypes = {
  film: FilmProp,
  isAuthenticated: PropTypes.string.isRequired
};

export default CardComponent;
