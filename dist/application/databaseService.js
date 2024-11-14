"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPeliculas = exports.guardarPelicula = exports.listarPersonajes = exports.guardarPersonaje = void 0;
const databaseClient_1 = __importDefault(require("../infrastructure/databaseClient"));
const guardarPersonaje = async (personaje) => {
    const connection = await databaseClient_1.default.getConnection();
    try {
        await connection.execute('INSERT INTO personajes (nombre, altura, masa, color_cabello, color_piel, color_ojos, fecha_nacimiento, genero, mundo_natal, peliculas, especies, vehiculos, naves_estelares, creado, editado, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            personaje.nombre,
            personaje.altura,
            personaje.masa,
            personaje.color_cabello,
            personaje.color_piel,
            personaje.color_ojos,
            personaje.fecha_nacimiento,
            personaje.genero,
            personaje.mundo_natal,
            JSON.stringify(personaje.peliculas),
            JSON.stringify(personaje.especies),
            JSON.stringify(personaje.vehiculos),
            JSON.stringify(personaje.naves_estelares),
            personaje.creado,
            personaje.editado,
            personaje.url
        ]);
    }
    finally {
        connection.release();
    }
};
exports.guardarPersonaje = guardarPersonaje;
const listarPersonajes = async () => {
    const connection = await databaseClient_1.default.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM personajes');
        return rows;
    }
    finally {
        connection.release();
    }
};
exports.listarPersonajes = listarPersonajes;
const guardarPelicula = async (pelicula) => {
    const connection = await databaseClient_1.default.getConnection();
    try {
        await connection.execute('INSERT INTO peliculas (titulo, episodio_id, apertura_crawl, director, productor, fecha_lanzamiento, personajes, especies, vehiculos, naves_estelares, planetas, creado, editado, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [
            pelicula.titulo,
            pelicula.episodio_id,
            pelicula.apertura_crawl,
            pelicula.director,
            pelicula.productor,
            pelicula.fecha_lanzamiento,
            JSON.stringify(pelicula.personajes),
            JSON.stringify(pelicula.especies),
            JSON.stringify(pelicula.vehiculos),
            JSON.stringify(pelicula.naves_estelares),
            JSON.stringify(pelicula.planetas),
            pelicula.creado,
            pelicula.editado,
            pelicula.url
        ]);
    }
    finally {
        connection.release();
    }
};
exports.guardarPelicula = guardarPelicula;
const listarPeliculas = async () => {
    const connection = await databaseClient_1.default.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM peliculas');
        return rows;
    }
    finally {
        connection.release();
    }
};
exports.listarPeliculas = listarPeliculas;
