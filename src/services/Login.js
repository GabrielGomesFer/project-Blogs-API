const { User } = require('../models/index');

require('dotenv').config();

const userLogin = async (email, password) => {
    const result = await User.findOne({ where: { email } });

    if (!result || result.password !== password) {
        return { type: true, message: 'Invalid fields' };
    }
    return { type: false, message: result };
};

module.exports = userLogin;