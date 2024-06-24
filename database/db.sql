CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(30) NULL,
    nombre VARCHAR(300) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    codigo VARCHAR(30) NULL,
    nombre VARCHAR(300) NULL,
    email VARCHAR(300) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO product(codigo, nombre)
    VALUES('PRD-0001-025-148', 'Oreo'),
    ('PRD-0001-025-150', 'Chocman'),
    ('PRD-0001-025-140', 'Cremositas');


INSERT INTO client(codigo, nombre, email)
    VALUES('CLI-0025-01458', 'Maria Fuentes','maria.fuente@gmail.com'),
    ('CLI-0025-01458', 'Luisa Quiroga','luisa.quiroga@gmail.com'),
    ('CLI-0025-01458', 'Karla Manzilla','karla.manzilla@gmail.com');
