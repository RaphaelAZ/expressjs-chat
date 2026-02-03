const express = require('express');
const app = express();
const userRoutes = require('./modules/user/user.routes');
const messageRoutes = require('./modules/message/message.routes');
const { connect } = require('./helper/database');
const sync = require('./helper/sync');

const startBdd = async () => {
    await connect();
    await sync();
}
startBdd();

app.use(express.json());

app.use('/message', messageRoutes);
app.use('/user', userRoutes);


module.exports = app;