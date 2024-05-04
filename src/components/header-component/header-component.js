import React from 'react';
import PropTypes from 'prop-types';
import LogoComponent from '../logo-component/logo-component';
const HeaderComponent = ({text}) => {
  return (
    <header className="page-header user-page__head">
      <LogoComponent></LogoComponent>
      <h1 className="page-title user-page__title">{text}</h1>
    </header>
  );
};

HeaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
};
export default HeaderComponent;
