import {useState, useEffect} from 'react';

export const useUserRegistration = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const isUserExists = (login) => {
    return users.some((user) => user.login === login);
  };

  const registerUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return {registerUser, isUserExists};
};
