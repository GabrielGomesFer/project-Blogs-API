const CategoryModel = (sequelize, DataTypes) => {
    const defineCategory = sequelize.define('Category', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    });

    return defineCategory;
}

module.exports = CategoryModel;