const { User } = require('../models/index');

const getAllUsers = async () => {
    const result = await User.findAll(
        { attributes: ['id', 'displayName', 'email', 'image'] },
);
    return result;
};

const getUserById = async (id) => {
        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ['password'] },
          });
        return user;
      };

const createUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });

    return result;
};

module.exports = { createUser, getAllUsers, getUserById };