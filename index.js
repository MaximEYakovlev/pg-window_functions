import pg from 'pg';
import { dbConfig } from './dbConfig.js';

const { Client } = pg;
const client = new Client(dbConfig);

const connect = async () => {
    await client.connect();
}

const disconnect = async () => {
    await client.end();
}

const createTable = async () => {
    await client.query(`
        CREATE TABLE IF NOT EXISTS rooms (id SERIAL NOT NULL PRIMARY KEY, home_type varchar(20) NOT NULL, price integer NOT NULL);
    `);
}

const insertData = async () => {
    await client.query(`
        INSERT INTO rooms (home_type, price) VALUES
            ('Entire home/apt', 80),
            ('Private room', 35),
            ('Shared room', 40);
    `);
}

// window function
const selectData = async () => {
    await client.query(`
        SELECT
            home_type, price,
            AVG(price) OVER (PARTITION BY home_type) AS avg_price
        FROM rooms;
    `);
}

const run = async () => {
    await connect();
    await createTable();
    await insertData();
    await selectData();
    await disconnect();
}

run();