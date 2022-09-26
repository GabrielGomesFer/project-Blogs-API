const CategoryModel = (sequelize, DataTypes) => {
    const defineCategory = sequelize.define('Category', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
        name: DataTypes.STRING,
    });

    return defineCategory;
}

module.exports = CategoryModel;