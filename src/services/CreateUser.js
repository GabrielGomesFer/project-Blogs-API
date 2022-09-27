const { User } = require('../models/index');

const getUser = async (email) => {
    // console.log('entrou GetUser');
    const result = await User.findOne({ where: { email } });
    console.log('registrado:', result);
    if (!result) {
        return { type: false };
    }
    return { type: true, message: 'User already registered' };
};

const createUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });

    return result;
};

module.exports = { getUser, createUser };