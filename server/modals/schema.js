const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    email: { type: String },
    phone: { type: Number }
  });
const tripSchema = new mongoose.Schema({
    busName:{type:String},
    busFare: {type:Number},
    category: {type:String},
    totalSeats:{type:Number},
    totalWindowSeatsAvailable:{type:Number},
    rating:{type:Number},
    startTime:{type:String},
    EndTime:{type:String}
})
const bookedTicketsSchema=new mongoose.Schema({
    userData:[userSchema],
    fromTo:{From: {type:String}, To: {type:String}, Date: {type:String}},
    selectedBusDetails:{EndTime:{type:String},busFare:{type:Number},busName:{type:String},category: {type:String},rating: {type:Number},startTime:{type:String},totalSeats:{type:Number},totalWindowSeatsAvailable:{type:Number}},
    selectedSeats:{type:Array}
})

exports.tripSchema = tripSchema;
exports.bookedTicketsSchema=bookedTicketsSchema;