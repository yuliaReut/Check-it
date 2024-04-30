import React from "react";
import {useState} from "react";
import {useCallback} from "react";
import {PropTypes} from "prop-types";

import {postComment} from "../../store/api-actions";
import browserHistory from "../../browser-history";
import {useDispatch} from 'react-redux';
const Rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const FormReviewComponent = (props) => {
  const {id} = props;
  const [selectedStar, setSelectedStar] = useState(null);

  const [commentText, setCommentText] = useState(``);
  const dispatch = useDispatch();
  const handleSelectedStarsChange = useCallback((evt) => {
    setSelectedStar(evt.target.value);
  }, []);
  const handleCommentTextChange = useCallback((evt) => {
    setCommentText(evt.target.value);
  }, []);
  const rating = Number(selectedStar);

  const handleSubmit = (evt)=>{
    evt.preventDefault();
    dispatch(postComment(id, {rating, comment: commentText}));
    browserHistory.push(`/films/${id}`);
  };
  return (<React.Fragment>
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Rating.map((rating)=>{
            return <React.Fragment key={`${rating}`}>
              <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={`${rating}`} checked={`${rating}` === selectedStar} onChange={handleSelectedStarsChange}/>
              <label className="rating__label" htmlFor={`star-${rating}`}>Rating {`${rating}`}</label>
            </React.Fragment>;
          })}

        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea" name="review-text"
          id="review-text"
          placeholder="Review text"
          value={commentText}
          onChange={handleCommentTextChange} />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  </React.Fragment>);
};

FormReviewComponent.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FormReviewComponent;
