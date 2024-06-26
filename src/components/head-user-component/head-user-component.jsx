import React from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';

import {getCurrentUser} from '../../utils/utils';

const HeadUserComponent = ({onExit}) => {
  let user = getCurrentUser();

  return (
    <div className="user-block">
      <div className="user-block">{user ? user.login : ''}</div>
      <Link to={`/Check-it/favorites`} className="user-block__link">
        Избранное
      </Link>
      <Link to={`/Check-it/history`} className="user-block__link">
        История
      </Link>
      <button className="user-block__button" type="button" onClick={onExit}>
        Выход
      </button>
    </div>
  );
};
HeadUserComponent.propTypes = {
  onExit: PropTypes.func.isRequired,
};
export default HeadUserComponent;
