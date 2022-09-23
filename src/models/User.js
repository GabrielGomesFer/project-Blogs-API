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

    return defineUser;
}

module.exports = UserModel;