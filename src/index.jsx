import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app-component/app-component';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import createAPI from './api/api';
import {requireAuthorization} from './store/actions';
// import {checkAuth} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {redirect} from './store/redirect';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import {kinopoiskApi} from './api/kinopoisk-api';
// const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

//store.dispatch(checkAuth());
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </BrowserRouter>,
);
