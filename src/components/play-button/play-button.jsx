import React from 'react';
import browserHistory from '../../browser-history';
import PropTypes from 'prop-types';

const PlayButtonComponent = ({film}) => {
  const handleOnPlay = () => {
    browserHistory.push(`/player/${film.id}`);
  };

  return (
    <React.Fragment>
      <button className="btn btn--play movie-card__button" type="button" onClick={handleOnPlay}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    </React.Fragment>
  );
};

PlayButtonComponent.propTypes = {
  film: PropTypes.object.isRequired,
};

export default PlayButtonComponent;
