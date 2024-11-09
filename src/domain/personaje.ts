export class Personaje {
    constructor(
        public nombre: string,
        public altura: string,
        public masa: string,
        public color_cabello: string,
        public color_piel: string,
        public color_ojos: string,
        public fecha_nacimiento: string,
        public genero: string,
        public mundo_natal: string,
        public peliculas: string[],
        public especies: string[],
        public vehiculos: string[],
        public naves_estelares: string[],
        public creado: Date,
        public editado: Date,
        public url: string,
        
    ) {}
}
