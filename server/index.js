'use strict'

require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/wedding-site';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// routes
require('./src/routes')(app);

const port = process.env.PORT || 5000;
const addr = process.env.ADDR || "127.0.0.1";
console.log('Listening on ' + addr + ':' + port);
app.listen(port, addr);
