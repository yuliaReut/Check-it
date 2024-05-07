import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';

const SearchPanel = ({ isAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedSearchHistory = localStorage.getItem('searchHistory');
    if (savedSearchHistory) {
      setSearchHistory(JSON.parse(savedSearchHistory));
    }
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      if (isAuthenticated) {
        const newSearchHistory = [...searchHistory, searchTerm];
        setSearchHistory(newSearchHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
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
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
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
          {searchHistory.map((searchTerm, index) => (
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
  isAuthenticated: PropTypes.bool,
};
export default SearchPanel;
