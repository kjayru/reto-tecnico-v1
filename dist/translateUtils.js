"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traducirAtributos = void 0;
const traducciones = {
    "name": "nombre",
    "height": "altura",
    "mass": "masa",
    "hair_color": "color_cabello",
    "skin_color": "color_piel",
    "eye_color": "color_ojos",
    "birth_year": "fecha_nacimiento",
    "gender": "genero",
    "homeworld": "mundo_natal",
    "films": "peliculas",
    "species": "especies",
    "vehicles": "vehiculos",
    "starships": "naves_estelares",
    "created": "creado",
    "edited": "editado",
    "url": "url",
    "title": "titulo",
    "episode_id": "episodio_id",
    "opening_crawl": "apertura_crawl",
    "director": "director",
    "producer": "productor",
    "release_date": "fecha_lanzamiento",
    "characters": "personajes",
    "planets": "planetas"
};
const traducirAtributos = (objeto) => {
    let objetoTraducido = {};
    for (let clave in objeto) {
        let nuevaClave = traducciones[clave] || clave;
        objetoTraducido[nuevaClave] = objeto[clave];
    }
    return objetoTraducido;
};
exports.traducirAtributos = traducirAtributos;
