'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slug: {
        type: Sequelize.STRING
      },
      checkin: {
        type: Sequelize.DATE
      },
      checkout: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      only_left: {
        type: Sequelize.INTEGER
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      currency_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "Currencies",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hotels');
  }
};