import React from 'react';

import browserHistory from '../../browser-history';

const ExitButtonComponent = () => {
  const handleOnExit = () => {
    browserHistory.push(`/`);
  };
  return (
    <button onClick={handleOnExit} type="button" className="player__exit">
      Exit
    </button>
  );
};

export default ExitButtonComponent;
