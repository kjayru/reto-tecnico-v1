"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPeliculasHandler = exports.listarPersonajesHandler = exports.obtenerPeliculaHandler = exports.obtenerPersonajeHandler = void 0;
const swapiService_1 = require("./application/swapiService");
const databaseService_1 = require("./application/databaseService");
const obtenerPersonajeHandler = async (event) => {
    try {
        const id = parseInt(event.pathParameters?.id || '1', 10);
        const personajeTraducido = await (0, swapiService_1.obtenerPersonaje)(id);
        await (0, databaseService_1.guardarPersonaje)(personajeTraducido);
        return {
            statusCode: 200,
            body: JSON.stringify(personajeTraducido)
        };
    }
    catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
exports.obtenerPersonajeHandler = obtenerPersonajeHandler;
const obtenerPeliculaHandler = async (event) => {
    try {
        const id = parseInt(event.pathParameters?.id || '1', 10);
        const peliculaTraducida = await (0, swapiService_1.obtenerPelicula)(id);
        await (0, databaseService_1.guardarPelicula)(peliculaTraducida);
        return {
            statusCode: 200,
            body: JSON.stringify(peliculaTraducida)
        };
    }
    catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
exports.obtenerPeliculaHandler = obtenerPeliculaHandler;
const listarPersonajesHandler = async () => {
    try {
        const personajes = await (0, databaseService_1.listarPersonajes)();
        return {
            statusCode: 200,
            body: JSON.stringify(personajes)
        };
    }
    catch (error) {
        console.error("Error al obtener personajes:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
exports.listarPersonajesHandler = listarPersonajesHandler;
const listarPeliculasHandler = async () => {
    try {
        const peliculas = await (0, databaseService_1.listarPeliculas)();
        return {
            statusCode: 200,
            body: JSON.stringify(peliculas)
        };
    }
    catch (error) {
        console.error("Error al obtener películas:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
exports.listarPeliculasHandler = listarPeliculasHandler;
