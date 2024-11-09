import { APIGatewayProxyHandler } from 'aws-lambda';
import { obtenerPersonaje, obtenerPelicula } from './application/swapiService';
import { guardarPersonaje, listarPersonajes, guardarPelicula, listarPeliculas } from './application/databaseService';


export const obtenerPersonajeHandler: APIGatewayProxyHandler = async (event) => {
    try {
        const id = parseInt(event.pathParameters?.id || '1', 10); 
        const personajeTraducido = await obtenerPersonaje(id);

        await guardarPersonaje(personajeTraducido);

        return {
            statusCode: 200,
            body: JSON.stringify(personajeTraducido)
        };
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};


export const obtenerPeliculaHandler: APIGatewayProxyHandler = async (event) => {
    try {
        const id = parseInt(event.pathParameters?.id || '1', 10); 
        const peliculaTraducida = await obtenerPelicula(id);

        await guardarPelicula(peliculaTraducida);

        return {
            statusCode: 200,
            body: JSON.stringify(peliculaTraducida)
        };
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};


export const listarPersonajesHandler: APIGatewayProxyHandler = async () => {
    try {
        const personajes = await listarPersonajes();

        return {
            statusCode: 200,
            body: JSON.stringify(personajes)
        };
    } catch (error) {
        console.error("Error al obtener personajes:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};


export const listarPeliculasHandler: APIGatewayProxyHandler = async () => {
    try {
        const peliculas = await listarPeliculas();

        return {
            statusCode: 200,
            body: JSON.stringify(peliculas)
        };
    } catch (error) {
        console.error("Error al obtener películas:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" })
        };
    }
};
