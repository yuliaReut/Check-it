import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}).isRequired;
