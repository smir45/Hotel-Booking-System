'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Restaurent.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.JSONB,
      },
      cuisine: {
        type: DataTypes.STRING,
      },
      meals: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.STRING,
      },
      review_count: {
        type: DataTypes.STRING,
      },
      website: {
        type: DataTypes.JSONB,
      },
      price_range: {
        type: DataTypes.STRING,
      },
      about: {
        type: DataTypes.JSONB,
      },
      url: {
        type: DataTypes.JSONB,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
  }, {
    sequelize,
    modelName: 'Restaurent',
  });
  return Restaurent;
};