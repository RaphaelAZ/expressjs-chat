const Conversation = require('./conversation.model.js');
const User = require('../user/user.model.js');

exports.getAll = async (req, res) => {
    let conversationList = await Conversation.findAll();
    res.status(200).json(conversationList);
}

exports.getById = async (req, res) => {
    let conversation =Conversation.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json(conversation);
}

exports.create = async (req, res) => {
    if(!req.body.userId){
        return res.status(400).json({message: "userId is required"});
    }

    try {
        let conversation = await Conversation.create(req.body);
        const author = await User.findByPk(req.user.id);
        conversation.addUser(author);

        const userToAdd = await User.findByPk(req.body.userId);
        if(!userToAdd){
            return res.status(404).json({message: "User to add not found"});
        }
        conversation.addUser(userToAdd);

        res.status(201).json(conversation);
    } catch(error) {
        res.status(500).json({message: "Server error", error});
    }
}

exports.send = async (req, res) => {

}
