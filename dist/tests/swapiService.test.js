"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swapiService_1 = require("../application/swapiService");
const axios_1 = __importDefault(require("axios"));
jest.mock('axios');
const mockedAxios = axios_1.default;
describe('SWAPI Service', () => {
    it('debería obtener un personaje', async () => {
        const personajeData = {
            name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.dev/api/planets/1/',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.dev/api/people/1/'
        };
        mockedAxios.get.mockResolvedValue({ data: personajeData });
        const personaje = await (0, swapiService_1.obtenerPersonaje)(1);
        expect(personaje.nombre).toBe('Luke Skywalker');
    });
    it('debería obtener una película', async () => {
        const peliculaData = {
            title: 'A New Hope',
            episode_id: 4,
            opening_crawl: 'It is a period of civil war....',
            director: 'George Lucas',
            producer: 'Gary Kurtz, Rick McCallum',
            release_date: '1977-05-25',
            characters: [],
            planets: [],
            starships: [],
            vehicles: [],
            species: [],
            created: '2014-12-10T14:23:31.880000Z',
            edited: '2014-12-20T19:49:45.256000Z',
            url: 'https://swapi.dev/api/films/1/'
        };
        mockedAxios.get.mockResolvedValue({ data: peliculaData });
        const pelicula = await (0, swapiService_1.obtenerPelicula)(1);
        expect(pelicula.titulo).toBe('A New Hope');
    });
});
