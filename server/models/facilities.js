'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      facilities.belongsTo(models.hotel, {
        foreignKey: 'hotelId'
      })
    }
  };
  facilities.init({
    wifi: DataTypes.BOOLEAN,
    parking: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN,
    swimming_pool: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'facilities',
  });
  return facilities;
};