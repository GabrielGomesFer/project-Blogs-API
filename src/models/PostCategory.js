const PostCategoryModel = (sequelize, DataTypes) => {
    const definePostCategory = sequelize.define('PostCategory', {
        post_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
    },
    {
        timestamps: false,
    });

    definePostCategory.associate = (models) => {
        models.BlogPost.belongsTo(models.Category, {
            as:'posts',
            through: PostCategoryModel,
            foreignKey: 'id',
            otherKey: 'post_id'
        });
        models.Category.belongsTo(models.BlogPost, {
            as:'categories',
            through: PostCategoryModel,
            foreignKey: 'id',
            otherKey: 'category_id'
        });
    }
    return definePostCategory;
}



module.exports = PostCategoryModel;