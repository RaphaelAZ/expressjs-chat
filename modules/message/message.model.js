const { DataTypes } = require('sequelize');
const { db } = require('./../../helper/connexion.js');

const Message = db.define('Message', {
    content: {
        type: DataTypes.TEXT
    }
},{
    tableName: "messages"
});

module.exports = Message;