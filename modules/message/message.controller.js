const Message = require('./message.model');

exports.getAll = async (req, res) => {
    try {
        let messages = await Message.findAll();
        res.status(200).json(messages);
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages'});
    }
};

exports.createMessage = async (req, res) => {
    try {
        let message = await Message.create(req.body);
        res.status(201).json(message);
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la création du message'});
    }
};

exports.getAllMessagesBeetwenUsers = async (req, res) => {
    try {
        let { userId1, userId2 } = req.params;
        let messages = await Message.findAll({
            where: {
                senderId: [userId1, userId2],
                receiverId: [userId1, userId2]
            },
            order: [['createdAt', 'ASC']]
        });
        res.status(200).json(messages);
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des messages entre les utilisateurs'});
    }
};