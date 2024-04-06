import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/css/App.css'; 
import './assets/css/menu.css'; 
import Formulario from './Formulario';
import ModificarUsuario from './ModificarUsuario';
import CambiarContrasena from './ModificarContrasena';
import CrearTarea from './CrearTarea';
import ModificarTarea from './ModificarTarea';
import EliminarTarea from './EliminarTarea';
import FiltrarPorEstado from './FiltrarPorEstado';
import IniciarSesion from './IniciarSesion';
import ListadoTareas from './ListadoTareas';

import Menu from './Menu';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/modificarusuario" element={<ModificarUsuario />} />
          <Route path="/cambiarcontrasena" element={<CambiarContrasena />} />
          <Route path="/CrearTarea" element={<CrearTarea />} />
          <Route path="/ModificarTarea" element={<ModificarTarea />} />
          <Route path="/EliminarTarea" element={<EliminarTarea />} />
          <Route path="/FiltrarPorEstado" element={<FiltrarPorEstado />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/ListadoTareas" element={<ListadoTareas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
