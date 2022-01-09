"use strict";

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hotels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      zip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:
          "https://images.unsplash.com/photo-1529032980400-2f6c425c0ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
      },
      slug: {
        type: Sequelize.STRING,
      },
      hearts: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      reviews: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      rating: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      stars: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      rooms: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bathrooms: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      beds: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      amenities: {
        type: Sequelize.STRING,
        defaultValue: 0,
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
    await queryInterface.dropTable("Hotels");
  },
};
