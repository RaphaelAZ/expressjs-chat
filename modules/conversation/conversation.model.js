const { DataTypes } = require('sequelize');
const { db } = require('./../../helper/connexion.js');

const Conversation = db.define('Conversation', {

},{
    tableName: "conversation"
});

module.exports = Conversation;
