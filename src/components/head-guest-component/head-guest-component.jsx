import React from 'react';
import {Link} from 'react-router-dom';

const HeadGuestComponent = () => {
  return (
    <div className="user-block">
      <Link to={`/Check-it/signin`} className="user-block__link">
        Вход
      </Link>
      <Link to={`/Check-it/signup`} className="user-block__link">
        Регистрация
      </Link>
    </div>
  );
};

export default HeadGuestComponent;
