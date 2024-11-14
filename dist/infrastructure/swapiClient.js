"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPelicula = exports.obtenerPersonaje = void 0;
const axios_1 = __importDefault(require("axios"));
const SWAPI_BASE_URL = 'https://swapi.dev/api';
const SWAPI_FILMS_URL = 'https://swapi.py4e.com/api';
const obtenerPersonaje = async (id) => {
    try {
        const response = await axios_1.default.get(`${SWAPI_BASE_URL}/people/${id}/`);
        return response.data;
    }
    catch (error) {
        console.error(`Error al obtener el personaje con ID ${id}:`, error);
        throw new Error('No se pudo obtener el personaje.');
    }
};
exports.obtenerPersonaje = obtenerPersonaje;
const obtenerPelicula = async (id) => {
    try {
        const response = await axios_1.default.get(`${SWAPI_FILMS_URL}/films/${id}/`);
        return response.data;
    }
    catch (error) {
        console.error(`Error al obtener la película con ID ${id}:`, error);
        throw new Error('No se pudo obtener la película.');
    }
};
exports.obtenerPelicula = obtenerPelicula;
