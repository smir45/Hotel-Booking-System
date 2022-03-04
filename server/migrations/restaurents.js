"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Restaurents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.JSONB,
      },
      cuisine: {
        type: Sequelize.STRING,
      },
      meals: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      rating: {
        type: Sequelize.STRING,
      },
      review_count: {
        type: Sequelize.STRING,
      },
      website: {
        type: Sequelize.JSONB,
      },
      price_range: {
        type: Sequelize.STRING,
      },
      about: {
        type: Sequelize.JSONB,
      },
      url: {
        type: Sequelize.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Restaurents");
  },
};
