"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    host: 'rds-reto.cvkkykiugu1s.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'C0n3x10n',
    database: 'RDSReto'
});
exports.default = pool;
