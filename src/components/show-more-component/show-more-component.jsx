import React from 'react';
import {maxFilms} from '../../const';
import {useDispatch, useSelector} from 'react-redux';
import {getMaxFilms} from '../../store/actions';
import PropTypes from 'prop-types';
const ShowMoreComponent = ({films}) => {
  const {currentNumberFilms} = useSelector((state) => state.FILMS);
  const dispatch = useDispatch();
  let isMoreFilms = films.length > currentNumberFilms;
  const handleMoreFilms = () => {
    if (films.length > currentNumberFilms) {
      let updatedNumbersFilms = currentNumberFilms + maxFilms;
      if (updatedNumbersFilms >= allFilms.length) {
        updatedNumbersFilms = allFilms.length;
      }
      dispatch(getMaxFilms(updatedNumbersFilms));
    }
  };

  return isMoreFilms ? (
    <React.Fragment>
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={handleMoreFilms}>
          Show more
        </button>
      </div>
    </React.Fragment>
  ) : (
    <></>
  );
};
ShowMoreComponent.propTypes = {
  films:PropTypes.array.isRequired,
} ;
export default ShowMoreComponent;
