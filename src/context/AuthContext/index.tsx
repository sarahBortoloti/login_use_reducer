import React, { ReactNode, useReducer } from "react";
import { AuthReducer } from "../../reducers";
import { logout, signIn, validateToken } from "../../reducers/actions";
import { INITIAL_STATE_LOGIN } from "../../reducers/constants";


type AuthProviderProps = {
  state: StateProps;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  handleValidateToken: () => void;
}


interface AuthContextProps {
  children: ReactNode;
}

type StateProps = {
  email: string;
  token: string;
  loading: boolean;
  error?: unknown;
}

export const AuthContext = React.createContext({} as AuthProviderProps);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE_LOGIN);

  const handleLogin = async (email: string, password: string) => {
    await signIn(dispatch, { email, password });
  }

  const handleLogout = async () => {
    await logout(dispatch);
  };


  const handleValidateToken = async () => {
    await validateToken(dispatch);
  }

  return (
    <AuthContext.Provider
      value={{
        state,
        handleLogin,
        handleLogout,
        handleValidateToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
