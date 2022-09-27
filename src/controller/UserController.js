const jwt = require('jsonwebtoken');
const userService = require('../services/User');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;    

        await userService.createUser(displayName, email, password, image);

        const config = {
            algorithm: 'HS256',
        };

        const token = jwt.sign(email, secret, config);
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers();
    return res.status(200).json(result);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const result = await userService.getUserById(id);
    if (!result) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(result);
};

module.exports = { createUser, getAllUsers, getUserById };