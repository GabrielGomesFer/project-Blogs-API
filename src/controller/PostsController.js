const userService = require('../services/Post');

const getAllPosts = async (req, res) => {
    const result = await userService();

    return res.status(200).json(result);
};

module.exports = getAllPosts;