import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  email: '',
  token: '',
  isUserLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login(email) {},
  logout() {},
});
AuthContext.displayName = 'Auth';

export default function AuthProvider(props) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const isUserLoggedIn = !!token;

  function login() {}

  function logout() {}

  const ctx = {
    token: token,
    email: email,
    login: login,
    logout: logout,
    isUserLoggedIn: isUserLoggedIn,
  };
  return (
    <AuthContext.Provider value={ctx}>{props.children}</AuthContext.Provider>
  );
}

// custom hook
// turi prasideti zodeliu 'use'
// tiesiog funkcija kuri gali naudoti hooks
// daznai grazina reiksme

export function useAuth() {
  return useContext(AuthContext);
}
