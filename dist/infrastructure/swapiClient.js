"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPelicula = exports.obtenerPersonaje = void 0;
const axios_1 = __importDefault(require("axios"));
const obtenerPersonaje = async (id) => {
    const response = await axios_1.default.get(`https://swapi.dev/api/people/${id}/`);
    return response.data;
};
exports.obtenerPersonaje = obtenerPersonaje;
const obtenerPelicula = async (id) => {
    const response = await axios_1.default.get(`https://swapi.py4e.com/api/films/${id}/`);
    return response.data;
};
exports.obtenerPelicula = obtenerPelicula;
