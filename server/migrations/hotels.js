"use strict";

const { Sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Hotels", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      totalCheckIns: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      domain:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      uniqueKey: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      listing_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      url: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      checkIn:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      checkOut:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      title:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      review_score:{
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      review_count:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      review_title:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      distance:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      longitude:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_booked:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      only_left:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      thumbnail:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      currency:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      star:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      search_person:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      search_night:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      id_hotel:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_room:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      id_price:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      roomType:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      price:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      taxes:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      roomTypeAvailability:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      roomTypeAvailabilityText:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      price_unit:{
        type: Sequelize.DECIMAL,
        allowNull: true,
      },
      priceConditions:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      priceMaxPerson:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      priceForRoomCount:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      roomTypeBeds:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      amenities:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      roomsize:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      nr_of_facilities:{
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      photos_count:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      beds:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      full_address:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      images:{
        type: Sequelize.JSONB,
        allowNull: true,
      },
      description: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      facilities: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      restaurants: {
        type: Sequelize.JSONB,
        allowNull: true,  
      },
      parking: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      languages_spoken: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment_methods: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timestamp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Hotels");
  },
};
