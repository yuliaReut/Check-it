import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
// import {checkAuth} from '../../store/api-actions';
const FavouriteListComponent = ({handleOnFavouriteList}) => {
  const dispatch = useDispatch();
  // const handleOnClisk = () => {
  //   dispatch(checkAuth());
  //   handleOnFavouriteList();
  // };
  return (
    <React.Fragment>
      <button className="btn btn--list movie-card__button" type="button" onClick={handleOnClisk}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

FavouriteListComponent.propTypes = {
  handleOnFavouriteList: PropTypes.func.isRequired,
};

export default FavouriteListComponent;
