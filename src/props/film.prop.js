import PropTypes from 'prop-types';

export default PropTypes.shape({
  backgroundImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
}).isRequired;
