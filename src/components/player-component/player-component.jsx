import React from 'react';
import PropTypes from 'prop-types';
import VideoComponent from '../video-component/video-component';
import ExitButtonComponent from '../exit-button/exit-button';

import {useParams} from 'react-router-dom';
import filmProp from '../../props/film.prop';
const PlayerComponent = ({films}) => {
  const id = Number(useParams().id);
  const item = films.find((it) => it.id === id);
  const {videoLink, backgroundImage} = item;
  return (
    <React.Fragment>
      <div className="player">
        <VideoComponent
          previewVideoLink={videoLink}
          previewImage={backgroundImage}
          isPlaying={true}
        ></VideoComponent>
        <ExitButtonComponent></ExitButtonComponent>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <xlinkHrefCLASuse xlinkHref="#play-s"></xlinkHrefCLASuse>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
        </div>
        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </React.Fragment>
  );
};
PlayerComponent.propTypes = {
  films: PropTypes.arrayOf(filmProp),
  // previewVideoLink: PropTypes.string.isRequired,
  // posterImage: PropTypes.string.isRequired
};

export default PlayerComponent;
