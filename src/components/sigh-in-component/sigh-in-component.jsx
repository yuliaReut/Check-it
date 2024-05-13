import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthorizationStatus } from '../../store/user/user-slicer.js';
import { AppRoute } from '../../const';
const SighInComponent = () => {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const userData = {
      login: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (storedUser) =>
        storedUser.login === userData.login &&
        storedUser.password === userData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      localStorage.setItem('authStatus', 'AUTH');
      dispatch(setAuthorizationStatus('AUTH'));
      console.log('second');
      navigate(AppRoute.ROOT);
    } else {
      alert('Неверный логин или пароль');
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };


  return (
    <div className="user-page">
       <header className="page-header user-page__head">
       <h1>Вход</h1>
       <LogoComponent></LogoComponent>
       </header>

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
            <button className="sign-in__btn" type="submit" >
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
