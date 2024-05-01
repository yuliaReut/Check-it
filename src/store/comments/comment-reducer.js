import {ActionType} from '../actions';
import {createReducer} from '@reduxjs/toolkit';
const initialState = {
  comments: [],
};

const commentsData = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.STORE_COMMENTS, (state, action) => {
    return {
      ...state,
      comments: action.comments,
    };
  });
  builder.addCase(ActionType.POST_COMMENT, (state, action) => {
    return {
      ...state,
      comments: action.comment,
    };
  });
});

export default commentsData;
