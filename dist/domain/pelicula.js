"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
class Pelicula {
    constructor(titulo, episodio_id, apertura_crawl, director, productor, fecha_lanzamiento, personajes, planetas, naves_estelares, vehiculos, especies, creado, editado, url) {
        this.titulo = titulo;
        this.episodio_id = episodio_id;
        this.apertura_crawl = apertura_crawl;
        this.director = director;
        this.productor = productor;
        this.fecha_lanzamiento = fecha_lanzamiento;
        this.personajes = personajes;
        this.planetas = planetas;
        this.naves_estelares = naves_estelares;
        this.vehiculos = vehiculos;
        this.especies = especies;
        this.creado = creado;
        this.editado = editado;
        this.url = url;
    }
}
exports.Pelicula = Pelicula;
