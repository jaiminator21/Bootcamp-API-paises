import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [email, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
      //La sesion del navegador se puede ver en inspecionar --> aplicación --> almacenamiento
    } catch (error) {
      setError(true);
      //console.log(error);
    }
  };

  return (
    <>
      <div className="logIn" id="logIn">
        <button>Iniciar sesión</button>
      </div>

      <div className="enregister" id="enregister">
        <button>Registrarse</button>
      </div>

      <div className="Formulario-registro">
        <h1>Login</h1>
        <form onSubmit={login}>
          <label>E-mail</label>
          <input
            type="text"
            value={email}
            onChange={(ev) => {
              setUser(ev.target.value);
            }}
            placeholder="Introduzca su correo electrónico"
            required
          ></input>
          <label>Contraseña</label>
          <input
            type="pasword"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            placeholder="Introduzca su contraseña"
            required
          ></input>
          <button type="submit">Login</button>
          {error && <div>Ha ocurrido un error</div>}
        </form>
      </div>
    </>
  );
};

export default User;
