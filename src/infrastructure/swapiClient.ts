import axios from 'axios';

const SWAPI_BASE_URL =  'https://swapi.dev/api';
const SWAPI_FILMS_URL = 'https://swapi.py4e.com/api';

export const obtenerPersonaje = async (id: number) => {
    try {
        const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener el personaje con ID ${id}:`, error);
        throw new Error('No se pudo obtener el personaje.');
    }
};

export const obtenerPelicula = async (id: number) => {
    try {
        const response = await axios.get(`${SWAPI_FILMS_URL}/films/${id}/`);
        return response.data;
    } catch (error) {
        console.error(`Error al obtener la película con ID ${id}:`, error);
        throw new Error('No se pudo obtener la película.');
    }
};