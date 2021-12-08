'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Hotel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "https://images.unsplash.com/photo-1529032980400-2f6c425c0ec5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80",
    },
    slug:{
      type:DataTypes.STRING,
    },
    hearts:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    reviews:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    rating:{
        type:DataTypes.FLOAT,
        defaultValue:0
    },
    price:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    stars:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    rooms:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    bathrooms:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    beds:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    amenities:{
        type:DataTypes.STRING,
        defaultValue:0
    },
    services:{
        type:DataTypes.STRING,
        defaultValue:0
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};