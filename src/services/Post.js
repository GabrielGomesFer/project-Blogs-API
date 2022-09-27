const { BlogPost, User, Category } = require('../models/index');

const getAllPosts = async () => {
    const result = await BlogPost.findAll({
        include: [
            {
              model: User,
              as: 'user',
              attributes: {
                exclude: ['password'],
              },
            },
            {
              model: Category,
              as: 'categories',
              through: { attributes: [] },
            },
          ],
    });
    console.log('service: ', result);
    return result;
};

module.exports = getAllPosts;