import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/app-component/app-component';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import {kinopoiskApi} from './api/kinopoisk-api';
import authMiddleware from './middlewares/auth-middleware';
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware, authMiddleware),
});

console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </BrowserRouter>,
);
