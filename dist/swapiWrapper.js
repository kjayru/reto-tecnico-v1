"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPelicula = exports.obtenerPersonaje = void 0;
const axios_1 = __importDefault(require("axios"));
const translateUtils_1 = require("./translateUtils");
const obtenerPersonaje = async (id) => {
    try {
        const response = await axios_1.default.get(`https://swapi.dev/api/people/${id}/`);
        const personaje = response.data;
        return (0, translateUtils_1.traducirAtributos)(personaje);
    }
    catch (error) {
        console.error("Error al obtener el personaje de SWAPI:", error);
        throw new Error("No se pudo obtener el personaje");
    }
};
exports.obtenerPersonaje = obtenerPersonaje;
const obtenerPelicula = async (id) => {
    try {
        const response = await axios_1.default.get(`https://swapi.py4e.com/api/films/${id}/`);
        const pelicula = response.data;
        return (0, translateUtils_1.traducirAtributos)(pelicula);
    }
    catch (error) {
        console.error("Error al obtener la película de SWAPI:", error);
        throw new Error("No se pudo obtener la película");
    }
};
exports.obtenerPelicula = obtenerPelicula;
