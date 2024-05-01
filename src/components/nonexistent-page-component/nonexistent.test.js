import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NonexistentPageComponent from './nonexistent-page-component';

it(`NotFoundScreen should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <NonexistentPageComponent />
      </Router>
  );
  const headerElement = getByText(`404 Not Found`);
  const linkElement = getByText(`Вернитесь на главную страницу`);
  expect(headerElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
