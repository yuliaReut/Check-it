import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import userEvent from '@testing-library/user-event';
import SignInComponent from './sigh-in-component';

const mockStore = configureStore({});

it(`Render "SignInComponent" when user navigate to "/login" url`, () => {
  const history = createMemoryHistory();
  history.push(`/login`);

  render(<redux.Provider store={mockStore({})}>
    <Router history={history}>
      <SignInComponent></SignInComponent>
    </Router>
  </redux.Provider>,
  );

  expect(screen.getByText(`Password`)).toBeInTheDocument();
  expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  userEvent.type(screen.getByTestId(`email`), `mtvjulya@yahoo.com`);
  userEvent.type(screen.getByTestId(`password`), `123`);

  expect(screen.getByDisplayValue(/mtvjulya@yahoo.com/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(/123/i)).toBeInTheDocument();
});
