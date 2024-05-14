import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setAuthorizationStatus} from '../store/user/user-slicer.js';
import {AuthorizationStatus} from '../const.js';

const getStoredAuthStatus = () => {
  const storedAuthStatus = localStorage.getItem('authStatus');
  return storedAuthStatus ? storedAuthStatus : AuthorizationStatus.NO_AUTH;
};

export const useAuthStatus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedAuthStatus = getStoredAuthStatus();
    dispatch(setAuthorizationStatus(storedAuthStatus));
  }, [dispatch]);
};
