import { createPool, Pool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool: Pool;

try {
    pool = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    console.log('Conexión a la base de datos establecida.');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); 
}

export default pool;