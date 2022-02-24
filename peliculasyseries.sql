--Una empresa de venta de peliculas y series necesita un software en el que se registren los usuarios que arriendan sus productos. 
--Un usuario puede arrendar una serie o una película. Crear un mantenedor(CRUD) que permita asociar a los usuarios con los productos que arriendan. 
--Para un usuario se necesita guardar el nombre, email e indicar que producto ha arrendado. 
--Para la tabla película se necesita guardar el título, género, precio de arriendo y duración de cada una. 
--Para la tabla serie se necesita guardar el título, género, precio de arriendo y temporadas.
--Poblar la BD con 3 películas y 3 series (no es necesario que exista un CRUD para esto).
--No es necesario hacer un login para esto. Se considera solo el desarrollo de la funcionalidad que podría usar un admin en algún momento. 
CREATE DATABASE peliculasyseries;

CREATE TABLE usuarios (
    id SERIAL,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(25) NOT NULL,
    producto VARCHAR(25),
    PRIMARY KEY (id)
);

CREATE TABLE peliculas (
    id SERIAL,
    titulo VARCHAR(25),
    genero VARCHAR(25),
    precio_de_arriendo VARCHAR(25),
    duracion VARCHAR(25)
);

CREATE TABLE series (
    id SERIAL,
    titulo VARCHAR(25),
    genero VARCHAR(25),
    precio_de_arriendo VARCHAR(25),
    temporadas VARCHAR(25)
);

CREATE TABLE prestamos (
    id_arriendo INT,
    tipo_arriendo VARCHAR(25),
    id_usuario REFERENCES usuarios (id)
);


--npm init -y
--npm i --save pg
--npm install express --save