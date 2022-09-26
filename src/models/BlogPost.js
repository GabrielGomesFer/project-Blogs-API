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
    user_id:{
            type: DataTypes.INTEGER,
            foreignKey: true,
            },
        published: DataTypes.DATE,
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