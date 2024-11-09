import { guardarPersonaje, listarPersonajes, guardarPelicula, listarPeliculas } from '../application/databaseService';
import pool from '../infrastructure/databaseClient';
import { Personaje } from '../domain/personaje';
import { Pelicula } from '../domain/pelicula';

jest.mock('../infrastructure/databaseClient');
const mockedPool = pool as jest.Mocked<typeof pool>;

describe('Data Service', () => {
    it('debería guardar un personaje', async () => {
        const personaje = new Personaje(
            'Luke Skywalker',
            '172',
            '77',
            'blond',
            'fair',
            'blue',
            '19BBY',
            'male',
            'https://swapi.dev/api/planets/1/',
            [],
            [],
            [],
            [],
            new Date('2014-12-09T13:50:51.644000Z'),
            new Date('2014-12-20T21:17:56.891000Z'),
            'https://swapi.dev/api/people/1/'
        );

        const connection = {
            execute: jest.fn(),
            release: jest.fn()
        };

        mockedPool.getConnection.mockResolvedValue(connection as any);

        await guardarPersonaje(personaje);

        expect(connection.execute).toHaveBeenCalledWith('INSERT INTO personajes SET ?', expect.any(Object));
        expect(connection.release).toHaveBeenCalled();
    });

    it('debería listar personajes', async () => {
        const rows = [{ nombre: 'Luke Skywalker' }];
        const connection = {
            execute: jest.fn().mockResolvedValue([rows]),
            release: jest.fn()
        };

        mockedPool.getConnection.mockResolvedValue(connection as any);

        const personajes = await listarPersonajes();

        expect(personajes).toEqual(rows);
        expect(connection.release).toHaveBeenCalled();
    });

    it('debería guardar una película', async () => {
        const pelicula = new Pelicula(
            'A New Hope',
            4,
            'It is a period of civil war....',
            'George Lucas',
            'Gary Kurtz, Rick McCallum',
            new Date('1977-05-25'),
            [],
            [],
            [],
            [],
            [],
            new Date('2014-12-10T14:23:31.880000Z'),
            new Date('2014-12-20T19:49:45.256000Z'),
            'https://swapi.dev/api/films/1/'
        );

        const connection = {
            execute: jest.fn(),
            release: jest.fn()
        };

        mockedPool.getConnection.mockResolvedValue(connection as any);

        await guardarPelicula(pelicula);

        expect(connection.execute).toHaveBeenCalledWith('INSERT INTO peliculas SET ?', expect.any(Object));
        expect(connection.release).toHaveBeenCalled();
    });

    it('debería listar películas', async () => {
        const rows = [{ titulo: 'A New Hope' }];
        const connection = {
            execute: jest.fn().mockResolvedValue([rows]),
            release: jest.fn()
        };

        mockedPool.getConnection.mockResolvedValue(connection as any);

        const peliculas = await listarPeliculas();

        expect(peliculas).toEqual(rows);
        expect(connection.release).toHaveBeenCalled();
    });
});
