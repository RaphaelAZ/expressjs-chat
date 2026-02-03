const {db} = require('./connexion.js');
const associate = require('./associate.js');

const sync = async () => {
    await associate();
    await db.sync({alter: true});
}

sync();