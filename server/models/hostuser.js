const uuid = require('uuid');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hostusers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get(), password: null};
    }
  };
  Hostusers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
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
      allowNull: true,
      type: DataTypes.DATE
    }
  }, {
    paranoid: true,
    sequelize,
    modelName: 'Hostusers',
  });
  return Hostusers;
};