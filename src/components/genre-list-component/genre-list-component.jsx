import React from 'react';
import {Genres} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {changeGenre, getFilteredFilms as getFilteredFilmsFromStore} from '../../store/actions';
import {getUniqueGenreList, getActiveGenre} from '../../filter';
import {filterFilms} from '../../filter';

const GenreListComponent = () => {
  const {films} = useSelector((state) => state.FILMS);
  const dispatch = useDispatch();
  const genresList = getUniqueGenreList(films, `genre`);

  const handleGenreClick = (evt) => {
    const activeGenre = getActiveGenre(evt);
    dispatch(changeGenre(activeGenre));
    const filteredFilms = filterFilms(films, activeGenre);
    dispatch(getFilteredFilmsFromStore(filteredFilms));
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        <li
          className="catalog__genres-item catalog__genres-item--active"
          onClick={handleGenreClick}
          data-filter={Genres.all}
        >
          <a href="#" className="catalog__genres-link">
            {Genres.all}
          </a>
        </li>
        {genresList.map((genre, index) => (
          <li
            className="catalog__genres-item"
            key={`${genre}-${index}`}
            data-filter={genre}
            onClick={handleGenreClick}
          >
            <a href="#" className="catalog__genres-link">
              {genre}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default GenreListComponent;
