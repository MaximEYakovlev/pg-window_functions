export const createSchemaQuery = {
    text: `CREATE SCHEMA IF NOT EXISTS max`,
};

export const createTableQuery = {
    text: `CREATE TABLE IF NOT EXISTS max.rooms(id SERIAL NOT NULL PRIMARY KEY, home_type varchar(20) NOT NULL, has_internet boolean NOT NULL, price integer NOT NULL);`,
};

export const insertDataQuery = {
    text: `
        INSERT INTO max.rooms(home_type, has_internet, price)
        VALUES
        ($1, $2, $3), ($4, $5, $6), ($7, $8, $9), ($10, $11, $12),
        ($13, $14, $15), ($16, $17, $18), ($19, $20, $21), ($22, $23, $24),
        ($25, $26, $27), ($28, $29, $30), ($31, $32, $33), ($34, $35, $36)
    `,
    values: [
        'Entire home/apt', true, 80,
        'Entire home/apt', false, 96,
        'Entire home/apt', true, 75,
        'Entire home/apt', true, 114,
        'Private room', false, 35,
        'Private room', true, 40,
        'Private room', true, 51,
        'Private room', false, 38,
        'Shared room', true, 39,
        'Shared room', false, 41,
        'Shared room', true, 45,
        'Shared room', false, 47
    ],
};

export const selectDataQuery = {
    name: 'fetch-data',
    text: `SELECT
                home_type, price,
                AVG(price) OVER (PARTITION BY home_type ORDER BY price ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS avg_price
            FROM max.rooms;`,
};

export const collectGarbageQuery = {
    text: 'VACUUM ANALYZE max.rooms;',
};