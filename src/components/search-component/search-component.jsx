import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useDebounce from '../../hooks/use-debounce.js';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import queryString from 'query-string';
import { useGetSearchingMoviesQuery } from '../../api/kinopoisk-api.js';

const SearchPanel = ({ isAuthenticated }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showMovieCardList, setShowMovieCardList] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  let savedSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.login}`)) || [];
  const { data, isLoading, error } = useGetSearchingMoviesQuery(searchTerm);
  useDebounce(searchTerm, 5000);
  useEffect(() => {
    const queryParams = queryString.parse(location.search);
    const searchQuery = queryParams.q || '';
    setSearchTerm(searchQuery);

    savedSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.login}`)) || [];
    if (savedSearchHistory) {
      setSearchHistory(savedSearchHistory);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      if (isAuthenticated === AuthorizationStatus.AUTH) {
        const newSearchHistory = [...searchHistory, searchTerm];
        setSearchHistory(newSearchHistory);
        localStorage.setItem(`searchHistory_${user.login}`, JSON.stringify(newSearchHistory));
      }
      navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);

  };
  const handleInputFocus = () => {
    setShowMovieCardList(true);
  };

  const handleInputBlur = () => {
    setShowMovieCardList(false);
  };

  return (
    <form className="user-block">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          handleInputChange(e)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        placeholder="Название фильма..."
      />
      <button className="search__button" onClick={handleSearch}>Поиск</button>
      <div className={`search-movie-card-list  ${showMovieCardList ? '' : 'hidden'}`}>
        {data ? data.films.map((film) => {
          const filmId = film.filmId || film.kinopoiskId;
          return (
            <a className={`search-movie-card  ${showMovieCardList ? '' : 'hidden'}`} key={filmId} href={`${AppRoute.ROOT}films/${filmId}`}>

              <div className="search-movie-card__image">
                <img src={film.posterUrlPreview} alt={film.nameRu || film.nameEn} />
                <span>{film.nameRu || film.nameEn}</span>
              </div>
            </a>
          );
        }) : ""}
      </div>
    </form>
  );
};
SearchPanel.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
};
export default SearchPanel;
