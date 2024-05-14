import {AuthorizationStatus} from '../const';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'user/setAuthorizationStatus':
      const authStatus = action.payload;
      if (authStatus === AuthorizationStatus.NO_AUTH) {
        alert(`Пожалуйста, зайдите как пользователь, чтобы получить полный функционал`);
      }

      break;
    case 'user/logout':
      alert(`Заходите еще`);
      break;
    default:
      break;
  }

  return next(action);
};

export default authMiddleware;
