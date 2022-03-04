const express = require("express");
const { Restaurent } = require("../../../models");


module.exports.getAllRestaurents = async (req, res, next) => {
    try{
        const restaurents = await Restaurent.findAll();
        res.status(200).json(restaurents);
    }
    catch(err){
        res.status(500).json({
            message: "Error retrieving restaurents",
            error: err
        });
    }
}
