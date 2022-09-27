const BlogPostsModel = (sequelize, DataTypes) => {
    const defineBlogPosts = sequelize.define('BlogPost', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
    {
        timestamps: false,
        tableName: 'blog_posts',
    });

    defineBlogPosts.associate = (models) => {
        defineBlogPosts.belongsTo(models.User, {
            foreignKey: 'user_id', as:'user'
        });
    }
    return defineBlogPosts;
}



module.exports = BlogPostsModel;