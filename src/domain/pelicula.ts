export class Pelicula {
    constructor(
        public titulo: string,
        public episodio_id: number,
        public apertura_crawl: string,
        public director: string,
        public productor: string,
        public fecha_lanzamiento: Date,
        public personajes: string[],
        public planetas: string[],
        public naves_estelares: string[],
        public vehiculos: string[],
        public especies: string[],
        public creado: Date,
        public editado: Date,
        public url: string
        

    ) {}
}
