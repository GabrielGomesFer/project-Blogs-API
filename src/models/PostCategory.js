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
        models.Category.belongsToMany(models.BlogPost, {
        as:'posts',
        through: "posts_categories",
        foreignKey: 'post_id',
        otherKey: 'category_id'
    });
        models.BlogPost.belongsToMany(models.Category, {
            as:'categories',
            through: "posts_categories",
            foreignKey: 'category_id',
            otherKey: 'category_id'
        });
    }
    return definePostCategory;
}



module.exports = PostCategoryModel;