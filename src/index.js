import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./components/app-component/app-component";
// import {composeWithDevTools} from 'redux-devtools-extension';
// import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
// import thunk from "redux-thunk";
import {reducer} from "./store/reducer";
import createAPI from "./api/api";
import {requireAuthorization} from "./store/actions";
import {checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/redirect";
import {configureStore} from '@reduxjs/toolkit';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "./browser-history";
const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },

    }).concat(redirect)
});

store.dispatch(checkAuth());
ReactDOM.render(
  <Provider store = {store} >
    <BrowserRouter history = {browserHistory} >
      <AppComponent/>
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
);
