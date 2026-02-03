const User = require('../modules/user/user.model');
const Message = require('../modules/message/message.model');

const associate = async () => {
    User.hasMany(Message, { as: 'sentMessages', foreignKey: 'senderId' });
    User.hasMany(Message, { as: 'receivedMessages', foreignKey: 'receiverId' });
    Message.belongsTo(User, { as: 'sender', foreignKey: 'senderId' });
    Message.belongsTo(User, { as: 'receiver', foreignKey: 'receiverId' });
}

module.exports = associate;