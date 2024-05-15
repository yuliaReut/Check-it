import {AuthorizationStatus} from '../const';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'user/setAuthorizationStatus':
      const authStatus = action.payload;
      if (authStatus === AuthorizationStatus.NO_AUTH) {
        console.log(`Пожалуйста, зайдите как пользователь, чтобы получить полный функционал`);
      }

      break;
    case 'user/logout':
      console.log(`Заходите еще`);
      break;
    default:
      break;
  }

  return next(action);
};

export default authMiddleware;
