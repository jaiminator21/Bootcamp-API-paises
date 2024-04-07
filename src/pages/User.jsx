import React, { useState } from "react";
import axios from "axios";

const User = ({setLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    const login_URL = "https://node-tickets-nu.vercel.app/user/login"; //Enlace a donde se hace la petición
    try {
      // Se hace peticion a la bbdd con los datos del login
      axios
        .post(login_URL, {
          email,
          password,
        })
        .then((response) =>
        setLogin({
          ...login,
          email: response.data.data.user.email,
          token: response.data.data.token,
        })

        );
      //Usamos la sesion del navegador para almacenar el token de forma temporal
      //La sesion del navegador se puede ver en inspeccionar --> aplicación --> almacenamiento
    } catch (error) {
      setError(true);
      console.log(error);
    }
   
  };

  const register = async (event) => {
    event.preventDefault();
    console.log("entro en register");
    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setError(true);
      console.log(password, confirmPassword);

    }

    const register_URL = "https://node-tickets-nu.vercel.app/user/register"; //Enlace a donde se hace la petición
    try {
      axios
        .post(register_URL, {
          email,
          password,
        })
        .then((response) =>
          console.log(response.data)
        );
    } catch (error) {
      setError(true);
      console.log("Register",error);
    }
    setLoginVisible(true);
    setRegisterVisible(false);
  };

  const showLogin = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
  };

  const showRegister = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  return (
    <>
      <div className="logIn" onClick={showLogin}>
        <button>Iniciar sesión</button>
      </div>

      <div className="enregister" onClick={showRegister}>
        <button>Registrarse</button>
      </div>

      {loginVisible && (
        <div className="Formulario-registro">
          <h1>Login</h1>
          <form onSubmit={login}>
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Introduzca su correo electrónico"
              required
            ></input>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Introduzca su contraseña"
              required
            ></input>
            <button type="submit">Login</button>
            {error && <div>Ha ocurrido un error</div>}
          </form>
        </div>
      )}

      {registerVisible && (
        <div className="Formulario-registro">
          <h1>Registrarse</h1>
          <form onSubmit={register}>
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Introduzca su correo electrónico"
              required
            ></input>
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Introduzca su contraseña"
              required
            ></input>
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              placeholder="Confirme su contraseña"
              required
            ></input>
            <button type="submit">Registrarse</button>
            {error && <div>Ha ocurrido un error</div>}
          </form>
        </div>
      )}
    </>
  );
};

export default User;

