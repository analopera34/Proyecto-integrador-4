
-- Estructura de tabla para la tabla `acciones`

CREATE TABLE acciones (
  id SERIAL PRIMARY KEY,
  accion VARCHAR(255) NOT NULL
);

-- Volcado de datos para la tabla `acciones`

INSERT INTO acciones (accion) VALUES
('Inicio de sesión'),
('Cambio de contraseña'),
('Creación de usuario'),
('Asignación de rol'),
('Modificación de datos de usuario gestor'),
('Modificación de datos de administrador'),
('Crear productos'),
('Modificar productos'),
('Listar productos'),
('Crear Cotizaciones'),
('Listar clientes');

-- Estructura de tabla para la tabla `clientes`

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  telefono VARCHAR(20),
  direccion VARCHAR(255),
  creado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Estructura de tabla para la tabla `cotizaciones`

CREATE TABLE cotizaciones (
  id SERIAL PRIMARY KEY,
  numeracion VARCHAR(50) NOT NULL,
  cliente_id INT NOT NULL,
  usuario_id INT NOT NULL,
  precio_envio DECIMAL(10,2) NOT NULL,
  descuento DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  enviado BOOLEAN DEFAULT FALSE,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Estructura de tabla para la tabla `productos`

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  referencia VARCHAR(50)
);

-- Volcado de datos para la tabla `productos`

INSERT INTO productos (nombre, descripcion, precio, creado_en, modificado_en, referencia) VALUES
('Martillo', 'Martillo de acero forjado con mango de madera. Ideal para trabajos de construcción y carpintería.', 25000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '123'),
('Destornillador', 'Destornillador con punta magnética y mango ergonómico. Ideal para ajustar tornillos de diferentes tamaños.', 15000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '456'),
('Taladro eléctrico', 'Taladro eléctrico de alta velocidad con cable de alimentación. Incluye accesorios para perforar en madera, metal y concreto.', 120000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '789'),
('Sierra circular', 'Sierra circular portátil con hoja de acero de alta velocidad. Perfecta para cortar madera y materiales similares.', 180000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '234'),
('Pintura blanca', 'Pintura acrílica blanca de alta calidad para uso en interiores y exteriores. Acabado mate duradero.', 50000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '567'),
('Lámpara de trabajo', 'Lámpara portátil con base magnética y gancho para colgar. Ideal para iluminar áreas de trabajo.', 35000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '890'),
('Cinta métrica', 'Cinta métrica de acero con resorte. Marcas claras y precisas en centímetros y pulgadas.', 8000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '321'),
('Escalera plegable', 'Escalera plegable de aluminio resistente. Altura ajustable y pies antideslizantes.', 70000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '654'),
('Brochas de pintura', 'Set de brochas de pintura de diferentes tamaños. Cerdas suaves y duraderas para una aplicación uniforme de la pintura.', 25000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '987'),
('Candado de seguridad', 'Candado de acero resistente con cuerpo de latón. Incluye juego de llaves.', 30000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '234'),
('Pala de jardinería', 'Pala resistente con mango de madera. Ideal para cavar y mover tierra y materiales de jardinería.', 35000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '876'),
('Grifo de agua', 'Grifo de agua para uso en exteriores. Construcción de metal resistente a la corrosión.', 45000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '543'),
('Cinta adhesiva', 'Cinta adhesiva resistente y duradera para uso en reparaciones y proyectos de bricolaje.', 10000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '210'),
('Cerradura de puerta', 'Cerradura de puerta con llave de seguridad. Ideal para puertas de entrada principales.', 60000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '999'),
('Llave inglesa ajustable', 'Llave inglesa de acero cromado con mandíbula ajustable. Para apretar y aflojar tuercas y pernos.', 20000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '777'),
('Herramienta multiusos', 'Herramienta multiusos con cuchilla plegable, alicates y destornillador. Ideal para emergencias.', 40000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '888'),
('Cable eléctrico', 'Cable eléctrico resistente para uso en interiores y exteriores. Disponible en diferentes longitudes.', 15000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '666'),
('Clavos de construcción', 'Clavos de acero galvanizado para uso en construcción y carpintería. Disponibles en diferentes tamaños.', 5000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '333'),
('Tubo de pegamento', 'Tubo de pegamento adhesivo fuerte y duradero. Ideal para unir materiales diversos.', 12000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '111'),
('Cadena de acero', 'Cadena de acero galvanizado resistente para uso en aplicaciones de seguridad y sujeción.', 25000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '444'),
('Llave de tubo', 'Llave de tubo ajustable de acero cromado. Para apretar y aflojar tuercas y pernos de diferentes tamaños.', 30000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '555'),
('Pegamento de contacto', 'Pegamento de contacto de alta resistencia. Para unir superficies de madera, metal y plástico.', 18000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '222'),
('Alambre de acero', 'Alambre de acero galvanizado para uso en trabajos de construcción y reparaciones.', 10000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '999'),
('Hacha de carpintero', 'Hacha de carpintero con cabeza de acero forjado y mango de madera. Ideal para trabajos de corte en madera.', 35000.00, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '888');

