const express = require('express');
const app = express();
const userRouter = require('./modules/user/user.route.js');
const messageRouter = require('./modules/message/message.route.js');
const conversationRouter = require('./modules/conversation/conversation.route.js');
const authRouter = require('./modules/auth/auth.route.js');
const {connect} = require('./helper/connexion.js');
const associate = require('./helper/associate.js');
const authMiddleware = require('./middleware/auth.middleware.js');

const startBdd = async () => {
    await connect();
    await associate();
}
startBdd();

app.use(express.json());

app.use('/user', authMiddleware, userRouter);
app.use('/message', authMiddleware, messageRouter);
app.use('/conversation', authMiddleware, conversationRouter);
app.use('/auth', authRouter);

module.exports = app;