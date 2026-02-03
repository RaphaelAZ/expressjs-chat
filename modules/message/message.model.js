const { DataTypes } = require('sequelize');
const { db } = require('../../helper/database');

const Message = db.define('Message', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Message;