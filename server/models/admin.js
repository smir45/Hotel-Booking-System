'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Admin extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Admin.hasMany(models.Address, {
                foreignKey: 'adminId',
            });

            Admin.hasMany(models.hotel, {
                foreignKey: 'adminId',
            });
        }
    };
    Admin.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        otp: DataTypes.STRING,
        isVerified: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Admin',
    });
    return Admin;
};