export const createTableQuery = {
    text: `CREATE TABLE IF NOT EXISTS rooms (id SERIAL NOT NULL PRIMARY KEY, home_type varchar(20) NOT NULL, price integer NOT NULL);`,
};

export const insertDataQuery = {
    text: `INSERT INTO rooms (home_type, price)
                VALUES
                    ('Entire home/apt', 80),
                    ('Private room', 35),
                    ('Shared room', 40);`
};

export const selectDataQuery = {
    text: `SELECT
                home_type, price,
                AVG(price) OVER (PARTITION BY home_type) AS avg_price
            FROM rooms;`
};