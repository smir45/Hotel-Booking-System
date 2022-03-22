'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Address.belongsTo(models.User, {
                as: 'user'
            })
            Address.belongsTo(models.hotel, {
                as: 'hotel'
            })

            Address.belongsTo(models.Destination, {
                as: 'destination'
            })
            Address.belongsTo(models.Admin, {
                as: 'admin'
            })


        }
    };
    Address.init({
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Address',
    });
    return Address;
};