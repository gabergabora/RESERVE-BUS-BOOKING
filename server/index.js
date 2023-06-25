require('dotenv').config();

const express = require("express");
const app = express();
const port=process.env.PORT;
const router = require('./routers/booking');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port);