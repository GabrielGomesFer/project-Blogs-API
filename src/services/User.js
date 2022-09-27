const { User } = require('../models/index');

const getAllUsers = async () => {
    const result = await User.findAll(
        { attributes: { exclude: ['password'] } },
);
    return result;
};

const getUserById = async (id) => {
        const user = await User.findOne({ where: { id } });
        return user;
      };

const createUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });

    return result;
};

module.exports = { createUser, getAllUsers, getUserById };