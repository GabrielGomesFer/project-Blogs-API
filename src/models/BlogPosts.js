const BlogPostsModel = (sequelize, DataTypes) => {
    const defineBlogPosts = sequelize.define('BlogPosts', {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        content: {
            type: DataTypes.STRING,
            foreignKey: true,
        },
        ṕublished: DataTypes.DATE,
        updated: DataTypes.DATE,
    });

    defineBlogPosts.associate = (models) => {
        defineBlogPosts.belongsTo(models.User, {
            foreignKey: 'user_id', as:'user'
        });
    }
    return defineBlogPosts;
}



module.exports = BlogPostsModel;