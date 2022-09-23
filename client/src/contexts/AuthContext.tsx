import React, { createContext } from 'react';

export const AuthContext = createContext('');

const AuthContextProvider = () => {
  return <AuthContext.Provider value={'hello, user'} />;
};

export default AuthContextProvider;
