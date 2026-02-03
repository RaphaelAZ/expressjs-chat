const { Op } = require('sequelize');
const User = require('../user/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
        const formattedUser = {
            id: user.id,
            username: user.username,
            email: user.email
        };
        res.status(200).json({ message: "Login successful", user: formattedUser, token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
};

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let existingUser = await User.findOne({ where: {
            [Op.or]: [{
                email,
                password
            }]
        } });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const saltRound = process.env.HASH_SALT_ROUNDS || 10;
        const hashedPassword = bcrypt.hashSync(password, saltRound);
        let user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};