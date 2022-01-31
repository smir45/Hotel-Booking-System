
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
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
      type: DataTypes.INTEGER,
    },
    totalCheckIns: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    domain:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    uniqueKey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    listing_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    url: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    checkIn:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    checkOut:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    title:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    review_score:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    review_count:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    review_title:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    distance:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_booked:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    only_left:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    thumbnail:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    currency:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    star:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    search_person:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    search_night:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_hotel:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_room:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    id_price:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    roomType:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    price:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    taxes:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    roomTypeAvailability:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    roomTypeAvailabilityText:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    price_unit:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    priceConditions:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    priceMaxPerson:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    priceForRoomCount:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    roomTypeBeds:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    amenities:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    roomsize:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    nr_of_facilities:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    photos_count:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    beds:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    full_address:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    images:{
      type: DataTypes.JSONB,
      allowNull: true,
    },
    description: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    facilities: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    restaurants: {
      type: DataTypes.JSONB,
      allowNull: true,  
    },
    parking: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    languages_spoken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    payment_methods: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },

  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};