'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association heres
      User.hasMany(models.Address, {
        // as: 'address',
        foreignKey: 'userId'
      })

      User.hasMany(models.hotel_reviews, {
        // as: 'hotel_reviews',
        foreignKey: 'userId'
      })

    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    isVerified:DataTypes.BOOLEAN,
    isAdmin:DataTypes.BOOLEAN,
    otp:DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};