// EliminarTarea.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './assets/css/EliminarTarea.css'; // Archivo de estilos CSS

function EliminarTarea() {
  const [formData, setFormData] = useState({
    id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/eliminarTarea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      Swal.fire({
        title: 'Éxito!',
        text: 'Tarea eliminada correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al eliminar la tarea',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Eliminar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID Tarea:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Eliminar</button>
      </form>
    </div>
  );
}

export default EliminarTarea;
