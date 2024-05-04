import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/api-actions';
import browserHistory from '../../browser-history';
import FooterComponent from '../footer-component/footer-component';
import HeaderComponent from '../header-component/header-component';
const SighInComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    }),
    );
    browserHistory.push(`/`);
  };
  return (
    <div className="user-page">
<HeaderComponent text={'Log in'}></HeaderComponent>

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
              Sign in
            </button>
          </div>
        </form>
      </div>
      <FooterComponent></FooterComponent>

    </div>

  );
};

export default SighInComponent;
