import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    //comprobar si el usuario esta logeado o no
  }, []);

  const login = async (accessToken) => {
    console.log("Login Context");
    console.log(accessToken);
  };

  const data = {
    accessToken: token,
    user,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
