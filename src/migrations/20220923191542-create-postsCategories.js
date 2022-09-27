'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', { 
      post_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        }
      },
    }, {
      timestamps: false,
      tableName: 'posts_categories',
    }
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');

  }
};
