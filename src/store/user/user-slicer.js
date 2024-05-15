import {createSlice} from '@reduxjs/toolkit';

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
    },
    logout(state) {
      state.authStatus = AuthorizationStatus.NO_AUTH;
    },
  },
});

export const {setAuthorizationStatus, logout} = userSlice.actions;
export default userSlice.reducer;
