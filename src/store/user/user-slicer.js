import { createSlice } from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../const';

const initialState = {
  status: AuthorizationStatus.NO_AUTH,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthorizationStatus(state, action) {
      state.status = action.payload;
    },
    removeAuthorizationStatus(state) {
      state.status = AuthorizationStatus.NO_AUTH;
    },
  },
});

export const { setAuthorizationStatus, removeAuthorizationStatus } = userSlice.actions;
export default userSlice.reducer;
