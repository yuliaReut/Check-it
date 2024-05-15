import {createSlice} from '@reduxjs/toolkit';

import {setAuthStatus, removeAuthStatus} from '../../utils/utils';
import {AuthorizationStatus} from '../../const';
const initialState = {
  authStatus: AuthorizationStatus.NO_AUTH,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action) {
      state.authStatus = action.payload;
      if (action.payload) {
        setAuthStatus(action.payload);
      } else {
        removeAuthStatus();
      }
    },
    logout(state) {
      state.authStatus = AuthorizationStatus.NO_AUTH;
      removeAuthStatus();
    },
  },
});

export const {setAuthorizationStatus, logout} = userSlice.actions;
export default userSlice.reducer;
