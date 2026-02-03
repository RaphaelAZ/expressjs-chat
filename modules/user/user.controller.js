const User = require('./user.model');

exports.getAll = async (req, res) => {
    try {
        let users = await User.findAll();
        res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs'});
    }
};

exports.getById = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé'});
        }
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur'});
    }
};

exports.createUser = async (req, res) => {
    try {
        let user = await User.create(req.body);
        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur'});
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if(user) {
            await user.update(req.body);
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé'});
        }
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur'});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findByPk(req.params.id);
        if(user) {
            await user.destroy();
            res.status(200).json({ message: 'Utilisateur supprimé avec succès'});
        } else {
            res.status(404).json({ error: 'Utilisateur non trouvé'});
        }
    } catch(error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur'});
    }
};