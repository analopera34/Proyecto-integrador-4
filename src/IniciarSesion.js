// InicioSesion.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './assets/css/IniciarSesion.css'; // Archivo de estilos CSS

function InicioSesion() {
  const navigate = useNavigate(); // Llama a useNavigate directamente en el componente
  const [formData, setFormData] = useState({
    nombre: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta según sea necesario
      console.log(data);
      Swal.fire({
        title: 'Éxito!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        // Redirigir al formulario de modificar usuario
        navigate('/ListadoTareas');
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al iniciar sesión',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Iniciar Sesión</h2>
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
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default InicioSesion;