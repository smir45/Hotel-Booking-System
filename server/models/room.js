'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Room.belongsTo(models.hotel, {
                foreignKey: 'hotelId',
            });
        }
    };
    Room.init({
        price: DataTypes.STRING,
        catagory: DataTypes.STRING,
        beds: DataTypes.INTEGER,
        ac: DataTypes.BOOLEAN,
        occupied: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Room',
    });
    return Room;
};