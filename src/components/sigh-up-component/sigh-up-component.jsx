import React, { useRef, useState, useEffect} from 'react';
import FooterComponent from '../footer-component/footer-component.jsx';
import LogoComponent from '../logo-component/logo-component.jsx';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
const SignUpComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      login: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const existingUser = users.find((user) => user.login === newUser.login);

    if (existingUser) {
      setMessage(`Юзер с логином ${newUser.login} уже существует.`);
    } else {
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert(`Юзер с логином ${newUser.login} успешно зарегистрирован.`);
      navigate(AppRoute.ROOT);
    }
  };
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <h1>Регистрация</h1>
        <LogoComponent></LogoComponent>
      </header>
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
        {message && <p>{message}</p>}
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default SignUpComponent;
