const { DataTypes } = require('sequelize');
const { db } = require('../../helper/database');

const User = db.define('User', {
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING(511),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(256),
        allowNull: false,
    },
}, {
    tableName: 'users',
    timestamps: true,
});

module.exports = User;