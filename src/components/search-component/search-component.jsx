import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
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
  console.log(savedSearchHistory);
  useEffect(() => {

    savedSearchHistory = JSON.parse(localStorage.getItem(`searchHistory_${user.login}`)) || [];
    if (savedSearchHistory) {
      setSearchHistory(savedSearchHistory);
    }
  }, []);

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

  const handleInputChange = debounce(async (value) => {
    if (value.trim()) {
      // Fetch suggestions from your API
      const suggestions = await fetchSuggestions(value);
      setSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, 300);

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/item/${suggestion.id}`);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleHistoryClick = (searchTerm) => {
    navigate(`${AppRoute.ROOT}search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form className='search-form'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleInputChange(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        placeholder="Search..."
      />
      <button className="search__button" onClick={handleSearch}>Search</button>
      {showSuggestions && (
        <div>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.title}
            </div>
          ))}
        </div>
      )}
      {isAuthenticated && (
        <div>
          <h3>Search History</h3>
          {savedSearchHistory.map((searchTerm, index) => (
            <div key={index} onClick={() => handleHistoryClick(searchTerm)}>
              {searchTerm}
            </div>
          ))}
        </div>
      )}
    </form>
  );
};
SearchPanel.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
};
export default SearchPanel;
