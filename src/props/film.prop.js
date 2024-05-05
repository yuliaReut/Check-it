import PropTypes from 'prop-types';

export default PropTypes.shape({
  posterUrlPreview: PropTypes.string.isRequired,
  //nameRu: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  year: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,

  rating: PropTypes.string.isRequired,
  // previewVideoLink: PropTypes.string.isRequired,
  // videoLink: PropTypes.string.isRequired,

  // rating: PropTypes.string.isRequired,
}).isRequired;