-- Estructura de tabla para la tabla `productos_cotizaciones`

CREATE TABLE productos_cotizaciones (
  id SERIAL PRIMARY KEY,
  cotizacion_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  detalle TEXT,
  precio DECIMAL(10,2) NOT NULL
);

-- Estructura de tabla para la tabla `usuarios`

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  rol VARCHAR(255) NOT NULL,
  intentos_fallidos INT DEFAULT 0,
  bloqueado_hasta TIMESTAMPTZ,
  creado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modificado_en TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Volcado de datos para la tabla `usuarios`

INSERT INTO usuarios (nombre, email, password, rol, intentos_fallidos, bloqueado_hasta, creado_en, modificado_en) VALUES
('Admin', 'admin@example.com', 'password', 'administrador', 0, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Gestor1', 'gestor1@example.com', 'password', 'gestor', 0, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Gestor2', 'gestor2@example.com', 'password', 'gestor', 0, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Estructura de tabla para la tabla `usuarios_acciones`

CREATE TABLE usuarios_acciones (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL,
  accion_id INT NOT NULL,
  fecha TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  acceso BOOLEAN NOT NULL DEFAULT FALSE
);

-- Volcado de datos para la tabla `usuarios_acciones`

INSERT INTO usuarios_acciones (usuario_id, accion_id, fecha, acceso) VALUES
(1, 1, CURRENT_TIMESTAMP, TRUE),
(1, 2, CURRENT_TIMESTAMP, TRUE),
(1, 3, CURRENT_TIMESTAMP, TRUE),
(1, 4, CURRENT_TIMESTAMP, TRUE),
(1, 5, CURRENT_TIMESTAMP, TRUE),
(1, 6, CURRENT_TIMESTAMP, TRUE),
(1, 7, CURRENT_TIMESTAMP, TRUE),
(1, 8, CURRENT_TIMESTAMP, TRUE),
(1, 9, CURRENT_TIMESTAMP, TRUE),
(1, 10, CURRENT_TIMESTAMP, TRUE),
(1, 11, CURRENT_TIMESTAMP, TRUE),
(2, 1, CURRENT_TIMESTAMP, TRUE),
(2, 2, CURRENT_TIMESTAMP, TRUE),
(2, 3, CURRENT_TIMESTAMP, FALSE),
(2, 4, CURRENT_TIMESTAMP, TRUE),
(2, 5, CURRENT_TIMESTAMP, FALSE),
(2, 6, CURRENT_TIMESTAMP, FALSE),
(2, 7, CURRENT_TIMESTAMP, TRUE),
(2, 8, CURRENT_TIMESTAMP, TRUE),
(2, 9, CURRENT_TIMESTAMP, TRUE),
(2, 10, CURRENT_TIMESTAMP, TRUE),
(2, 11, CURRENT_TIMESTAMP, TRUE),
(3, 1, CURRENT_TIMESTAMP, TRUE),
(3, 2, CURRENT_TIMESTAMP, TRUE),
(3, 3, CURRENT_TIMESTAMP, FALSE),
(3, 4, CURRENT_TIMESTAMP, TRUE),
(3, 5, CURRENT_TIMESTAMP, FALSE),
(3, 6, CURRENT_TIMESTAMP, FALSE),
(3, 7, CURRENT_TIMESTAMP, TRUE),
(3, 8, CURRENT_TIMESTAMP, TRUE),
(3, 9, CURRENT_TIMESTAMP, TRUE),
(3, 10, CURRENT_TIMESTAMP, TRUE),
(3, 11, CURRENT_TIMESTAMP, TRUE);

ALTER TABLE usuarios ADD CONSTRAINT nombre_unico UNIQUE (nombre);


CREATE TABLE IF NOT EXISTS categorias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS estado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tareas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(300) NOT NULL,
    descripcion TEXT,
    fecha_vencimiento DATE,
    id_estado INTEGER,
    id_categoria INTEGER,
	prioridad VARCHAR(50),
    id_usuario INTEGER,
    FOREIGN KEY (id_categoria) REFERENCES categorias (id),
	FOREIGN KEY (id_estado) REFERENCES estado (id),
	FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
);

INSERT INTO categorias (nombre) VALUES ('trabajo');
INSERT INTO categorias (nombre) VALUES ('hogar');
INSERT INTO categorias (nombre) VALUES ('salud');
INSERT INTO categorias (nombre) VALUES ('ocio');
INSERT INTO categorias (nombre) VALUES ('familia');
INSERT INTO categorias (nombre) VALUES ('otros');

INSERT INTO estado (nombre) VALUES ('completado');
INSERT INTO estado (nombre) VALUES ('pendiente');
INSERT INTO estado (nombre) VALUES ('en progreso');

