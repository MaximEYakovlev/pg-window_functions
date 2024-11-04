import pg from 'pg';
import { dbConfig } from './dbConfig.js';
import * as QUERY from './queryConfig.js';

const { Client } = pg;
const client = new Client(dbConfig);

const connect = async () => {
    await client.connect();
}

const disconnect = async () => {
    await client.end();
}

const createTable = async () => {
    await client.query(QUERY.createTableQuery);
}

const insertData = async () => {
    await client.query(QUERY.insertDataQuery);
}

// window function
const selectData = async () => {
    await client.query(QUERY.selectDataQuery);
}

const run = async () => {
    await connect();
    await createTable();
    await insertData();
    await selectData();
    await disconnect();
}

run();