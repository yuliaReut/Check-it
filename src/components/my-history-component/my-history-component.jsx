import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

import FilmProp from '../../props/film.prop.js';
import LogoComponent from '../logo-component/logo-component.jsx';
import FooterComponent from '../footer-component/footer-component.jsx';
import {getCurrentUser, getSearchHistory} from '../../utils/utils.js';

const HistoryComponent = ({films}) => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const searchHistory = getSearchHistory();

  const handleHistoryClick = (searchTerm) => {
    navigate(`/Check-it/search/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoComponent></LogoComponent>
        <h1 className="page-title user-page__title">История поиска</h1>
        <div className="user-block">{currentUser.login}</div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__movies-list">
          <div>
            {searchHistory ? (
              searchHistory.map((searchTerm, index) => (
                <div
                  className="catalog__movies-search-word"
                  key={index}
                  onClick={() => handleHistoryClick(searchTerm)}
                >
                  {searchTerm}
                </div>
              ))
            ) : (
              <p>Ваша история пуста</p>
            )}
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

HistoryComponent.propTypes = {
  films: PropTypes.arrayOf(FilmProp),
};

export default HistoryComponent;
