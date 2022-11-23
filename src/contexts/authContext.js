import { useState, useEffect, createContext } from "react";
import { User } from "../api";

const userController = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    //comprobar si el usuario esta logeado o no
  }, []);

  const login = async (accessToken) => {
    try {
      const response = await userController.getMe(accessToken);
      // Para eliminar la contraseña de getMe
      delete response.password;

      //console.log(response);
      setToken(response);
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
