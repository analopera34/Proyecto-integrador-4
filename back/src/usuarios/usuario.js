const db = require('../../db');

class Usuario {
    constructor(nombre, contrasena, email, rol) {
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.email = email;
        this.rol = rol;
    }

    async iniciarSesion() {
        try {
            const query = 'SELECT * FROM usuarios WHERE nombre = $1 AND contrasena = $2';
            const result = await db.query(query, [this.nombre, this.contrasena]);
            if (result.rowCount === 1) {
                return {
                    message: 'Inicio de sesión exitoso',
                    login: true
                };
            } else {
                return {
                    message: 'Nombre de usuario o contraseña incorrectos',
                    login: false
                };
            }
        } catch (err) {
            console.error('Error al iniciar sesión:', err);
            return {
                message: 'Error al iniciar sesión'+ err,
                login: false
            };
        }
    }

    async cambiarContrasena(nuevaContrasena) {
        try {
            const query = 'UPDATE usuarios SET contrasena = $1 WHERE nombre = $2';
            await db.query(query, [nuevaContrasena, this.nombre]);
            return {
                message: 'Contraseña cambiada exitosamente'
            };
        } catch (err) {
            console.error('Error al cambiar la contraseña:', err);
            return {
                message: 'Error al cambiar la contraseña'
            };
        }
    }

    async crearUsuario() {
        try {
            // Validar si el usuario ya existe
            const queryValidacion = 'SELECT * FROM usuarios WHERE nombre = $1 ';
            const result = await db.query(queryValidacion, [this.nombre]);
            if (result.rowCount > 0) {
                return {
                    message: 'El usuario ya existe, debe ser único'
                };
            }
    
            // Insertar el usuario si no existe
            const query = 'INSERT INTO usuarios (nombre, contrasena, email, rol) VALUES ($1, $2, $3, $4)';
            await db.query(query, [this.nombre, this.contrasena, this.email, this.rol]);
            return {
                message: 'Usuario creado exitosamente'
            };
        } catch (err) {
            console.error('Error al crear usuario:', err);
            return {
                message: 'Error al crear usuario'
            };
        }
    }

    async obtenerUsuario(email) {
        try {
            const query = 'SELECT * FROM usuarios WHERE email = $1';
            const result = await db.query(query, [email]);
            if (result.rowCount === 0) {
                return {
                    message: 'Usuario no encontrado',
                    data: null
                };
            } else {
                return {
                    message: 'Usuario obtenido exitosamente',
                    data: result.rows[0]
                };
            }
        } catch (err) {
            console.error('Error al obtener usuario:', err);
            return {
                message: 'Error al obtener usuario'+err,
                data: null
            };
        }
    }

    async modificarUsuario(nombre, contrasena, email, id) {
        try {
            const query = 'UPDATE usuarios SET nombre = $1, contrasena = $2, email = $3  WHERE id = $4;';
            await db.query(query, [nombre, contrasena, email, id]);
            return {
                message: 'Usuario modificada exitosamente'
            };
        } catch (err) {
            console.error('Error al modificar el Usuario:', err);
            return {
                message: 'Error al modificar la tarea'+err
            };
        }
    }
    
}



module.exports = Usuario;
