import pool from '../infrastructure/databaseClient';
import { Personaje } from '../domain/personaje';
import { Pelicula } from '../domain/pelicula';

export const guardarPersonaje = async (personaje: Personaje) => {
    const connection = await pool.getConnection();
    try {
        await connection.execute('INSERT INTO personajes (nombre, altura, masa, color_cabello, color_piel, color_ojos, fecha_nacimiento, genero, mundo_natal, peliculas, especies, vehiculos, naves_estelares, creado, editado, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [
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
            ]
        );
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
        await connection.execute('INSERT INTO peliculas (titulo, episodio_id, apertura_crawl, director, productor, fecha_lanzamiento, personajes, especies, vehiculos, naves_estelares, planetas, creado, editado, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [
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
            ]
        );
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
