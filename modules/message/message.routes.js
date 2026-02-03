const express = require('express');
const router = express.Router();
const messageController = require('./message.controller');

router.get('/', messageController.getAll);

router.post('/', messageController.createMessage);

router.get('/between-users/:userId1/:userId2', messageController.getAllMessagesBeetwenUsers);

module.exports = router;