// ListadoTareas.js
import React, { useEffect, useState } from 'react';
import './assets/css/ListadoTareas.css'; // Importa el archivo de estilos CSS

function ListadoTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tareas')
      .then(response => response.json())
      .then(data => {
        setTareas(data.data);
      })
      .catch(error => {
        console.error('Error al obtener las tareas:', error);
      });
  }, []);

  return (
    <div className="listado-tareas">
      <h2>Listado de Tareas</h2>
      <table className="tabla-tareas">
        <thead>
          <tr>
            <th className="tabla-cabecera">Nombre</th>
            <th className="tabla-cabecera">Descripción</th>
            <th className="tabla-cabecera">Fecha de Vencimiento</th>
            <th className="tabla-cabecera">ID Usuario</th>
            <th className="tabla-cabecera">ID Estado</th>
            <th className="tabla-cabecera">ID Categoría</th>
            <th className="tabla-cabecera">Prioridad</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map(tarea => (
            <tr key={tarea.id} className="tabla-fila">
              <td className="tabla-dato">{tarea.nombre}</td>
              <td className="tabla-dato">{tarea.descripcion}</td>
              <td className="tabla-dato">{tarea.fecha_vencimiento}</td>
              <td className="tabla-dato">{tarea.id_usuario}</td>
              <td className="tabla-dato">{tarea.id_estado}</td>
              <td className="tabla-dato">{tarea.id_categoria}</td>
              <td className="tabla-dato">{tarea.prioridad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoTareas;
