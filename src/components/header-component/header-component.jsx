import React from 'react';
import PropTypes from 'prop-types';
import LogoComponent from '../logo-component/logo-component';
import HeadUserComponent from '../head-user-component/head-user-component.jsx';
import HeadGuestComponent from '../head-guest-component/head-guest-component';
import SearchPanel from '../search-component/search-component.jsx';
import { AuthorizationStatus } from '../../const.js';
import ThemeComponent from '../theme-component/theme-component.jsx';
const HeaderComponent = ({isAuthenticated, onExit}) => {
  return (
    <header className="page-header user-page__head">

      <LogoComponent></LogoComponent>
      <ThemeComponent></ThemeComponent>
      <SearchPanel isAuthenticated={isAuthenticated}></SearchPanel>
      <div className="user-block">
        {isAuthenticated === AuthorizationStatus.AUTH ? (
          <HeadUserComponent onExit={onExit} />
        ) : (
          <HeadGuestComponent />
        )}
      </div>
    </header>
  );
};

HeaderComponent.propTypes = {
  isAuthenticated: PropTypes.string.isRequired,
  onExit: PropTypes.func.isRequired,

};
export default HeaderComponent;
