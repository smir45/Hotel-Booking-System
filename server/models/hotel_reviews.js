'use strict';
const {
  Model
} = require('sequelize');
const hotel = require('./hotel');
module.exports = (sequelize, DataTypes) => {
  class hotel_reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      hotel_reviews.belongsTo(models.User, {
        as: 'user'
      });
      hotel_reviews.belongsTo(models.hotel, {
        as: 'hotel'
      });
      

    }
  };
  hotel_reviews.init({
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    
    },
    average: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    review: DataTypes.STRING,
    Comment: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'hotel_reviews',
  });
  return hotel_reviews;
};