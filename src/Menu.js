// Menu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './assets/css/menu.css';

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu">
      <h1 className="app-title">TaskMaster</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuVisible ? 'Cerrar menú' : 'Abrir menú'}
      </button>
      {menuVisible && (
        <ul className="menu-list">
          <li><Link to="/IniciarSesion">Inicia sesión</Link></li>
          <li><Link to="/formulario">Formulario de registro</Link></li>
          <li><Link to="/ModificarUsuario">Modificar Usuario</Link></li>
          <li><Link to="/CambiarContrasena">Modificar Contraseña</Link></li>
          <li><Link to="/CrearTarea">Crear tarea</Link></li>
          <li><Link to="/ModificarTarea">Modificar tarea</Link></li>
          <li><Link to="/EliminarTarea">Eliminar tarea</Link></li>
          <li><Link to="/ListadoTareas">Listado de tareas</Link></li>
          <li><Link to="/FiltrarPorEstado">Mira tus tareas por estado</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
