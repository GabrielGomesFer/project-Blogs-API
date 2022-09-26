const PostCategoryModel = (sequelize, DataTypes) => {
    const definePostCategory = sequelize.define('PostCategory', {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            
        },
    },
    {
        timestamps: false,
        tableName: 'posts_categories',
    });

    definePostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as:'posts',
            through: "posts_categories",
            foreignKey: 'post_id',
            otherKey: 'category_id'
        });
        models.Category.belongsToMany(models.BlogPost, {
            as:'categories',
            through: "posts_categories",
            foreignKey: 'category_id',
            otherKey: 'post_id'
        });
    }
    return definePostCategory;
}



module.exports = PostCategoryModel;