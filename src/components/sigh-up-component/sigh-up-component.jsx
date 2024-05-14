import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import {useUserRegistration} from '../../hooks/use-user-signup.js';
import {AppRoute} from '../../const';
const SignUpComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const {registerUser, isUserExists} = useUserRegistration();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      login: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (isUserExists(newUser.login)) {
      setMessage(`Юзер с логином ${newUser.login} уже существует.`);
    } else {
      registerUser(newUser);
      alert(`Юзер с логином ${newUser.login} успешно зарегистрирован.`);
      navigate(AppRoute.ROOT);
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <h1>Регистрация</h1>
        <LogoComponent />
      </header>
      <div className="sign-in user-page__content">
        <form action="" method="post" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                ref={emailRef}
                data-testid="email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                ref={passwordRef}
                data-testid="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit}>
              Отправить
            </button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
      <FooterComponent />
    </div>
  );
};

export default SignUpComponent;
