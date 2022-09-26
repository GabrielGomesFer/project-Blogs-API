const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

require('dotenv').config();

const userLogin = async ({ email }) => {
    const result = await UserModel.findOne({ where: { email } });

    const token = jwt.sign(
        { id: result.dataValues.id },
        process.env.JWT_SECRET,
        { algorithm: 'HS256' },
    );
    return token;
};

module.exports = userLogin;