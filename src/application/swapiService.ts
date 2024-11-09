import { obtenerPersonaje as obtenerPersonajeSWAPI, obtenerPelicula as obtenerPeliculaSWAPI } from '../infrastructure/swapiClient';
import { Personaje } from '../domain/personaje';
import { Pelicula } from '../domain/pelicula';

export const obtenerPersonaje = async (id: number): Promise<Personaje> => {
    const data = await obtenerPersonajeSWAPI(id);
    return new Personaje(
        data.name,
        data.height,
        data.mass,
        data.hair_color,
        data.skin_color,
        data.eye_color,
        data.birth_year,
        data.gender,
        data.homeworld,
        data.films,
        data.species,
        data.vehicles,
        data.starships,
        new Date(data.created),
        new Date(data.edited),
        data.url
    );
};

export const obtenerPelicula = async (id: number): Promise<Pelicula> => {
    const data = await obtenerPeliculaSWAPI(id);
    return new Pelicula(
        data.title,
        data.episode_id,
        data.opening_crawl,
        data.director,
        data.producer,
        new Date(data.release_date),
        data.characters,
        data.planets,
        data.starships,
        data.vehicles,
        data.species,
        new Date(data.created),
        new Date(data.edited),
        data.url
    );
};
