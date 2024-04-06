// ModificarTarea.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './assets/css/ModificarTarea.css';

function ModificarTarea() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fecha_vencimiento: new Date(),
    id_estado: '',
    id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, fecha_vencimiento: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/modificartarea', {
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
        text: 'Tarea modificada correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al modificar la tarea',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Modificar Tarea</h2>
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
          Descripción:
          <input
            type="text"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de vencimiento:
          <DatePicker
            selected={formData.fecha_vencimiento}
            onChange={handleDateChange}
          />
        </label>
        <br />
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
        <button type="submit">Modificar</button>
      </form>
    </div>
  );
}

export default ModificarTarea;
