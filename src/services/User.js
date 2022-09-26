const UserModel = require('../models/User');

require('dotenv').config();

const userLogin = async (email, password) => {
    const result = await UserModel.findOne({ where: { email } });

    if (!result || result.password !== password) {
        return { type: true, message: 'Invalid fields' };
    }
    return { type: false, message: result };
};

module.exports = userLogin;