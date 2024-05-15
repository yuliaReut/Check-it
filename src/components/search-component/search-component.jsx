// import React, {useState, useEffect, useRef} from 'react';
// import {useNavigate, useLocation, Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import queryString from 'query-string';

// import useDebounce from '../../hooks/use-debounce.js';
// import {AuthorizationStatus, AppRoute} from '../../const';
// // eslint-disable-next-line import/namespace
// import {useGetSearchingMoviesQuery} from '../../api/kinopoisk-api.js';
// import {
//   getSearchHistory,
//   getCurrentUser,
//   setSearchHistoryItem,
//   getAuthStatus,
// } from '../../utils/utils.js';
// const SearchPanel = () => {
//   const user = getCurrentUser();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchHistory, setSearchHistory] = useState([]);
//   const [showMovieCardList, setShowMovieCardList] = useState(false);
//   const inputRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();
//   let savedSearchHistory;
//   if (user) {
//     savedSearchHistory = getSearchHistory();
//   }

//   const debouncedSearchTerm = useDebounce(searchTerm, 500);
//   const {data, isLoading, error} = useGetSearchingMoviesQuery(debouncedSearchTerm);

//   useEffect(() => {
//     const queryParams = queryString.parse(location.search);
//     const searchQuery = queryParams.q || '';
//     setSearchTerm(searchQuery);

//     if (user) {
//       savedSearchHistory = getSearchHistory();
//     }
//     if (savedSearchHistory) {
//       setSearchHistory(savedSearchHistory);
//     }
//   }, [location.search]);

//   const handleSearch = () => {
//     if (searchTerm.trim()) {
//       if (getAuthStatus() === AuthorizationStatus.AUTH) {
//         const newSearchHistory = [...searchHistory, searchTerm];
//         setSearchHistory(newSearchHistory);
//         setSearchHistoryItem(newSearchHistory);
//       }
//       navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
//       setSearchTerm('');
//     }else{
//       navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   useEffect(() => {
//     const handleClick = (event) => {
//       if (inputRef.current && inputRef.current.contains(event.target)) {
//         setShowMovieCardList(true);
//       } else {
//         setShowMovieCardList(false);
//       }
//     };

//     document.addEventListener('click', handleClick);

//     return () => {
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);
//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };
//   const handleInputFocus = () => {
//     setShowMovieCardList(true);
//   };

//   return (
//     <form className="user-block" >
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => {
//           handleInputChange(e);
//         }}
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             handleSearch();
//           }
//         }}
//         ref={inputRef}
//         onFocus={handleInputFocus}
//         placeholder="Название фильма..."
//       />
//       <button className="search__button" onClick={handleSearch}>
//         Поиск
//       </button>
//       <div className={`search-movie-card-list  `}>
//         {data
//           ? data.films.map((film) => {
//               const filmId = film.filmId || film.kinopoiskId;
//               return (
//                 <Link
//                   key={filmId}
//                   className={`search-movie-card ${showMovieCardList ? '' : 'hidden'}`}
//                   to={`${AppRoute.ROOT}films/${filmId}`}
//                 >
//                   <div className="search-movie-card__image">
//                     <img
//                       src={film.posterUrlPreview}
//                       alt={film.nameRu || film.nameEn || 'Без названия'}
//                     />
//                     <span>{film.nameRu || film.nameEn || 'Без названия'}</span>
//                   </div>
//                 </Link>
//               );
//             })
//           : ''}
//       </div>
//     </form>
//   );
// };

// export default SearchPanel;

import React, {useState} from 'react';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import useDebounce from '../../hooks/use-debounce.js';
import {AuthorizationStatus, AppRoute} from '../../const';
// eslint-disable-next-line import/namespace
import {useGetSearchingMoviesQuery} from '../../api/kinopoisk-api.js';
import {
  getSearchHistory,
  getCurrentUser,
  setSearchHistoryItem,
  getAuthStatus,
} from '../../utils/utils.js';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchTerm = useDebounce(searchQuery, 500);
  const {data, isLoading, error} = useGetSearchingMoviesQuery(debouncedSearchTerm);
  const navigate = useNavigate();
  const handleSearch = () => {
    const query = searchQuery.trim();
    if (query !== '') {
      if (getAuthStatus() === AuthorizationStatus.AUTH) {
        const histories = getSearchHistory() ? getSearchHistory() : [];
        const newSearchHistory = [...histories, query];
        setSearchHistoryItem(newSearchHistory);
      }
      navigate(`/Check-it/search/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const [showMovieCardList, setShowMovieCardList] = useState(false);
  const handleInputFocus = () => {
    setShowMovieCardList(true);
  };
  return (
    <div className="user-block">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Поиск</button>
      <div className={`search-movie-card-list  `}>
        {data
          ? data.films.map((film) => {
              const filmId = film.filmId || film.kinopoiskId;
              return (
                <Link
                  key={filmId}
                  className={`search-movie-card ${showMovieCardList ? '' : 'hidden'}`}
                  to={`${AppRoute.ROOT}films/${filmId}`}
                >
                  <div className="search-movie-card__image">
                    <img
                      src={film.posterUrlPreview}
                      alt={film.nameRu || film.nameEn || 'Без названия'}
                    />
                    <span>{film.nameRu || film.nameEn || 'Без названия'}</span>
                  </div>
                </Link>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default SearchBar;
