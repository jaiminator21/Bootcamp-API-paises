import React, { useState } from 'react';

const Form = () => {
  const initialState = {
    nombre: "",
    email: "",
    pais: "",
    interes: "",
  };

  const [estado, setEstado] = useState(initialState);

  const escucharInput = (ev) => {
    const { id, value } = ev.target;
    setEstado({ ...estado, [id]: value });
  };

  const submit = async (event) => {
    event.preventDefault();

    try {
      // Envío de la información del formulario al backend para enviar el correo electrónico
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(estado)
      });

      if (response.ok) {
        // El correo electrónico se envió correctamente, puedes mostrar un mensaje de éxito o realizar alguna acción adicional
        console.log('Correo electrónico enviado con éxito');
      } else {
        // Hubo un error al enviar el correo electrónico, puedes manejarlo aquí
        console.error('Error al enviar el correo electrónico');
      }
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
    }

    // Limpia el estado del formulario después de enviar el correo electrónico
    setEstado(initialState);
  };

  return (
    <div className='form_main_div'>
      <h2 className='form_title'>Formulario de Contacto</h2>
      <form onSubmit={submit} className='form'>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          placeholder='Introduzca tu nombre'
          value={estado.nombre}
          onChange={escucharInput}
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          placeholder='Introduzca tu correo electrónico'
          value={estado.email}
          onChange={escucharInput}
        />
        <label htmlFor="pais">País de interés:</label>
        <input
          type="text"
          id="pais"
          placeholder='¿Sobre qué país desea recibir información?'
          value={estado.pais}
          onChange={escucharInput}
        />
        <label htmlFor="interes">Interés:</label>
        <input
          type="text"
          id="interes"
          placeholder='¿Qué le interesa saber de ese país?'
          value={estado.interes}
          onChange={escucharInput}
        />
        <button type="submit">Enviar solicitud de información</button>
      </form>
    </div>
  );
};

export default Form;


