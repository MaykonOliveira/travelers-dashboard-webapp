import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
}

interface AuthData {
  token: string;
  user: User;
}

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: AuthCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@Travelers:token');
    const user = localStorage.getItem('@Travelers:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.post<AuthData>('/sessions', {
    //   email,
    //   password,
    // });

    // let { token, user } = response.data;

    // Remover isso depois dos testes
    const token = 'd51qw651d65wq1dwq651dw6q51';
    const user = {
      id: '115151115151wdqdwqdwq',
      name: 'Maykon A. Oliveira',
    };

    localStorage.setItem('@Travelers:token', token);
    localStorage.setItem('@Travelers:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Travelers:token');
    localStorage.removeItem('@Travelers:user');
    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
