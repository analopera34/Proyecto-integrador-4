const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('./src/usuarios/usuario');
const Tareas = require('./src/tareas/tareas');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Configurar body-parser para analizar solicitudes POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Endpoint para obtener el listado de tareas
app.get('/tareas', async (req, res) => {
    const Tarea = new Tareas();
    const response = await Tarea.obtenerListado();
    res.status(200).json(response);
});

// Endpoint para obtener una tareas por su id
app.get('/tareas/:id', async (req, res) => {
    const id = req.params.id;
    const Tarea = new Tareas();
    const response = await Tarea.obtenerid(id);
    res.status(200).json(response);
});


// Endpoint para obtener una tareas por usuario
app.get('/tareas/:id_usuario', async (req, res) => {
    const id_usuario = req.params.id;
    const Tarea = new Tareas();
    const response = await Tarea.obtenerPorusuario(usuario);
    res.status(200).json(response);
});


// Endpoint para guardar una nueva tarea
app.post('/tareas', async (req, res) => {
    const {nombre, descripcion, fecha_vencimiento, id_usuario, id_estado, id_categoria, prioridad} = req.body;
    const Tarea = new Tareas();
    const response = await Tarea.guardarTarea(nombre, descripcion, fecha_vencimiento, id_usuario, id_estado, id_categoria, prioridad);
    res.status(200).json(response);
});

// Endpoint para eliminar una tarea
app.post('/eliminarTarea', async (req, res) => {
    const {id} = req.body;
    const Tarea = new Tareas();
    const response = await Tarea.eliminarTarea(id);
    res.status(200).json(response);
});


// Endpoint para modificar una tarea
app.post('/modificartarea', async (req, res) => {
    const {nombre, descripcion, fecha_vencimiento, id_estado, id} = req.body;
    const Tarea = new Tareas();
    const response = await Tarea.modificarTarea(nombre, descripcion, fecha_vencimiento, id_estado, id);
    res.status(200).json(response);
});



// Endpoint para filtrar tarea por estado
app.post('/filtrarporestado', async (req, res) => {
    const {id_estado} = req.body;
    const Tarea = new Tareas();
    const response = await Tarea.filtrarTarea(id_estado);
    res.status(200).json(response);
});


// Endpoint para iniciar sesión
app.post('/login', async (req, res) => {
    const { nombre, contrasena } = req.body;
    const usuario = new Usuario(nombre, contrasena);
    const response = await usuario.iniciarSesion();
    if (response.login) {
        res.status(200).json(response);
    } else {
        res.status(400).json(response);
    }
});

// Endpoint para cambiar la contraseña del usuario logeado

app.put('/usuarios/contrasena', async (req, res) => {
    const { nombre, contrasena, nuevaContrasena } = req.body;

    // Simulamos la autenticación del usuario
    const usuario = new Usuario(nombre, contrasena);
    const autenticado = await usuario.iniciarSesion();

    if (autenticado.login) {
        const response = await usuario.cambiarContrasena(nuevaContrasena);
        res.status(200).json(response);
    } else {
        res.status(401).json({
            message: 'Usuario no autenticado'
        });
    }
});

// Endpoint para crear un usuario
app.post('/usuarios', async (req, res) => {
    const { nombre, contrasena, email, rol } = req.body;
    const usuario = new Usuario(nombre, contrasena, email, rol);
    const response = await usuario.crearUsuario();
    if (response.message === 'El usuario ya existe, debe ser único') {
        res.status(400).json(response);
    } else {
        res.status(200).json(response);
    }
});


// Endpoint para modificar un usuario
app.post('/modificarUsuario', async (req, res) => {
    const {nombre, contrasena, email, id} = req.body;
    const usuario = new Usuario();
    const response = await usuario.modificarUsuario(nombre, contrasena, email, id);
    res.status(200).json(response);
});

// Endpoint para obtener un usuario por correo
app.get('/obtenerUsuario/:email', async (req, res) => {
    const email = req.params.email;
    const usuario = new Usuario();
    const response = await usuario.obtenerUsuario(email);
    res.status(200).json(response);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});


