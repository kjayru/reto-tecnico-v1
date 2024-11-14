import { createPool, Pool } from 'mysql2/promise';

let pool: Pool;

try {
    pool = createPool({
        host:'rds-reto.cvkkykiugu1s.us-east-1.rds.amazonaws.com',
        user: 'admin',
        password:'C0n3x10n',
        database: 'RDSReto'
    });
    console.log('Conexión a la base de datos establecida.');
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); 
}

export default pool;