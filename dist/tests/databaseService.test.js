"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseService_1 = require("../application/databaseService");
const databaseClient_1 = __importDefault(require("../infrastructure/databaseClient"));
const personaje_1 = require("../domain/personaje");
const pelicula_1 = require("../domain/pelicula");
jest.mock('../infrastructure/databaseClient');
const mockedPool = databaseClient_1.default;
describe('Data Service', () => {
    it('debería guardar un personaje', async () => {
        const personaje = new personaje_1.Personaje('Luke Skywalker', '172', '77', 'blond', 'fair', 'blue', '19BBY', 'male', 'https://swapi.dev/api/planets/1/', [], [], [], [], new Date('2014-12-09T13:50:51.644000Z'), new Date('2014-12-20T21:17:56.891000Z'), 'https://swapi.dev/api/people/1/');
        const connection = {
            execute: jest.fn(),
            release: jest.fn()
        };
        mockedPool.getConnection.mockResolvedValue(connection);
        await (0, databaseService_1.guardarPersonaje)(personaje);
        expect(connection.execute).toHaveBeenCalledWith('INSERT INTO personajes SET ?', expect.any(Object));
        expect(connection.release).toHaveBeenCalled();
    });
    it('debería listar personajes', async () => {
        const rows = [{ nombre: 'Luke Skywalker' }];
        const connection = {
            execute: jest.fn().mockResolvedValue([rows]),
            release: jest.fn()
        };
        mockedPool.getConnection.mockResolvedValue(connection);
        const personajes = await (0, databaseService_1.listarPersonajes)();
        expect(personajes).toEqual(rows);
        expect(connection.release).toHaveBeenCalled();
    });
    it('debería guardar una película', async () => {
        const pelicula = new pelicula_1.Pelicula('A New Hope', 4, 'It is a period of civil war....', 'George Lucas', 'Gary Kurtz, Rick McCallum', new Date('1977-05-25'), [], [], [], [], [], new Date('2014-12-10T14:23:31.880000Z'), new Date('2014-12-20T19:49:45.256000Z'), 'https://swapi.dev/api/films/1/');
        const connection = {
            execute: jest.fn(),
            release: jest.fn()
        };
        mockedPool.getConnection.mockResolvedValue(connection);
        await (0, databaseService_1.guardarPelicula)(pelicula);
        expect(connection.execute).toHaveBeenCalledWith('INSERT INTO peliculas SET ?', expect.any(Object));
        expect(connection.release).toHaveBeenCalled();
    });
    it('debería listar películas', async () => {
        const rows = [{ titulo: 'A New Hope' }];
        const connection = {
            execute: jest.fn().mockResolvedValue([rows]),
            release: jest.fn()
        };
        mockedPool.getConnection.mockResolvedValue(connection);
        const peliculas = await (0, databaseService_1.listarPeliculas)();
        expect(peliculas).toEqual(rows);
        expect(connection.release).toHaveBeenCalled();
    });
});
