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
        await connection.execute('INSERT INTO personajes SET ?', {
            nombre: personaje.nombre,
            altura: personaje.altura,
            masa: personaje.masa,
            color_cabello: personaje.color_cabello,
            color_piel: personaje.color_piel,
            color_ojos: personaje.color_ojos,
            fecha_nacimiento: personaje.fecha_nacimiento,
            genero: personaje.genero,
            mundo_natal: personaje.mundo_natal,
            peliculas: JSON.stringify(personaje.peliculas),
            especies: JSON.stringify(personaje.especies),
            vehiculos: JSON.stringify(personaje.vehiculos),
            naves_estelares: JSON.stringify(personaje.naves_estelares),
            creado: personaje.creado,
            editado: personaje.editado,
            url: personaje.url
        });
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
        await connection.execute('INSERT INTO peliculas SET ?', {
            titulo: pelicula.titulo,
            episodio_id: pelicula.episodio_id,
            apertura_crawl: pelicula.apertura_crawl,
            director: pelicula.director,
            productor: pelicula.productor,
            fecha_lanzamiento: pelicula.fecha_lanzamiento,
            personajes: JSON.stringify(pelicula.personajes),
            especies: JSON.stringify(pelicula.especies),
            vehiculos: JSON.stringify(pelicula.vehiculos),
            naves_estelares: JSON.stringify(pelicula.naves_estelares),
            planetas: JSON.stringify(pelicula.planetas),
            creado: pelicula.creado,
            editado: pelicula.editado,
            url: pelicula.url
        });
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
