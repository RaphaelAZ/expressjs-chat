const User = require('./../modules/user/user.model.js');
const Message = require('./../modules/message/message.model.js');
const Conversation = require('./../modules/conversation/conversation.model.js')

const associate = async () => {
    User.hasMany(Message, {foreignKey: "userId"});
    Message.belongsTo(User, {foreignKey: "userId"});

    Conversation.hasMany(Message,{foreignKey: "conversationId"});

    User.belongsToMany(Conversation,{through: "user_has_conversation"});
    Conversation.belongsToMany(User,{through: "user_has_conversation"});
}

module.exports = associate;