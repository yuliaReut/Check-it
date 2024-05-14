export const useUserLogin = () => {
  const loginUser = (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (storedUser) =>
        storedUser.login === userData.login && storedUser.password === userData.password,
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      localStorage.setItem('authStatus', 'AUTH');
    }

    return !!user;
  };

  return {loginUser};
};
