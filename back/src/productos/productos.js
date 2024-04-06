const db = require('../../db');

class Productos {
    async obtenerListado() {
        try {
            const query = 'SELECT * FROM productos';
            const result = await db.query(query);
            return {
                message: 'Listado de productos obtenido exitosamente',
                data: result.rows
            };
        } catch (err) {
            console.error('Error al obtener el listado de productos:', err);
            return {
                message: 'Error al obtener el listado de productos',
                data: []
            };
        }
    }

    async obtenerPorReferencia(referencia) {
        try {
            const query = 'SELECT * FROM productos WHERE referencia = $1';
            const result = await db.query(query, [referencia]);
            if (result.rowCount === 0) {
                return {
                    message: 'Producto no encontrado',
                    data: null
                };
            } else {
                return {
                    message: 'Producto obtenido exitosamente',
                    data: result.rows[0]
                };
            }
        } catch (err) {
            console.error('Error al obtener el producto:', err);
            return {
                message: 'Error al obtener el producto',
                data: null
            };
        }
    }

    async guardarProducto(nombre, descripcion, precio, referencia) {
        try {
            const query = 'INSERT INTO productos (nombre, descripcion, precio, referencia) VALUES ($1, $2, $3, $4)';
            await db.query(query, [nombre, descripcion, precio, referencia]);
            return {
                message: 'Producto guardado exitosamente'
            };
        } catch (err) {
            console.error('Error al guardar el producto:', err);
            return {
                message: 'Error al guardar el producto'
            };
        }
    }
    
}

module.exports = new Productos();
