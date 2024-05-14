import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';

import {reducer} from './store/reducer';
import AppComponent from './components/app-component/app-component.jsx';
// eslint-disable-next-line import/namespace
import {kinopoiskApi} from './api/kinopoisk-api.js';
import authMiddleware from './middlewares/auth-middleware.js';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware, authMiddleware),
});

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </BrowserRouter>,
);
