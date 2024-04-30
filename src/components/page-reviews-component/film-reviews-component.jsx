import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getComments} from "../../store/api-actions";
import PropTypes from "prop-types";
const FilmReviewsComponent = (props) => {
  const {comments} = useSelector((state)=>state.COMMENTS);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(props.film.id));
  }, [dispatch, props.film.id]);

  return (<React.Fragment>
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.map((comment) => {
          const date = new Date(comment.date);
          let dateString = date.toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`});

          return (<div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>
              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime="2015-11-18">{dateString}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>);
        })}
      </div>
    </div>
  </React.Fragment>);
};

FilmReviewsComponent.propTypes = {
  film: PropTypes.object.isRequired
};

export default React.memo(FilmReviewsComponent);
