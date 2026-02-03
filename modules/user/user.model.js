const { DataTypes } = require('sequelize');
const { db } = require('./../../helper/connexion.js');

const User = db.define('User', {
    username: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(511),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false
    }
},{
    tableName: "users"
});

module.exports = User;