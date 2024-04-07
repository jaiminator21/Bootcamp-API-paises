import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const login = async (event) => {
    event.preventDefault();
    const url = "https://node-tickets-chi.vercel.app/user/login"; //Enlace a donde se hace la petición
    try {
      // Se hace peticion a la bbdd con los datos del login
      axios
        .post(url, {
          email,
          password,
        })
        .then((response) =>
          sessionStorage.setItem("token", response.data.data.token)
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
    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setError(true);
      return;
    }

    const url = "https://node-tickets-chi.vercel.app/user/register"; //Enlace a donde se hace la petición
    try {
      // Se hace peticion a la bbdd con los datos del registro
      axios
        .post(url, {
          email,
          password,
        })
        .then((response) =>
          sessionStorage.setItem("token", response.data.data.token)
        );
      //Usamos la sesion del navegador para almacenar el token de forma temporal
      //La sesion del navegador se puede ver en inspeccionar --> aplicación --> almacenamiento
    } catch (error) {
      setError(true);
      console.log(error);
    }
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
      <div className="login_register_buttons">
        <div className="logIn" onClick={showLogin}>
          <button>Iniciar sesión</button>
        </div>

        <div className="enregister" onClick={showRegister}>
          <button>Registrarse</button>
        </div>
      </div>

      {loginVisible && (
        <div className="formulario_login">
          <h1>Login</h1>
          <form onSubmit={login}>
            <label>E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Introduzca su correo electrónico"
              required
            ></input>
            <label>Contraseña:</label>
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
        <div className="formulario_registro">
          <h1>Registrarse</h1>
          <form onSubmit={register}>
            <label>E-mail:</label>
            <input
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Introduzca su correo electrónico"
              required
            ></input>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Introduzca su contraseña"
              required
            ></input>
            <label>Confirmar contraseña:</label>
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
