import PropTypes from 'prop-types';

export default PropTypes.shape({
  posterUrlPreview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  posterUrl: PropTypes.string.isRequired,
}).isRequired;
