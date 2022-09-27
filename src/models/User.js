const UserModel = (sequelize, DataTypes) => {
    const defineUser = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'users',
        underscored: true 
    });

    defineUser.associate = (models) => {
        defineUser.hasMany(models.BlogPost, {
            foreignKey: 'user_id', as: 'blogposts'
        });
    }
    return defineUser;
}

module.exports = UserModel;