import React from 'react';
import {render} from '@testing-library/react';

import LoadingScreen from './loading-screen.jsx';

test(`Should LoadingScreen render correctly`, () => {
  const {container} = render(<LoadingScreen />);
  expect(container).toMatchSnapshot();
});
