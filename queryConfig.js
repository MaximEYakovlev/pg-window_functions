export const createTableQuery = {
    text: `CREATE TABLE IF NOT EXISTS rooms (id SERIAL NOT NULL PRIMARY KEY, home_type varchar(20) NOT NULL, has_internet boolean NOT NULL, price integer NOT NULL);`,
};

export const insertDataQuery = {
    text: 'INSERT INTO rooms(home_type, has_internet, price) VALUES($1, $2, $3), ($4, $5, $6), ($7, $8, $9)',
    values: [
        'Entire home/apt', true, 80,
        'Private room', false, 35,
        'Shared room', true, 40
    ],
};

export const selectDataQuery = {
    name: 'fetch-data',
    text: `SELECT
                home_type, has_internet, price,
                AVG(price) OVER (PARTITION BY home_type, has_internet) AS avg_price
            FROM rooms;`
};