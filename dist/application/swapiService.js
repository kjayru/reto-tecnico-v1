"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPelicula = exports.obtenerPersonaje = void 0;
const swapiClient_1 = require("../infrastructure/swapiClient");
const personaje_1 = require("../domain/personaje");
const pelicula_1 = require("../domain/pelicula");
const obtenerPersonaje = async (id) => {
    const data = await (0, swapiClient_1.obtenerPersonaje)(id);
    return new personaje_1.Personaje(data.name, data.height, data.mass, data.hair_color, data.skin_color, data.eye_color, data.birth_year, data.gender, data.homeworld, data.films, data.species, data.vehicles, data.starships, new Date(data.created), new Date(data.edited), data.url);
};
exports.obtenerPersonaje = obtenerPersonaje;
const obtenerPelicula = async (id) => {
    const data = await (0, swapiClient_1.obtenerPelicula)(id);
    return new pelicula_1.Pelicula(data.title, data.episode_id, data.opening_crawl, data.director, data.producer, new Date(data.release_date), data.characters, data.planets, data.starships, data.vehicles, data.species, new Date(data.created), new Date(data.edited), data.url);
};
exports.obtenerPelicula = obtenerPelicula;
