const { db } = require('./database');
const associate = require('./associate');

const sync = async () => {
    try {
        await associate();
        await db.sync();
        console.log('Database synchro avec succès.');
    } catch (error) {
        console.error('Erreur de synchro:', error);
    }
}

module.exports = sync;