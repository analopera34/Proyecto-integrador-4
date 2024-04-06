import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/css/App.css'; 
import './assets/css/menu.css'; 
import Menu from './Menu';



function Formulario() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    correo: '',
    contraseña: '',
    rol: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/Usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: formData.nombre,
        contrasena: formData.contraseña,
        email: formData.correo,
        rol: formData.rol
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      // Aquí puedes manejar la respuesta del servidor, por ejemplo mostrar un mensaje de éxito
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      // Aquí puedes manejar el error, por ejemplo mostrar un mensaje de error al usuario
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Formulario de Registro</h1>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-label">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Correo electrónico:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Contraseña:
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <label className="form-label">
            Rol:
            <input
              type="text"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="form-input"
            />
          </label>
          <br />
          <button type="submit" className="form-button">Enviar</button>
        </form>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Formulario;
