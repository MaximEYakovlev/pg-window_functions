const pg = require('pg');
const { Client } = pg;

const client = new Client({
    user: 'user',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'postgres_db',
});

const connect = async () => {
    await client.connect();
}

const createTable = async () => {
    await client.query(`
        CREATE TABLE IF NOT EXISTS Rooms (id SERIAL NOT NULL PRIMARY KEY, home_type varchar(10) NOT NULL, price integer NOT NULL);
    `);
}

const run = async () => {
    await connect();
    await createTable();
}

run();