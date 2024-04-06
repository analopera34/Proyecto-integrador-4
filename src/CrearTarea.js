// CrearTarea.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './assets/css/CrearTarea.css'; // Archivo de estilos CSS


function CrearTarea() {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    fecha_vencimiento: new Date(),
    id_usuario: '',
    id_estado: '',
    id_categoria: '',
    prioridad: ''
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

    fetch('http://localhost:3000/tareas', {
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
        text: 'Tarea creada correctamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Hubo un error al crear la tarea',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  };

  return (
    <div className="formulario">
      <h2>Crear Tarea</h2>
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
          ID Usuario:
          <input
            type="text"
            name="id_usuario"
            value={formData.id_usuario}
            onChange={handleChange}
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
          ID Categoría:
          <input
            type="text"
            name="id_categoria"
            value={formData.id_categoria}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prioridad:
          <input
            type="text"
            name="prioridad"
            value={formData.prioridad}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default CrearTarea;
