import { useState, useEffect, createContext } from "react";
import { Auth, User } from "../api";

const userController = new User();
const authController = new Auth();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // este use effect se ejecuta cuando entramos o refrescamos la aplicacion
  useEffect(() => {
    // se crea una funcion anonima autoejecutable para darle "await" al login
    (async () => {
      const accessToken = authController.getAccessToken();
      const refreshToken = authController.getRefreshToken();

      await login(accessToken);

      setLoading(false);
    })();
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

  // mientras loading sea true
  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
