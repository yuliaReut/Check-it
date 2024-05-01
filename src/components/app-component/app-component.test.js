import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
// import {MAX_MISTAKE_COUNT, AuthorizationStatus, AppRoute} from '../../const';
import AppComponent from './app-component';
const initialState = {
  FILMS: {
    genre: `All genres`,
    films: [],
    allFilms: [],
    currentNumberFilms: 8,
    isDataLoaded: false,
    film: null,
    favouriteFilms: [],
  },
  USER: {
    user: {},
    status: `Auth`,
  },
  // другие необходимые состояния
};

const mockStore = configureStore({});
const store = mockStore(initialState);

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main component' when user navigate to '/'`, () => {
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <BrowserRouter history={history}>
            <AppComponent></AppComponent>
          </BrowserRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
  it(`Render 'Main component' when user navigate to '/login'`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);
    render(
        <redux.Provider store={mockStore({})}>
          <BrowserRouter history={history}>
            <AppComponent></AppComponent>
          </BrowserRouter>
        </redux.Provider>
    );

    expect(screen.getByText(/Login in/i)).toBeInTheDocument();
  });
});
