// FiltrarPorEstado.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './assets/css/Filtrar-por-estado.css'; // Archivo de estilos CSS

function FiltrarPorEstado() {
  const [formData, setFormData] = useState({
    id_estado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/filtrarporestado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        id_estado: formData.id_estado,
      
    })
    })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta según sea necesario
      console.log(data);
      Swal.fire({
        title: 'Éxito!',
        text: 'Este es el estado de sus tareas',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al filtrar por estado',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Filtrar Por Estado</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID Estado:
          <input
            type="text"
            name="id_estado"
            value={formData.id_estado}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Filtrar</button>
      </form>
    </div>
  );
}

export default FiltrarPorEstado;
