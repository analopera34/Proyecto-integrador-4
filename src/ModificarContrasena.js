// CambiarContrasena.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './assets/css/CambiarContrasena.css'; // Archivo de estilos CSS

function ModificarContrasena() {
  const [formData, setFormData] = useState({
    nombre: '',
    contrasena: '',
    nuevaContrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/usuarios/contrasena', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        contrasena: formData.contrasena,
        nuevaContrasena: formData.nuevaContrasena
      })
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        title: 'Éxito!',
        text: 'Contraseña modificada correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al modificar la contraseña' + error,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Cambiar Contraseña</h2>
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
          Contraseña actual:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nueva Contraseña:
          <input
            type="password"
            name="nuevaContrasena"
            value={formData.nuevaContrasena}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Modificar</button>
      </form>
    </div>
  );
}

export default ModificarContrasena;
