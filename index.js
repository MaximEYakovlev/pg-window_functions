import pg from 'pg';
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

const run = async () => {
    await connect();
    await createTable();
    await insertData();
}

run();