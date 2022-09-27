const jwt = require('jsonwebtoken');
const userService = require('../services/CreateUser');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;    
        const { type, message } = await userService.getUser(email);

        console.log('tipo:', type);

        if (type) {
            return res.status(409).json({ message });
        }

        await userService.createUser({ displayName, email, password, image });

        const config = {
            algorithm: 'HS256',
        };

        const token = jwt.sign(email, secret, config);
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = createUser;