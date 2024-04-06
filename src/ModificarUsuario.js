// ModificarUsuario.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './assets/css/ModificarUsuario.css';

function ModificarUsuario() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/modificarUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        contrasena: formData.contrasena,
        email: formData.correo,
        id: formData.id
      })
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        title: 'Éxito!',
        text: 'Usuario modificado correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al modificar el usuario',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Modificar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Id:
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Modificar</button>
      </form>
    </div>
  );
}

export default ModificarUsuario;
