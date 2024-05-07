import React, { useRef } from 'react';
import FooterComponent from '../footer-component/footer-component.jsx';
import HeaderComponent from '../header-component/header-component.jsx';
import { useNavigate } from 'react-router-dom';
import {AppRoute} from '../../const';
const SignUpComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
      login: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Сохранение данных пользователя в localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    // После успешной регистрации перенаправляем на главную страницу
    navigate(AppRoute.ROOT);
  };
  return (
    <div className="user-page">
      <HeaderComponent text={'Регистрация'}></HeaderComponent>
      <div className="sign-in user-page__content">
        <form action="" method="post" className="sign-in__form" >
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
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default SignUpComponent;
