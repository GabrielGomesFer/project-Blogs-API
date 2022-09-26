const UserModel = (sequelize, DataTypes) => {
    const defineUser = sequelize.define('User', {
        id: DataTypes.INTEGER,
        display_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        table: 'users',
    });

    defineUser.associate = (models) => {
        defineUser.hasMany(models.BlogPost, {
            foreignKey: 'user_id', as: 'blogposts'
        });
    }
    return defineUser;
}

module.exports = UserModel;