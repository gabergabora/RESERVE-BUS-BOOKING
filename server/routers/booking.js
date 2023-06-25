const express = require('express');
const app = express();
app.use(express.json());
const { Booking,previousTickets } = require('../database/mongooseInit');
const router = express.Router();


//----------USED APIS----------

//----------TEST APIS----------
router.get('/',async (req,res)=>{
  try {
    res.status(200).send("The Server is Working Fine");
  }catch (err) {res.status(500).send(err)}
})
//-------GET REQUEST FOR TRIPS API-------
router.get('/trips',async (req,res)=>{
  try {
      const pastTrips = await Booking.find().limit(50);
      res.status(200).json(pastTrips);
  }catch (err) {res.status(500).send(err)}
})
//----POST REQUEST FOR SAVING TICKETS BOOKED API----
router.post('/tickets', async (req, res) => {
  const newTicket = new previousTickets(req.body);
  try {
    const savedTicket=await newTicket.save();
    res.status(200).json(savedTicket);
  }catch (err) {res.status(401).json(err)}
})

//----------NOT USED APIS----------


//----POST REQUEST FOR ADDING NEW TRIP API----Not used
router.post("/trips", async (req, res) => {
    const newTrip = new Booking(req.body);
    // newTrip.date = new Date().toLocaleDateString();
    try {
       const savedTrip=await newTrip.save();
       res.status(200).json(savedTrip);
    }catch (err) {res.status(405).json(err)}
  })
//----GET REQUEST FOR TRIPS BY DATE API----Not USed
  router.get("/trips/:date", async (req, res) => {
    const searchDate = req.params.date;
    try {
      const trips = await Booking.find({date:searchDate});
      trips.length>0? res.status(200).json(trips) : res.status(404).send("No Trips Found");
    } catch (err) {res.status(500).json({err})}
  });
//----GET REQUEST FOR TRIPS BY QUERY API----Not Used
  router.get("/tripsquery", async (req, res) => {
    const { From, To } = req.query;
    try {
      const result = await Booking.find({ From, To });
      result.length > 0 ? res.status(200).json(result) : res.status(404).send("No result found");
    } catch (err) {res.status(500).json({ err })}
  });

  module.exports = router;
