const db = require('../../db');

class Tareas {
    constructor() {
      
    }

    async obtenerListado() {
        try {
            const query = 'SELECT * FROM tareas';
            const result = await db.query(query);
            return {
                message: 'Listado de tareas obtenido exitosamente',
                data: result.rows
            };
        } catch (err) {
            console.error('Error al obtener el listado de tareas:', err);
            return {
                message: 'Error al obtener el listado de tareas',
                data: []
            };
        }
    }

    async guardarTarea(nombre, descripcion, fecha_vencimiento, usuario, id_estado, id_categoria, prioridad) {
        try {
            const query = 'INSERT INTO Tareas (nombre, descripcion, fecha_vencimiento, id_usuario, id_estado, id_categoria, prioridad) VALUES ($1, $2, $3, $4, $5, $6, $7)';
            await db.query(query, [nombre, descripcion, fecha_vencimiento, usuario, id_estado, id_categoria, prioridad]);
            return {
                message: 'Tarea guardado exitosamente'
            };
        } catch (err) {
            console.error('Error al guardar la tarea:', err);
            return {
                message: 'Error al guardar la tarea'
            };
        }
    }
    

async eliminarTarea(id) {
    try {
        const query = 'DELETE FROM tareas WHERE id = $1;';
        await db.query(query, [id]);
        return {
            message: 'Tarea eliminada exitosamente'
        };
    } catch (err) {
        console.error('Error al aliminar la tarea:', err);
        return {
            message: 'Error al eliminar la tarea'
        };
    }
}

async filtrarTarea(estado) {
    try {
        const query = 'SELECT * FROM tareas WHERE id_estado = $1';
        await db.query(query, [estado]);
        return {
            message: 'Tarea completadas:'
        };
    } catch (err) {
        console.error('Error al consultar la tarea completada', err);
        return {
            message: 'Error al consultar la tarea completada'+err
        };
    }
}


async modificarTarea(nombre, descripcion, fecha_vencimiento, estado, id) {
    try {
        const query = 'UPDATE tareas SET nombre = $1, descripcion = $2, fecha_vencimiento = $3, id_estado = $4 WHERE id = $5;';
        await db.query(query, [nombre, descripcion, fecha_vencimiento, estado, id]);
        return {
            message: 'Tarea modificada exitosamente'
        };
    } catch (err) {
        console.error('Error al modificar la tarea:', err);
        return {
            message: 'Error al modificar la tarea'+err
        };
    }
}

       
    async obtenerPorusuario(usuario) {
        try {
            const query = 'SELECT * FROM tareas WHERE usuario = $1';
            const result = await db.query(query, [usuario]);
            if (result.rowCount === 0) {
                return {
                    message: 'Tareas no encontradas',
                    data: null
                };
            } else {
                return {
                    message: 'Tareas obtenidas exitosamente',
                    data: result.rows[0]
                };
            }
        } catch (err) {
            console.error('Error al obtener tareas:', err);
            return {
                message: 'Error al obtener tareas',
                data: null
            };
        }
    }

    async obtenerid(id) {
        try {
            const query = 'SELECT * FROM tareas WHERE id = $1';
            const result = await db.query(query, [id]);
            if (result.rowCount === 0) {
                return {
                    message: 'Tarea no encontrada',
                    data: null
                };
            } else {
                return {
                    message: 'Tarea obtenida exitosamente',
                    data: result.rows[0]
                };
            }
        } catch (err) {
            console.error('Error al obtener tarea', err);
            return {
                message: 'Error al obtener tarea',
                data: null
            };
        }
    }

}


module.exports = Tareas;