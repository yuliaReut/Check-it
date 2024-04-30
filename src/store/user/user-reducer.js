import {ActionType} from "../actions";
import {AuthorizationStatus} from "../../const";
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  status: AuthorizationStatus.NO_AUTH,
  user: null
};

const userData = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.REQUIRED_AUTHORIZATION, (state, action) => {
    return {
      ...state,
      user: state.user,
      status: action.status,
    };
  });
  builder.addCase(ActionType.STORE_USER_DATA, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  });
});

export default userData;
