import React, { type ReactNode, useContext, useState } from 'react';
import type { User } from '../types/types.ts';

type AuthContextType = {
  user: User;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = (user: User, token: string) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('access_token', token);
    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);