import React, {useCallback, useEffect} from 'react';
// import {useState} from "react";
import {PropTypes} from 'prop-types';
import CardComponent from '../card-component/film-card-component';
import {useState} from 'react';
import FilmProp from '../../props/film.prop';

const FilmsList = (props) => {
  const {films, maxFilms} = props;
  const trimmedFilms = films.slice(0, maxFilms);
  let setTime = 0;
  const [, setActiveFilmCard] = useState(null);
  const handleMouseEnter = useCallback((film) => {
    setTime = setTimeout(() => {
      if (document.body.contains(document.activeElement)) {
        setActiveFilmCard(film);
      }
    }, 1000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveFilmCard(null);
    clearTimeout(setTime);
  }, [setTime, setActiveFilmCard]);

  useEffect(() => {
    return () => {
      clearTimeout(setTime);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {trimmedFilms.map((filmCard) => {
          return (
            <CardComponent
              key={filmCard.id}
              film={filmCard}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
  maxFilms: PropTypes.number.isRequired,
};

export default FilmsList;
