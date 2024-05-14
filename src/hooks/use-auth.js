import {useSelector} from 'react-redux';

import {getAuthStatusSelector} from '../selectors/selectors.js';
const useAuth = () => {
  const authStatus = useSelector(getAuthStatusSelector);
  return authStatus;
};

export default useAuth;
