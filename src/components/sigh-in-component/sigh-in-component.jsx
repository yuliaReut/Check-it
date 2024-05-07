import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterComponent from '../footer-component/footer-component.jsx';
import HeaderComponent from '../header-component/header-component.jsx';
import { AppRoute } from '../../const';
const SighInComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userData = {
      login: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Получаем данные зарегистрированного пользователя из localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.login === userData.login &&
      storedUser.password === userData.password
    ) {
      // Данные верны, перенаправляем на главную страницу
      navigate(AppRoute.ROOT);
    } else {
      // Данные неверны, выводим сообщение об ошибке
      alert('Неверный логин или пароль');
    }
  };

  return (
    <div className="user-page">
      <HeaderComponent text={'Вход'}></HeaderComponent>
      <div className="sign-in user-page__content">
        <form action="" method="post" className="sign-in__form" onSubmit={handleSubmit}>
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
            <button className="sign-in__btn" type="submit">
              Вход
            </button>
          </div>
        </form>
      </div>
      <FooterComponent></FooterComponent>
    </div>

  );
};

export default SighInComponent;
