const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres_db', 'user', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const run = async () => {
    await connect();
}

run();