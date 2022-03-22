'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class hotel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            hotel.hasMany(models.Address, {
                foreignKey: 'hotelId'
            })

            hotel.hasMany(models.Currency, {
                foreignKey: 'hotelId'
            })
            hotel.hasMany(models.images, {
                foreignKey: 'hotelId'
            })
            hotel.hasMany(models.hotel_reviews, {
                foreignKey: 'hotelId'
            })

            hotel.hasMany(models.facilities, {
                foreignKey: 'hotelId'
            })

            hotel.belongsTo(models.User, {
                foreignKey: 'userId'
            })

        }
    };
    hotel.init({
        slug: DataTypes.STRING,
        checkin: DataTypes.DATE,
        checkout: DataTypes.DATE,
        title: DataTypes.STRING,
        desc: DataTypes.STRING,
        distance: DataTypes.STRING,
        longitude: DataTypes.STRING,
        latitude: DataTypes.STRING,
        only_left: DataTypes.INTEGER,
        thumbnail: DataTypes.STRING,
        currency_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: "Currencies",
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: 'hotel',
    });
    return hotel;
};