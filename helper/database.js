const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    port: process.env.DB_PORT,
});

let connect = async () => {
    try {
        await db.authenticate();
        console.log('Connexion avec la DB établie.');
    } catch (error) {
        console.error('Erreur sur le connexion avec la db :', error);
    }
};

module.exports = { db, connect };