'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bookings extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Bookings.belongsTo(models.User, {
                foreignKey: 'userId',
            })

            Bookings.belongsTo(models.hotel, {
                foreignKey: 'hotelId',
            })
        }
    };
    Bookings.init({
        checkin: DataTypes.DATE,
        checkout: DataTypes.DATE,
        no_of_person: DataTypes.INTEGER,
        price: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Bookings',
    });
    return Bookings;
};