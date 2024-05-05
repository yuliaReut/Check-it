import React from 'react';
import browserHistory from '../../browser-history';

const ExitButtonComponent = () => {
  const handleOnExit = () => {
    browserHistory.push(`/`);
  };
  return (
    <React.Fragment>
      <button onClick={handleOnExit} type="button" className="player__exit">
        Exit
      </button>
    </React.Fragment>
  );
};

export default ExitButtonComponent;
