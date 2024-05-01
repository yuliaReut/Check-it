import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import FilmProp from '../../props/film.prop';
import VideoComponent from '../video-component/video-component';
function CardComponent(props) {
  const {film, onMouseEnter, onMouseLeave} = props;
  const {name, previewImage, id, previewVideoLink} = film;
  let [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleMouseEnter = () => {
    setIsPlaying(true);
    setIsActive(true);
    onMouseEnter(film);
  };
  const handleMouseLeave = () => {
    setIsPlaying(false);
    setIsActive(false);
    onMouseLeave();
  };

  return (
    <article
      className={`small-movie-card catalog__movies-card ${isActive ? `active` : ``}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoComponent
          previewVideoLink={previewVideoLink}
          className="player__video"
          previewImage={previewImage}
          isActive={isActive}
          isPlaying={isPlaying}
        ></VideoComponent>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`films/${id}`} className="small-movie-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

CardComponent.propTypes = {
  film: FilmProp,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default CardComponent;
