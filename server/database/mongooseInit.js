require('dotenv').config();

const mongoose = require('mongoose');
const { tripSchema,bookedTicketsSchema } = require('../modals/schema');
const MongoUrl=process.env.MONGO_URL;

mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
        console.log("connection established with mongodb server"); 
    })
    .catch(err => {
        console.log("error while connection", err)
    });
let Booking =mongoose.model('TRIPS',tripSchema);
let previousTickets=mongoose.model('BOOKED_TICKETS',bookedTicketsSchema);
module.exports={Booking,previousTickets};