const jwt = require('jsonwebtoken');
const userService = require('../services/Login');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { type, message } = await userService(email, password);

        if (type) {
            return res.status(400).json({ message });
        }

        const config = {
            // expiresIn: '1d',
            algorithm: 'HS256',
        };

        const token = jwt.sign(email, secret, config);
        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message);
    }
};

module.exports = Login;