const { User } = require('../models/index');
require('dotenv').config();

const regexEmail = (email) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isEmailCorrect = regex.test(email);

    return isEmailCorrect;
};

const validateCriation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    // console.log('aaaaa', displayName);
    // console.log('bbbbb', displayName.length);

    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }

    if (regexEmail(email) === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
        });
    }

    next();
};

const onlyEmailVerify = async (req, res, next) => {
    const { email } = req.body;

    console.log('email:', email);
    const userExists = await User.findOne({ where: { email } });

    console.log('user', userExists);
    if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
    }

    next();
};

module.exports = { validateCriation, onlyEmailVerify };