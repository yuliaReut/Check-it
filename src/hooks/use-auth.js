import { useSelector } from 'react-redux';

const useAuth = () => {
  const authStatus = useSelector((state) => state.USER.authStatus);
  return authStatus;
};

export default useAuth;
