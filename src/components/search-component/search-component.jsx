import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import queryString from 'query-string';
import { useGetSearchingMoviesQuery } from '../../api/kinopoisk-api.js';

const SearchPanel = ({ isAuthenticated }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  let savedSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.login}`)) || [];
  const { data, isLoading, error } = useGetSearchingMoviesQuery(searchTerm);
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
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // const handleInputChange = debounce(async (value) => {
  //   if (value.trim()) {
  //     // Fetch suggestions from your API
  //     const suggestions = await fetchSuggestions(value);
  //     setSuggestions(suggestions);
  //     setShowSuggestions(true);
  //   } else {
  //     setSuggestions([]);
  //     setShowSuggestions(false);
  //   }
  // }, 300);

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/Check-it/${suggestion.id}`);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleHistoryClick = (searchTerm) => {
    navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form className="user-block">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          //  handleInputChange(e.target.value);
        }}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     handleSearch();
        //   }
        // }}
        // onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        ref={inputRef}
        placeholder="Search..."
      />
      <button className="search__button" onClick={() => handleHistoryClick(searchTerm)}>Search</button>
      {showSuggestions && (
        <div>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.title}
            </div>
          ))}
        </div>
      )}

      <div className="search-movie-card-list">
        {data ? data.films.map((film) => {
          const filmId = film.filmId || film.kinopoiskId;
          return (
            <a className="search-movie-card" key={filmId} href={`${AppRoute.ROOT}films/${filmId}`}>

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
