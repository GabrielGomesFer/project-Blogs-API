'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      },
      published: Sequelize.DATE,
      updated: Sequelize.DATE,
    },
    {
      timestamps: false,
    }
    );

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('blog_posts');

  }
};
