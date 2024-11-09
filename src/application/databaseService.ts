import pool from '../infrastructure/databaseClient';
import { Personaje } from '../domain/personaje';
import { Pelicula } from '../domain/pelicula';

export const guardarPersonaje = async (personaje: Personaje) => {
    const connection = await pool.getConnection();
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
    } finally {
        connection.release();
    }
};

export const listarPersonajes = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM personajes');
        return rows;
    } finally {
        connection.release();
    }
};

export const guardarPelicula = async (pelicula: Pelicula) => {
    const connection = await pool.getConnection();
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
    } finally {
        connection.release();
    }
};

export const listarPeliculas = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM peliculas');
        return rows;
    } finally {
        connection.release();
    }
};
